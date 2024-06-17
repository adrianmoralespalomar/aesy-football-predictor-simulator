import { useTeamsStore } from "../store/TeamsStore";
import { KnockOutTeamContainer } from "./KnockOutTeamContainer";

export function KnockOutQuartersContainer(){
  const quartersRound = useTeamsStore((state) => state.quartersRound);
  const semisRound = useTeamsStore((state) => state.semisRound);
  const fechsemisRound = useTeamsStore((state) => state.fechsemisRound);
  const selectTeamWon = (bracket_next_round:number, bracket_next_round_as_local:boolean,teamWonId:number) => {
    const updatedSemisRound = [...semisRound];
    updatedSemisRound[bracket_next_round][bracket_next_round_as_local ? 'localTeamId' : 'awayTeamId'] = teamWonId;
    fechsemisRound(updatedSemisRound);
  };
  return(
    <>
    <section className = "p-2 border-2 rounded-lg bg-cyan-500 border-x-gray-300">
      <h1 className = "self-start text-3xl">Quarters</h1>
      <div className = "flex flex-row gap-3 my-3">
        {
          quartersRound.map((item, index) => (
            <KnockOutTeamContainer key={index} bracket_next_round={item.bracket_next_round} bracket_next_round_as_local={item.bracket_next_round_as_local} localRivalIndex={item.localTeamId} awayRivalIndex={item.awayTeamId} selectTeamWon={selectTeamWon} />
          ))
        }
      </div>
    </section>
    </>
  )
}