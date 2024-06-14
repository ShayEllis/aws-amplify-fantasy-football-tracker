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
    // deleteLeague: (state, action) => {},
    addLeague: (state, { payload }) => {
      const newLeagues = [...state.leagues, payload]
      return { ...state, leagues: newLeagues }
    },
  },
})

// State selectors
const selectAllLeagues = (state) => state.app.leagues
// Memoized Selectors
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
export { selectAllLeagues, selectLeagueData }
export const { addLeague } = appSlice.actions
export default appSlice.reducer
