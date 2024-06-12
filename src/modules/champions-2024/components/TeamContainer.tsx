import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Team } from "../models/teams";

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
      <div className="flex flex-row items-center justify-start gap-2 p-3 backdrop-brightness-50" style={style} ref={setNodeRef} {...attributes} {...listeners} >
        <span className="w-4 text-md">{team.position}</span>
        <img className="w-12 h-auto" src={`/src/assets/teams-logo/${team.abbreviation}.webp`} alt="" />
        <span className="text-sm">{team.name}</span>
        <img className="w-6 h-auto ml-auto" src={`/src/assets/countries-logo/${team.country}.png`} alt="" />
      </div>
    </>
  )
}