// Redux
import { configureStore } from '@reduxjs/toolkit'
// State Reducers
import leagueInfoModalReducer from '../components/leagues/leagueInfoModal/leagueInfoModalSlice'
import appReducer from '../AppSlice'

export default configureStore({
  reducer: {
    app: appReducer,
    leagueInfoModal: leagueInfoModalReducer,
  },
})
