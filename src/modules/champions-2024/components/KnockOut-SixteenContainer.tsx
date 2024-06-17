import { useTeamsStore } from "../store/TeamsStore";
import { KnockOutTeamContainer } from "./KnockOutTeamContainer";

export function KnockOutSixteenContainer(){
  const sixteenRound = useTeamsStore((state) => state.sixteenRound);
  const quartersRound = useTeamsStore((state) => state.quartersRound);
  const fechquartersRound = useTeamsStore((state) => state.fechquartersRound);
  const selectTeamWon = (bracket_next_round:number, bracket_next_round_as_local:boolean,teamWonId:number) => {
    const updatedQuartersRound = [...quartersRound];
    updatedQuartersRound[bracket_next_round][bracket_next_round_as_local ? 'localTeamId' : 'awayTeamId'] = teamWonId;
    fechquartersRound(updatedQuartersRound);
  };

  return(
    <>
    <section className = "p-2 bg-indigo-600 border-2 rounded-lg border-x-gray-300">
      <h1 className = "self-start text-3xl">Round of 16</h1>
      <div className = "flex flex-row gap-3 my-3">
        {
          sixteenRound.map((item, index) => (
            <KnockOutTeamContainer key={index} bracket_next_round={item.bracket_next_round} bracket_next_round_as_local={item.bracket_next_round_as_local} localRivalIndex={item.localTeamId} awayRivalIndex={item.awayTeamId} selectTeamWon={selectTeamWon} />
          ))
        }
      </div>
    </section>
    </>
  )
}