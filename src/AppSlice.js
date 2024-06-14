// Redux
import { createSlice, createSelector } from '@reduxjs/toolkit'
import { selectLeagueToEdit } from './components/LeagueInfoModal/leagueInfoModal/leagueInfoModalSlice'

// Data for testing
import testData from './tests/testData'
// ***** For testing *****
const initialState = {
  leagues: testData.leagues,
}

// Values for initial state
// const initialState = {
//   leagues: [],
// }

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addLeague: (state, { payload }) => {
      const newLeagues = [...state.leagues, payload]
      return { ...state, leagues: newLeagues }
    },
    editLeagueInfo: (state, { payload }) => {
      const leaguesCopy = [...state.leagues]
      const idxToReplace = leaguesCopy.findIndex(
        (league) => league.leagueName === payload.leagueToEdit
      )
      leaguesCopy[idxToReplace] = payload.newLeagueData
      return { ...state, leagues: leaguesCopy }
    },
    deleteLeague: (state, { payload }) => {
      let leaguesCopy = [...state.leagues].filter(
        (league) => league.leagueName !== payload
      )
      return { ...state, leagues: leaguesCopy }
    },
  },
})

// State selectors
const selectAllLeagues = (state) => state.app.leagues
// Memoized Selectors
const selectAllLeagueNames = createSelector(
  [selectLeagueToEdit, selectAllLeagues],
  (leagueToEdit, allLeagues) => {
    return allLeagues
      .map((league) => league.leagueName)
      .filter((leagueName) => leagueName !== leagueToEdit)
  }
)
const selectLeagueData = createSelector(
  [selectLeagueToEdit, selectAllLeagues],
  (leagueToEdit, allLeagues) => {
    let selectedLeague = null
    for (let league of allLeagues) {
      if (league.leagueName === leagueToEdit) {
        selectedLeague = { ...league }
        break
      }
    }
    return selectedLeague
  }
)

// Exports
export { selectAllLeagues, selectAllLeagueNames, selectLeagueData }
export const { addLeague, editLeagueInfo, deleteLeague } = appSlice.actions
export default appSlice.reducer
