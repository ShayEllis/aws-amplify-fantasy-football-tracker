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
    // removeLeague: (action, state) => {},
    // addLeague: (action, state) => {},
  },
})

// State selector functions
const selectAllLeagues = (state) => state.app.leagues
const selectLeague = (state, leagueName) => {
  for (let league of state.app.leagues) {
    if (league.leagueName === leagueName) {
      return league
    }
  }
}

// Exports
export { selectAllLeagues, selectLeague }
export const { reducer1 } = appSlice.actions
export default appSlice.reducer
