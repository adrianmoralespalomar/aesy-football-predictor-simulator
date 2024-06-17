import { create } from 'zustand'
import { Team } from '../models/teams'
import { Knockout } from '../models/knockout'

interface State {
  teamsInitial: Team[],
  finalTeamsQualified: Team[],
  thirtyTwoRound: Knockout[],
  sixteenRound: Knockout[],
  quartersRound: Knockout[],
  semisRound: Knockout[],
  finalRound: Knockout[],

  fechTeams: (teams: Team[]) => void,
  fechTeamsQualified: (finalTeamsQualified: Team[]) => void,
  fechthirtyTwoRound: (thirtyTwoRound: Knockout[]) => void,
  fechsixteenRound: (sixteenRound: Knockout[]) => void,
  fechquartersRound: (quartersRound: Knockout[]) => void,
  fechsemisRound: (semisRound: Knockout[]) => void,
  fechfinalRound: (finalRound: Knockout[]) => void,
}

export const useTeamsStore = create<State>((set) => ({
  teamsInitial: [],
  finalTeamsQualified: [],
  thirtyTwoRound: [],
  sixteenRound: [],
  quartersRound: [],
  semisRound: [],
  finalRound: [],
  fechTeams: (teamsInitial: Team[]) => set({ teamsInitial }),
  fechTeamsQualified: (finalTeamsQualified: Team[]) => set({ finalTeamsQualified }),
  fechthirtyTwoRound: (thirtyTwoRound: Knockout[]) => set({ thirtyTwoRound }),
  fechsixteenRound: (sixteenRound: Knockout[]) => set({ sixteenRound }),
  fechquartersRound: (quartersRound: Knockout[]) => set({ quartersRound }),
  fechsemisRound: (semisRound: Knockout[]) => set({ semisRound }),
  fechfinalRound: (finalRound: Knockout[]) => set({ finalRound }),
}))