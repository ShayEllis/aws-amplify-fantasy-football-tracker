// Redux
import { createSlice } from '@reduxjs/toolkit'
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

// State selector functions
const selectAllLeagues = (state) => state.app.leagues
const selectLeague = (state, leagueName) => {
  let selectedLeague = null
  for (let league of state.app.leagues) {
    if (league.leagueName === leagueName) {
      selectedLeague = { ...league }
      break
    }
  }
  return selectedLeague
}

// Exports
export { selectAllLeagues, selectLeague }
export const { addLeague } = appSlice.actions
export default appSlice.reducer
