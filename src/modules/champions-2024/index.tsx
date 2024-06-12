import { useEffect } from "react";
import { GroupContainer } from "./components/GroupContainer";
import { KnockOutContainer } from "./components/KnockOutContainer";
import { useChampionsTeams } from "./hooks/useChampionsTeams";
import { GetChampionsTeams } from "./services/champions-2024-service";
import { useTeamsStore } from "./store/TeamsStore";

const CHAMPIONS_GROUP_LIMIT = {
  FIRST: 8,
  SECOND: 24,
  THIRD: 35, 
}
export function Champions2024() {
  //Not using zustand
  // const { teams } = useChampionsTeams();

  //Using zustand => To send data to KnockOutContainer
  const teamsInitial = useTeamsStore((state) => state.teamsInitial);
  const fechTeams = useTeamsStore((state) => state.fechTeams);
  const fechTeamsQualified = useTeamsStore((state) => state.fechTeamsQualified);
  useEffect(() => {
    async function GetTeams() {
      const currrentTeams = await GetChampionsTeams(); 
      fechTeams(currrentTeams);
      fechTeamsQualified(currrentTeams);
    }
    GetTeams();
  },[]);
  //This part is for both (using or not zustand)
  const firstGroup = teamsInitial.slice(0, CHAMPIONS_GROUP_LIMIT.FIRST);
  const secondGroup = teamsInitial.slice(CHAMPIONS_GROUP_LIMIT.FIRST, CHAMPIONS_GROUP_LIMIT.SECOND);
  const thirdGroup = teamsInitial.slice(CHAMPIONS_GROUP_LIMIT.SECOND, CHAMPIONS_GROUP_LIMIT.THIRD);
  return (
    <>
      <main className='flex flex-col items-center justify-center text-white parallax-background font-champions'>
        <section id="groups-phase">
          <h1 className="text-6xl">Champions 2024</h1>
          <p>Teams: {teamsInitial.length}</p>
          {/* <DragDropComponentExample/> */}
          {/* <SortableComponentExample/> */}
          <section className="flex flex-row gap-5">
            <GroupContainer title = "First Group" color_container = "bg-violet-600" teams ={firstGroup} start_index={0}/>

            <GroupContainer title = "Second Group" color_container = "bg-blue-800" teams = {secondGroup} start_index={CHAMPIONS_GROUP_LIMIT.FIRST}/>

            <GroupContainer title = "Third Group" color_container = "bg-pink-900" teams = {thirdGroup} start_index={CHAMPIONS_GROUP_LIMIT.SECOND}/>
          </section>
        </section>

        <button className='p-3 mt-5 bg-pink-700'>Generate Knock Out</button>

        <KnockOutContainer/>
        
      </main>
    </>
  )
}