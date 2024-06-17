import { useTeamsStore } from "../store/TeamsStore";
import { KnockOutTeamContainer } from "./KnockOutTeamContainer";

export function KnockOutSemisContainer(){
  const semisRound = useTeamsStore((state) => state.semisRound);
  const finalRound = useTeamsStore((state) => state.finalRound);
  const fechfinalRound = useTeamsStore((state) => state.fechfinalRound);
  const selectTeamWon = (bracket_next_round:number, bracket_next_round_as_local:boolean,teamWonId:number) => {
    const updatedFinalRound = [...finalRound];
    updatedFinalRound[bracket_next_round][bracket_next_round_as_local ? 'localTeamId' : 'awayTeamId'] = teamWonId;
    fechfinalRound(updatedFinalRound);
  };

  return(
    <>
    <section className= "p-2 bg-teal-700 border-2 rounded-lg border-x-gray-300">
      <h1 className = "self-start text-3xl">Semis</h1>
      <div className = "flex flex-row gap-3 my-3">
        {
          semisRound.map((item, index) => (
            <KnockOutTeamContainer key={index} bracket_next_round={item.bracket_next_round} bracket_next_round_as_local={item.bracket_next_round_as_local} localRivalIndex={item.localTeamId} awayRivalIndex={item.awayTeamId} selectTeamWon={selectTeamWon} />
          ))
        }
      </div>
    </section>
    </>
  )
}