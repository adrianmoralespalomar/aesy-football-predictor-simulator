import { create } from 'zustand'
import { Team } from '../models/teams'

interface State {
  teamsInitial: Team[],
  finalTeamsQualified: Team[],
  fechTeams: (teams: Team[]) => void,
  fechTeamsQualified: (finalTeamsQualified: Team[]) => void,
}

export const useTeamsStore = create<State>((set) => ({
  teamsInitial: [],
  finalTeamsQualified: [],
  fechTeams: (teamsInitial: Team[]) => set({ teamsInitial }),
  fechTeamsQualified: (finalTeamsQualified: Team[]) => set({ finalTeamsQualified }),
}))