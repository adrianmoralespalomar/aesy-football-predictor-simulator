import { Team } from "../models/teams";

export async function GetChampionsTeams(){
  const response = await fetch ('/database/champions-teams-2025.json');
  const json = await response.json();
  return json?.teams as Team[]
}