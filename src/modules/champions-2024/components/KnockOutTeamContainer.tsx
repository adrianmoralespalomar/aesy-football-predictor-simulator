import { useState } from "react";
import { useTeamsStore } from "../store/TeamsStore";
import { TEAMS_LOGOS_FOLDER } from "../../core/constants/Image_Folder";

export interface KnockOutTeamContainerProps {
  localRivalIndex:number,
  awayRivalIndex:number,
  bracket_next_round:number,
  bracket_next_round_as_local:boolean,
  selectTeamWon: (racket:number, bracket_next_round_as_local:boolean, teamWonId:number) => void,
}
export function KnockOutTeamContainer(props:KnockOutTeamContainerProps){
  const [selectedTeamWon, setSelectedTeamWon] = useState(-1);

  const finalTeamsQualified = useTeamsStore((state) => state.finalTeamsQualified);
  function selectTeamWon(teamWonId:number) {
    setSelectedTeamWon(teamWonId);
    props.selectTeamWon(props.bracket_next_round, props.bracket_next_round_as_local, teamWonId);
  }
  
  const localTeam = finalTeamsQualified.find((item) => item.id === props.localRivalIndex);
  const awayTeam = finalTeamsQualified.find((item) => item.id === props.awayRivalIndex);

  return (
    <>
    <div className = "[&>button]:rounded-full [&>button.selected-team]:bg-green-500 [&>button:not(.selected-team):first-child]:bg-purple-500 [&>button:not(.selected-team):last-child]:bg-blue-800  flex flex-row items-center">
      <button disabled = {!localTeam} className = {`hover:brightness-75 ease-in duration-300 ${selectedTeamWon === props.localRivalIndex ? 'selected-team' : ''}`}  onClick={() => selectTeamWon(props.localRivalIndex)}>
        <img className = "w-12 h-12 p-1" src={`/public/assets/teams-logo/${localTeam?.abbreviation}.webp`} alt="" onError={(e) => e.currentTarget.src = '/public/assets/teams-logo/notfoundpicture.webp'} />
      </button>

      <div className = "w-1 h-0.5 bg-slate-50"></div>
      
      <button disabled = {!awayTeam} className = {`hover:brightness-75 ease-in duration-300 ${selectedTeamWon === props.awayRivalIndex ? 'selected-team' : ''}`} onClick={() => selectTeamWon(props.awayRivalIndex)}>
        <img className = "w-12 h-12 p-1" alt="" src={`${TEAMS_LOGOS_FOLDER}${awayTeam?.abbreviation}.webp`} onError={(e) => e.currentTarget.src = `${TEAMS_LOGOS_FOLDER}/notfoundpicture.webp`}  />
      </button>
    </div>
      
    </>
  )
}