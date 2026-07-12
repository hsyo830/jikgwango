"use client";

import { useState } from "react";

import SectionCard from "@/src/components/common/SectionCard";
import { getWeatherBaseDateTime } from "@/src/utils/weatherTime";

import { TeamWeatherPayload } from "../components/TeamSelectDropdown";
import SectionHeader from "./SectionHeader";
import WeatherChecklistCard from "./WeatherChecklistCard";

const TodaySuggestCheckListSection = () => {
  const { base_date, base_time } = getWeatherBaseDateTime();

  const [selected, setSelected] = useState<TeamWeatherPayload>({
    stadiumId: "busan",
    teamName: "롯데 자이언츠",
    stadiumName: "사직야구장",
    nx: 98,
    ny: 76,
  });

  const handleTeamChange = (payload: TeamWeatherPayload) => {
    setSelected(payload);
  };

  return (
    <SectionCard>
      <SectionHeader
        stadiumName={selected.stadiumName}
        selectedTeam={selected.teamName}
        onTeamChange={handleTeamChange}
        base_time={base_time}
      />
      <WeatherChecklistCard
        stadiumId={selected.stadiumId}
        base_date={base_date}
        base_time={base_time}
        nx={selected.nx}
        ny={selected.ny}
      />
    </SectionCard>
  );
};

export default TodaySuggestCheckListSection;
