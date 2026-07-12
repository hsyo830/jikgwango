"use client";

import { useEffect, useRef, useState } from "react";

import { KBO_TEAMS } from "@/src/constants/kboTeams";
import { stadiums } from "@/src/data/stadiums";

// 드롭다운에서 넘겨줄 데이터: 구장명 + 좌표
export interface TeamWeatherPayload {
  stadiumId: string;
  teamName: string;
  stadiumName: string;
  nx: number;
  ny: number;
}

interface TeamSelectDropdownProps {
  /** 부모가 선택값을 직접 제어하고 싶을 때 (controlled) */
  value?: string;
  /** 초기값 (uncontrolled일 때, 기본: 롯데 자이언츠) */
  defaultValue?: string;
  /** 구단 선택 시 호출 -> 여기서 lat/lng으로 날씨 API 호출하면 됨 */
  onChange?: (payload: TeamWeatherPayload) => void;
  className?: string;
}

// kboTeams.ts의 name들만 뽑아서 드롭다운 리스트 구성
const TEAM_NAMES = Object.values(KBO_TEAMS).map((team) => team.name);

const TeamSelectDropdown = ({
  value,
  defaultValue = "롯데 자이언츠",
  onChange,
  className = "",
}: TeamSelectDropdownProps) => {
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selected = value ?? internalValue;

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ESC로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // 팀 선택 -> kboTeams의 stadiumId(=stadiums.ts의 id)로 좌표 조회 -> 부모로 전달
  const handleSelect = (teamName: string) => {
    setInternalValue(teamName);
    setIsOpen(false);

    const team = Object.values(KBO_TEAMS).find((t) => t.name === teamName);
    if (!team) {
      console.warn(`[TeamSelectDropdown] '${teamName}'에 해당하는 구단 정보를 찾을 수 없습니다.`);
      return;
    }

    // kboTeams.ts의 stadiumId 값은 stadiums.ts의 id 필드와 짝지어짐
    // (stadiums.ts의 stadiumId 필드는 잠실처럼 물리적으로 같은 구장을 묶는 값이라 LG/두산이 겹침)
    const stadium = stadiums.find((s) => s.id === team.stadiumId);
    if (!stadium) {
      console.warn(
        `[TeamSelectDropdown] stadiumId '${team.stadiumId}'에 해당하는 구장 정보를 찾을 수 없습니다.`,
      );
      return;
    }

    // Stadium 타입에서 map이 옵셔널로 선언돼 있어 undefined 가능성을 좁혀줘야 함
    if (!stadium.map) {
      console.warn(`[TeamSelectDropdown] '${stadium.name}'에 좌표(map) 정보가 없습니다.`);
      return;
    }

    if (!stadium.weatherGrid) {
      console.warn(`[TeamSelectDropdown] '${stadium.name}'에 weatherGrid(nx, ny) 정보가 없습니다.`);
      return;
    }

    onChange?.({
      stadiumId: team.stadiumId,
      teamName: team.name,
      stadiumName: stadium.name,
      nx: stadium.weatherGrid.nx,
      ny: stadium.weatherGrid.ny,
    });
  };

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div ref={containerRef} className={`relative w-full md:min-w-28 lg:min-w-35 ${className}`}>
      {/* 박스 전체 영역 클릭 -> 드롭다운 토글 */}
      <button
        type="button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="border-border bg-surface text-foreground hover:border-border-strong focus:ring-warning flex w-full items-center justify-between rounded-lg border px-5 py-2 text-left text-sm font-medium shadow-sm transition-colors focus:ring-2 focus:outline-none md:px-2.5 md:text-xs lg:px-4 lg:text-[13px]"
      >
        <span>{selected}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`text-muted h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="border-border bg-surface [&::-webkit-scrollbar-thumb]:bg-border-strong absolute z-10 mt-1 max-h-55 w-full overflow-y-auto rounded-lg border py-1 shadow-lg [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {/* max-h-[220px] ≈ 5개 항목(각 44px) 노출, 그 이상은 내부 스크롤 */}
          {TEAM_NAMES.map((teamName) => {
            const isSelected = teamName === selected;
            return (
              <li key={teamName} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelect(teamName)}
                  className={`flex h-11 w-full items-center px-4 text-sm transition-colors md:text-xs lg:text-[13px] ${
                    isSelected
                      ? "bg-warning-soft text-warning font-semibold"
                      : "text-foreground hover:bg-surface-2"
                  }`}
                >
                  {teamName}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TeamSelectDropdown;
