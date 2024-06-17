import { useEffect } from "react";
import { GroupContainer } from "./components/GroupContainer";
import { GetChampionsTeams, GetFinalTeams, GetQuartersTeams, GetRound16Teams, GetRound32Teams, GetSemisTeams } from "./services/champions-2024-service";
import { useTeamsStore } from "./store/TeamsStore";
import { KnockOutFinalContainer } from "./components/KnockOut-FinalContainer";
import { KnockOutQuartersContainer } from "./components/KnockOut-QuartersContainer";
import { KnockOutSemisContainer } from "./components/KnockOut-SemisContainer";
import { KnockOutSixteenContainer } from "./components/KnockOut-SixteenContainer";
import { KnockOutThirtyTwoContainer } from "./components/KnockOut-ThirtyTwoContainer";


export function Champions2024() {
  //Not using zustand
  // const { teams } = useChampionsTeams();

  //Using zustand => To send data to KnockOutContainer
  const teamsInitial = useTeamsStore((state) => state.teamsInitial);
  const fechTeams = useTeamsStore((state) => state.fechTeams);
  useEffect(() => {
    async function GetTeams() {
      const currrentTeams = await GetChampionsTeams(); 
      fechTeams(currrentTeams);
    }
    GetTeams();
  },[]);

  const finalTeamsQualified = useTeamsStore((state) => state.finalTeamsQualified);
  const fechTeamsQualified = useTeamsStore((state) => state.fechTeamsQualified);
  const fechthirtyTwoRound = useTeamsStore((state) => state.fechthirtyTwoRound);
  const fechsixteenRound = useTeamsStore((state) => state.fechsixteenRound);
  const fechquartersRound = useTeamsStore((state) => state.fechquartersRound);
  const fechsemisRound = useTeamsStore((state) => state.fechsemisRound);
  const fechfinalRound = useTeamsStore((state) => state.fechfinalRound);


  function GetTeamsQualified() {
    const qualifiedTeams = structuredClone(teamsInitial).slice(0,24);
    fechTeamsQualified(qualifiedTeams);
    fechthirtyTwoRound(GetRound32Teams(qualifiedTeams));
    fechsixteenRound(GetRound16Teams(qualifiedTeams.slice(0,8)));
    fechquartersRound(GetQuartersTeams());
    fechsemisRound(GetSemisTeams());
    fechfinalRound(GetFinalTeams());
  }
  
  return (
    <>
      <main className = 'container flex flex-col items-center justify-center mx-auto text-white font-champions'>
        <section id="groups-phase" className="flex flex-col items-center">
          <h1 className="text-6xl">Champions 2024</h1>
          <h1 className="text-4xl">League</h1>
          {/* <DragDropComponentExample/> */}
          {/* <SortableComponentExample/> */}
          <section className="flex flex-row gap-5">
            <GroupContainer teams ={teamsInitial} start_index={0}/>
          </section>
        </section>

        <button className='p-3 my-5 bg-pink-700' onClick={GetTeamsQualified}>Generate Knock Out</button>

        {finalTeamsQualified?.length>0 && 
          <>
            <h1 className = "text-4xl">KnockOut</h1>
            <section className="flex flex-col items-center gap-3">
            {finalTeamsQualified?.length>0 ? <KnockOutThirtyTwoContainer/>: undefined}
            
            <KnockOutSixteenContainer/>

            <KnockOutQuartersContainer/>

            <KnockOutSemisContainer/>

            <KnockOutFinalContainer/>
          
            </section>
          </>
        
        }

  
      </main>
    </>
  )
}