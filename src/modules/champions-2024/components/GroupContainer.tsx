import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Team } from "../models/teams";
import { TeamContainer } from "./TeamContainer";
import { useEffect, useState } from "react";
import { useTeamsStore } from "../store/TeamsStore";
import { useGroupContainer } from "../hooks/useGroupContainer";

interface GroupContainerProps {
  color_container:string,
  title:string,
  start_index:number,
  teams:Team[]
}
export function GroupContainer(props:GroupContainerProps){
  const {teams, handleDragEnd} = useGroupContainer({initialTeams:props.teams, start_index:props.start_index});

  return (
    <>
      <div className={props.color_container.concat(" p-4 h-fit")} >
        <h4 className="text-sm">{props.title}</h4>
        <section className="flex flex-col gap-3">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={teams?.map((team) => team.id) ?? []} strategy={verticalListSortingStrategy} >
              {teams?.map((team) =>(
                <TeamContainer key={team.id} team ={team}/>
              ))}
            </SortableContext>
          </DndContext>
        </section>
      </div>
    </>
  )
}