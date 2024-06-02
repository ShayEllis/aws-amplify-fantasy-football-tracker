import { configureStore } from '@reduxjs/toolkit'
import leagueInfoModalReducer from '../leagueInfoModal/leagueInfoModalSlice'

export default configureStore({
  reducer: {
    leagueInfoModal: leagueInfoModalReducer,
  },
})
