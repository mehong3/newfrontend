export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  changeMahasiswaId (state, id) {
    state.mahasiswaId = id
  },
  changePelajaranId (state, id) {
    state.pelajaranId = id
  },
  changePelajaranToAdd (state, data) {
    state.pelajaranToAdd = data
  },
  changeJadwalToAdd (state, data) {
    state.jadwalToAdd = data
  },
  changeJadwalId (state, id) {
    state.jadwalId = id
  }
}
