import { useState, useEffect } from "react";
import { Team } from "../models/teams";
import { GetChampionsTeams } from "../services/champions-2024-service";

export function useChampionsTeams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    async function GetTeams() {
      const currrentTeams = await GetChampionsTeams(); 
      setTeams(currrentTeams.sort((a,b)=>{
        return a.position - b.position
      }));
    }
    GetTeams();
  },[])

  return { teams }
}