import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Team } from "../models/teams";
import { COUNTRIES_LOGOS_FOLDER, TEAMS_LOGOS_FOLDER } from "../../core/constants/Image_Folder";

interface TeamContainerProps {
  team:Team
}
export function TeamContainer({team}:TeamContainerProps){
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: team.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-2 p-3 backdrop-brightness-50 team-container" style={style} ref={setNodeRef} {...attributes} {...listeners} >
        <span className="w-4 text-md">{team.position}</span>
        <img className="w-12 h-auto" src={`${TEAMS_LOGOS_FOLDER}${team.abbreviation}.webp`} alt="" />
        <span className="text-sm">{team.name}</span>
        <img className="w-6 h-auto ml-auto" src={`${COUNTRIES_LOGOS_FOLDER}${team.country}.png`} alt="" />
      </div>
    </>
  )
}