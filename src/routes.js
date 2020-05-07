import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

import Mahasiswa from './components/views/mahasiswa.vue'
import Jadwal from './components/views/jadwal.vue'
import Pelajaran from './components/views/Pelajaran.vue'

import MahasiswaOne from './components/views/mahasiswaone.vue'
import MahasiswaFinish from './components/views/mahasiswafinish.vue'

import PelajaranOne from './components/views/pelajaranone.vue'
import PelajaranTwo from './components/views/pelajarantwo.vue'
import PelajaranFinish from './components/views/pelajaranfinish.vue'

import JadwalOne from './components/views/jadwalone.vue'
import JadwalTwo from './components/views/jadwaltwo.vue'
import JadwalThree from './components/views/jadwalthree.vue'
import JadwalFinish from './components/views/jadwalfinish.vue'

import DataSiswa from './components/views/datasiswa.vue'
import DataPelajaran from './components/views/datapelajaran.vue'
import DataJadwal from './components/views/datajadwal.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }, {
        path: 'mahasiswaone',
        component: MahasiswaOne,
        name: 'Mahasiswa One',
        meta: {description: 'Mahasiswa One'}
      }, {
        path: 'mahasiswafinish',
        component: MahasiswaFinish,
        name: 'Mahasiswa Finish',
        meta: {description: 'Mahasiswa Finish'}
      }, {
        path: 'pelajaranone',
        component: PelajaranOne,
        name: 'Pelajaran One',
        meta: {description: 'Pelajaran One'}
      }, {
        path: 'pelajarantwo',
        component: PelajaranTwo,
        name: 'Pelajaran Two',
        meta: {description: 'Pelajaran Two'}
      }, {
        path: 'pelajaranfinish',
        component: PelajaranFinish,
        name: 'Pelajaran Finish',
        meta: {description: 'Pelajaran Finish'}
      }, {
        path: 'jadwalone',
        component: JadwalOne,
        name: 'Jadwal One',
        meta: {description: 'Jadwal One'}
      }, {
        path: 'jadwaltwo',
        component: JadwalTwo,
        name: 'Jadwal Two',
        meta: {description: 'Jadwal Two'}
      }, {
        path: 'jadwalthree',
        component: JadwalThree,
        name: 'Jadwal Three',
        meta: {description: 'Jadwal Three'}
      }, {
        path: 'jadwalfinish',
        component: JadwalFinish,
        name: 'Jadwal Finish',
        meta: {description: 'Jadwal Finish'}
      }, {
        path: 'datasiswa',
        component: DataSiswa,
        name: 'Data Siswa',
        meta: {description: 'Data Siswa'}
      }, {
        path: 'datapelajaran',
        component: DataPelajaran,
        name: 'Data Pelajaran',
        meta: {description: 'Data Pelajaran'}
      }, {
        path: 'datajadwal',
        component: DataJadwal,
        name: 'Data Jadwal',
        meta: {description: 'Data Jadwal'}
      }, {
        path: 'mahasiswa',
        component: Mahasiswa,
        name: 'Mahasiswa',
        meta: {description: 'Daftar Mahasiswa'}
      }, {
        path: 'jadwal',
        component: Jadwal,
        name: 'Jadwal',
        meta: {description: 'Daftar Jadwal'}
      }, {
        path: 'pelajaran',
        component: Pelajaran,
        name: 'Pelajaran',
        meta: {description: 'Daftar Pelajaran'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
