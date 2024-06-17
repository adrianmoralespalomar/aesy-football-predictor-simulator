import { Knockout } from "../models/knockout";
import { Team } from "../models/teams";

export async function GetChampionsTeams(){
  const response = await fetch ('/database/champions-teams-2025.json');
  const json = await response.json();
  return json?.teams as Team[]
}

export function GetRound32Teams(teams: Team[]):Knockout[]{
  return [
    {
      localTeamId: teams[15].id,
      awayTeamId: teams[16].id,
      bracket_next_round:0,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[8].id,
      awayTeamId: teams[22].id,
      bracket_next_round:1,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[10].id,
      awayTeamId: teams[20].id,
      bracket_next_round:2,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[12].id,
      awayTeamId: teams[18].id,
      bracket_next_round:3,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[13].id,
      awayTeamId: teams[19].id,
      bracket_next_round:4,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[11].id,
      awayTeamId: teams[21].id,
      bracket_next_round:5,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[9].id,
      awayTeamId: teams[23].id,
      bracket_next_round:6,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[14].id,
      awayTeamId: teams[17].id,
      bracket_next_round:7,
      bracket_next_round_as_local:false
    },
  ]
}

export function GetRound16Teams(teams: Team[]):Knockout[]{
  return [
    {
      localTeamId: teams[0].id,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:true
    },
    {
      localTeamId: teams[7].id,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[4].id,
      awayTeamId: 0,
      bracket_next_round:1,
      bracket_next_round_as_local:true
    },
    {
      localTeamId: teams[3].id,
      awayTeamId: 0,
      bracket_next_round:1,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[2].id,
      awayTeamId: 0,
      bracket_next_round:2,
      bracket_next_round_as_local:true,
    },
    {
      localTeamId: teams[5].id,
      awayTeamId: 0,
      bracket_next_round:2,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: teams[6].id,
      awayTeamId: 0,
      bracket_next_round:3,
      bracket_next_round_as_local:true
    },
    {
      localTeamId: teams[1].id,
      awayTeamId: 0,
      bracket_next_round:3,
      bracket_next_round_as_local:false
    },
  ]
}

export function GetQuartersTeams():Knockout[]{
  return [
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:true
    },
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:false
    },
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:1,
      bracket_next_round_as_local:true
    },
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:1,
      bracket_next_round_as_local:false
    }
  ]
}

export function GetSemisTeams():Knockout[]{
  return [
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:true
    },
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:false
    }
  ]
}

export function GetFinalTeams():Knockout[]{
  return [
    {
      localTeamId: 0,
      awayTeamId: 0,
      bracket_next_round:0,
      bracket_next_round_as_local:true
    }
  ]
}