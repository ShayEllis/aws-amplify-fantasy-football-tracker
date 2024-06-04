import { configureStore } from '@reduxjs/toolkit'
import leagueInfoModalReducer from '../components/leagueInfoModal/leagueInfoModalSlice'

export default configureStore({
  reducer: {
    leagueInfoModal: leagueInfoModalReducer,
  },
})
