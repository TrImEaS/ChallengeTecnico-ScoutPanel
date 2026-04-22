import type { Player, Team } from "~/types/index.ts";
import HeaderCard from "./components/HeaderCard";
import CurrentTeamCard from "./components/CurrentTeamCard";
import PhysicalStatsCard from "./components/PhysicalStatsCard";
import MarketValueCard from "./components/MarketValueCard";
import PlayerInfoCard from "./components/PlayerInfoCard";
import PerformanceCard from "./components/PerformanceCard";
import StatisticsCard from "./components/StatisticsCard";
import CareerCard from "./components/CareerCard";

export default function PlayerStatsLayout({ data }: { data: Player }) {
  const { 
    team = {} as Team, 
    stats = [], 
    career = [],
    contractFrom,
    contractTo 
  } = data;

  return (
    <div className="flex flex-col gap-4 justify-center w-full pb-8">
      {/* Top Row: Header + Current Team */}
      <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-8">
          <HeaderCard player={data}/>
        </div>
        <div className="xl:col-span-4">
          <CurrentTeamCard 
            team={team} 
            contractFrom={contractFrom} 
            contractTo={contractTo} 
            leagueName="Liga Profesional de Fútbol"
          />
        </div>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Left Column */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
          <PhysicalStatsCard 
            position={data.position} 
            height={data.height} 
            skillfulFoot={data?.skillfulFoot} 
          />
          <MarketValueCard value={data.marketValue} />
          <PlayerInfoCard player={data} />
        </div>

        {/* Center Column */}
        <div className="lg:col-span-8 xl:col-span-5 flex flex-col gap-4">
          <PerformanceCard stats={stats} />
          <StatisticsCard stats={stats} /> 
        </div>

        {/* Right Column */}
        <div className="lg:col-span-12 xl:col-span-4 flex flex-col gap-4 md:flex-row xl:flex-col">
          <CareerCard careers={career} />
        </div>
      </section>
    </div>
  )
}