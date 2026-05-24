import { KBO_TEAMS } from "@/src/constants/kboTeams";

import StadiumFilterBadge from "./StadiumFilterBadge";

const StadiumFilterBadgeList = () => {
  return (
    <section className="flex gap-2">
      <section className="flex gap-2">
        {Object.values(KBO_TEAMS).map((team) => (
          <StadiumFilterBadge key={team.id} name={team.name} logo={team.logo} />
        ))}
      </section>
    </section>
  );
};

export default StadiumFilterBadgeList;
