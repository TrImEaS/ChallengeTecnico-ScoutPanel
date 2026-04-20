import { Bookmark, EllipsisVertical, Share2, ThumbsUp } from "lucide-react";
import type { Route } from "../../../routes/+types/PlayerStats";
import { DashboardCard } from "../../ui/dashboard-card/DashboardCard";

export default function HeaderCard({player}: {player: Route.ComponentProps["loaderData"]}) {
  const getAge = (birthDate: string) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    return `${today.getFullYear() - birthDateObj.getFullYear()} years`;
  }

  return(
    <DashboardCard title="" className="flex flex-col justify-center p-4 sm:px-7 max-sm:min-h-[130px] min-h-[150px] rounded-xl overflow-hidden h-full">
      <section className="flex w-full h-full justify-between">
        <article className="flex gap-5 flex-1 items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border p-1 flex-0.5 rounded-full">
            <img 
              src={player.photoUrl} 
              className="object-cover w-full h-full text-[10px]"
              alt={`${player.name}'s photo`} 
            />
          </div>

          <div className="flex flex-col flex-2">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-zinc-400">{player.nationality}</span>
            </div>
            <span className="text-base sm:text-2xl font-semibold">{player.name}</span>
            <div className="flex items-center gap-2 sm:pt-1 text-xs">
              <div className="relative flex items-center justify-center h-4 w-4">
                <div className="absolute h-2.5 w-2.5 rounded-full bg-primary blur-[2.4px]"></div>
              </div>
              <span className="uppercase sm:text-sm">{player.position.slice(0,2)}</span>
              <span className="sm:text-sm">|</span>
              <span className="sm:text-sm">{getAge(player.birthDate)}</span>
              <span className="sm:text-sm">|</span>
              <span className="sm:text-sm">Professional</span>
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-1 sm:gap-8 justify-between flex-0">
          <div className="flex gap-3 justify-end">
            <ThumbsUp className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10"/>
            <Bookmark className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10"/>
            <Share2 className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10"/>
            <EllipsisVertical className="max-sm:w-4 cursor-pointer hover:text-primary duration-300 w-10"/>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 cursor-pointer hover:bg-primary/80 duration-300 bg-primary max-sm:text-xs py-2 w-fit px-4 rounded-md text-zinc-800 font-bold">
              Compare
            </button>
          </div>
        </article>
      </section>
    </DashboardCard>
  )
}