import { useTeamsStore } from "../store/TeamsStore";
import { KnockOutTeamContainer } from "./KnockOutTeamContainer";

export function KnockOutFinalContainer(){
  const finalRound = useTeamsStore((state) => state.finalRound);
  const selectTeamWon = () => {};
  return(
    <>
    <section className= "p-2 border-2 rounded-lg bg-emerald-400 border-x-gray-300">
      <h1 className = "self-start text-3xl">Final</h1>
      <div className = "flex flex-row gap-3 my-3">
        {
          finalRound.map((item, index) => (
            <KnockOutTeamContainer key={index} bracket_next_round={item.bracket_next_round} bracket_next_round_as_local={item.bracket_next_round_as_local} localRivalIndex={item.localTeamId} awayRivalIndex={item.awayTeamId} selectTeamWon={selectTeamWon} />
          ))
        }
      </div>
    </section>
    </>
  )
}