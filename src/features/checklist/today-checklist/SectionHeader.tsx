import Button from "@/src/components/common/Button";
import GameStatusDelayIcon from "@/src/components/icons/GameStatusDelayIcon";

import TeamSelectDropdown, { TeamWeatherPayload } from "../components/TeamSelectDropdown";

interface SectionHeaderProps {
  stadiumName: string;
  selectedTeam: string;
  onTeamChange: (payload: TeamWeatherPayload) => void;
}

const SectionHeader = ({ stadiumName, selectedTeam, onTeamChange }: SectionHeaderProps) => {
  return (
    <header className="mb-2.5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div className="flex justify-between gap-2 md:justify-start lg:gap-5">
        <h2 className="text-foreground text-lg font-bold md:text-xl">{stadiumName} 오늘 날씨</h2>
        <div className="text-muted flex items-center gap-0.5 text-sm font-semibold lg:gap-1">
          <GameStatusDelayIcon size={18} />
          14:00 기준
        </div>
      </div>
      <TeamSelectDropdown
        value={selectedTeam}
        onChange={onTeamChange}
        className="w-full md:w-auto md:max-w-45"
      />
    </header>
  );
};

export default SectionHeader;
