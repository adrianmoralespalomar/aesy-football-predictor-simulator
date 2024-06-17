import { useTeamsStore } from "../store/TeamsStore";
import { KnockOutTeamContainer } from "./KnockOutTeamContainer";

export function KnockOutThirtyTwoContainer(){
  const thirtyTwoRound = useTeamsStore((state) => state.thirtyTwoRound);
  const sixteenRound = useTeamsStore((state) => state.sixteenRound);
  const fechsixteenRound = useTeamsStore((state) => state.fechsixteenRound);
  const selectTeamWon = (bracket_next_round:number, bracket_next_round_as_local:boolean,teamWonId:number) => {
    const updatedSixteenRound = [...sixteenRound];
    updatedSixteenRound[bracket_next_round][bracket_next_round_as_local ? 'localTeamId' : 'awayTeamId'] = teamWonId;
    fechsixteenRound(updatedSixteenRound);
  };
  
  return(
    <>
    <section className="p-2 border-2 rounded-lg border-x-gray-300 bg-rose-800">
      <h1 className = "self-start text-3xl">Round of 32</h1>
      <div className = "flex flex-row gap-3 my-3">
        {
          thirtyTwoRound.map((item, index) => (
            <KnockOutTeamContainer key={index} bracket_next_round={item.bracket_next_round} bracket_next_round_as_local={item.bracket_next_round_as_local} localRivalIndex={item.localTeamId} awayRivalIndex={item.awayTeamId} selectTeamWon={selectTeamWon} />
          ))
        }
      </div>
    </section>
    </>
  )
}