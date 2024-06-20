// Redux
import { createSlice } from '@reduxjs/toolkit'

// Values for initial state
const initialState = {
  showModal: null,
  modalType: 'edit',
  leagueToEdit: null,
  inputValues: {
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
  },
}

// Reducer and actions for this state slice
export const leagueInfoModalSlice = createSlice({
  name: 'leagueInfoModal',
  initialState,
  reducers: {
    changeModalType: (state, { payload }) => {
      return { ...state, modalType: payload }
    },
    openModal: (state) => {
      return { ...state, showModal: true }
    },
    closeModal: (state) => {
      return { ...state, showModal: false }
    },
    loadLeagueData: (state, action) => {
      return { ...state, inputValues: action.payload }
    },
    setLeagueToEdit: (state, { payload }) => {
      return { ...state, leagueToEdit: payload }
    },
    changeInputValues: (state, action) => {
      const { name, value } = action.payload
      return { ...state, inputValues: { ...state.inputValues, [name]: value } }
    },
    resetFormValues: () => {
      return { ...initialState }
    },
  },
})

// State selector functions
const selectModalType = (state) => state.leagueInfoModal.modalType
const selectShowModal = (state) => state.leagueInfoModal.showModal
const selectLeagueToEdit = (state) => state.leagueInfoModal.leagueToEdit
const selectInputValues = (state) => state.leagueInfoModal.inputValues

// Exports
export {
  selectModalType,
  selectShowModal,
  selectLeagueToEdit,
  selectInputValues,
}
export const {
  changeModalType,
  openModal,
  closeModal,
  loadLeagueData,
  setLeagueToEdit,
  changeInputValues,
  resetFormValues,
} = leagueInfoModalSlice.actions
export default leagueInfoModalSlice.reducer
