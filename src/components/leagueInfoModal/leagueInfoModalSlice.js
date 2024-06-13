// Redux
import { createSlice } from '@reduxjs/toolkit'

// Values for initial state
const initialState = {
  leagueName: '',
  teamName: '',
  draftDate: '',
  platform: '',
  teamCount: '',
  pickPosition: '',
  buyIn: '',
  initialRank: '',
  currentRank: '',
  playoffTeams: '',
  payout1: '',
  payout2: '',
  payout3: '',
}

// Reducer and actions for this state slice
export const leagueInfoModalSlice = createSlice({
  name: 'leagueInfoModal',
  initialState,
  reducers: {
    loadLeagueData: (_, action) => {
      return action.payload
    },
    changeInputValues: (state, action) => {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    },
    resetFormValues: () => {
      return { ...initialState }
    },
  },
})

// State selector functions
const selectInputValues = (state) => state.leagueInfoModal

// Exports
export { selectInputValues }
export const { loadLeagueData, changeInputValues, resetFormValues } =
  leagueInfoModalSlice.actions
export default leagueInfoModalSlice.reducer
