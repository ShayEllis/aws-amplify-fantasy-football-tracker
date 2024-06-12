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
    removeLeague: (action, state) => {},
    addLeague: (action, state) => {},
  },
})

// State selector functions
const selectLeagues = (state) => state.app.leagues

// Exports
export { selectLeagues }
export const { reducer1 } = appSlice.actions
export default appSlice.reducer
