import { useState, useEffect } from "react";
import { Team } from "../models/teams";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useTeamsStore } from "../store/TeamsStore";

interface useGroupContainerProps {
  initialTeams: Team[],
  start_index:number
}

export function useGroupContainer(props:useGroupContainerProps) {
  const [teams, setTeams] = useState<Team[]>();
  useEffect(() => {
    setTeams(props.initialTeams as Team[]);
  }, [props.initialTeams]);

  const handleDragEnd = (event:DragEndEvent) => {
    const { active, over } = event;
    if ((!over) || active.id === over?.id) return;
    setTeams((currentTeams) => {
      if(!currentTeams) return [];
      const oldIndex = currentTeams.findIndex((team) => team.id === active.id);
      const newIndex = currentTeams.findIndex((team) => team.id === over?.id);
      return arrayMove(currentTeams, oldIndex, newIndex).map((team, index) => {
        return { ...team, position: index + 1 + props.start_index };
      });
    });
  };

  return { teams, handleDragEnd }
}