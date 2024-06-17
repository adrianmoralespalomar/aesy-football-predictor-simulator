import { Team } from "../models/teams";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useTeamsStore } from "../store/TeamsStore";

interface useGroupContainerProps {
  initialTeams: Team[],
  start_index:number
}

export function useGroupContainer(props:useGroupContainerProps) {
  const teamsInitial = useTeamsStore((state) => state.teamsInitial);
  const fechTeams = useTeamsStore((state) => state.fechTeams);
  const handleDragEnd = (event:DragEndEvent) => {
    const { active, over } = event;
    if ((!over) || active.id === over?.id) return;
    if(!teamsInitial) return [];
    const oldIndex = teamsInitial.findIndex((team) => team.id === active.id);
    const newIndex = teamsInitial.findIndex((team) => team.id === over?.id);
    fechTeams(arrayMove(teamsInitial, oldIndex, newIndex).map((team, index) => {
      return { ...team, position: index + 1 + props.start_index };
    }));
  };

  return { teamsInitial, handleDragEnd }
}