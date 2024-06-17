import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Team } from "../models/teams";
import { TeamContainer } from "./TeamContainer";
import { useGroupContainer } from "../hooks/useGroupContainer";
import '../styles/GroupContainer.css';
interface GroupContainerProps {
  start_index:number,
  teams:Team[]
}
export function GroupContainer(props:GroupContainerProps){
  const {teamsInitial, handleDragEnd} = useGroupContainer({initialTeams:props.teams, start_index:props.start_index});
  return (
    <>
      <div className="p-4 bg-indigo-950 h-fit" >
        <section className="grid grid-cols-1 gap-3 group-container">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={teamsInitial?.map((team) => team.id) ?? []} strategy={verticalListSortingStrategy}>       
              {teamsInitial?.map((team) =>(
                <TeamContainer key={team.id} team ={team}/>
              ))}
            </SortableContext>
          </DndContext>
        </section>
      </div>
    </>
  )
}