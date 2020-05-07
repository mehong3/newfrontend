export default {
  changeMahasiswaId (context, id) {
    context.commit('changeMahasiswaId', id)
  },
  changePelajaranId (context, id) {
    context.commit('changePelajaranId', id)
  },
  changePelajaranToAdd (context, data) {
    context.commit('changePelajaranToAdd', data)
  },
  resetPelajaranToAdd (context) {
    context.commit('changePelajaranToAdd', {})
  },
  changeJadwalToAdd (context, data) {
    context.commit('changeJadwalToAdd', data)
  },
  resetJadwalToAdd (context) {
    context.commit('changeJadwalToAdd', {})
  },
  changeJadwalId (context, id) {
    context.commit('changeJadwalId', id)
  }
}
