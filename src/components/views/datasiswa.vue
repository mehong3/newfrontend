<template>
   <section class="content">
    <div class="row center-block">
        <div class="col-md-12">
          <div class="box">
          <div id="box-grid">
            <div class="info-siswa">
              <img src="/static//img//stock/user2-128x128.jpg" id="img-siswa"/>
              <div class="text-siswa">
                <p>{{mahasiswaId.nama}}</p>
                <p style="font-weight: 400; font-size: 1.2vw;">NIM:{{mahasiswaId.nim}}</p>
              </div>
            </div>
            <div class="info-jdwl-pel">
                <b-tabs card>
                  <!-- Kartu Jadwal -->
                  <b-tab title="Jadwal" active button-id="tab1">
                    <b-card-text id="scroll">
                      <!-- <b-card-group deck="">
                       <b-card @click="changeJadwalId(jadwal._id)"
                        v-for="jadwal in mahasiswaId.jadwals" :key="jadwal.data"
                        :header="jadwal.nama"
                        border-variant="primary"
                        header-text-variant="white"
                        class="mb-2 mt-4"
                        id="cards"
                      >
                        <b-card-text>
                          Tanggal {{jadwal.tanggal}} <br> Pukul {{jadwal.mulai}}-{{jadwal.selesai}} <br>
                        </b-card-text>
                      </b-card> 
                      </b-card-group> -->

                      <!-- Calendar -->
                      <div class="calendar_plan">
                        <div class="cl_plan_date">
                          <!-- <div class="cl_title">Today</div> -->
                          <div class="cl_copy">22nd  April  2018</div>
                        </div>
                      </div>
                      
                      <h1>Upcoming Events</h1>

                      <div class="calendar_plan" v-for="jadwal in mahasiswaId.jadwals" :key="jadwal.data">
                        <div class="cl_plan_item">
                          <!-- <div class="cl_title">Today</div> -->
                          <div class="cl_copy">{{jadwal.mulai}}</div>
                          <div class="cl_title">{{jadwal.pelajaran.nama}}: {{jadwal.nama}}</div>
                          <!-- <div class="cl_title">{{jadwal.nama}}</div> -->
                          <div class="cl_title">{{jadwal.pelajaran.guru}}</div>
                          <!-- <div class="cl_title">{{jadwal.mulai}}-{{jadwal.selesai}}</div> -->
                        </div>
                      </div>

                      <h1>Done Events</h1>

                      <div class="calendar_plan">
                        <div class="cl_plan_done">
                          <!-- <div class="cl_title">Today</div> -->
                          <div class="cl_copy">10:00</div>
                          <div class="cl_title">Biologi: Sistem Pencernaan</div>
                          <!-- <div class="cl_title">{{jadwal.nama}}</div> -->
                          <div class="cl_title">Caroline Bogi</div>
                          <!-- <div class="cl_title">{{jadwal.mulai}}-{{jadwal.selesai}}</div> -->
                        </div>
                      </div>

                      <div class="calendar_plan">
                        <div class="cl_plan_skip">
                          <!-- <div class="cl_title">Today</div> -->
                          <div class="cl_copy">08:00</div>
                          <div class="cl_title">Kimia: Buffer</div>
                          <!-- <div class="cl_title">{{jadwal.nama}}</div> -->
                          <div class="cl_title">Theresa Wiwik</div>
                          <!-- <div class="cl_title">{{jadwal.mulai}}-{{jadwal.selesai}}</div> -->
                        </div>
                      </div>

                    </b-card-text>
                  </b-tab>

                  <!-- Kartu Pelajaran -->
                  <b-tab title="Pelajaran" button-id="tab2">
                    <b-card-text id="scroll">
                      <b-card-group deck>
                      <b-card @click="changePelajaranId(pelajaran._id)"
                        v-for="pelajaran in mahasiswaId.pelajarans" :key="pelajaran.nama"
                        :header="pelajaran.nama"
                        border-variant="primary"
                        header-text-variant="white"
                        class="mb-2 mt-4"
                        id="cards"
                      >
                        <b-card-text>
                          Dibawakan oleh {{pelajaran.guru}}, {{pelajaran.female ? 'Perempuan' : 'Laki-laki'}}
                        </b-card-text>
                      </b-card>
                      </b-card-group>

                      

                    </b-card-text>
                  </b-tab>
                </b-tabs>
            </div>
          </div>  
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import api from '../../api/api'
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Finish',
  // computed: {
  //   mahasiswaId: function () {
  //     return this.$store.state.mahasiswaId
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  created () {
    var mahasiswaId = this.$store.state.mahasiswaId
    console.log(mahasiswaId)
    api.getMahasiswaById(mahasiswaId).then((res) => {
      /* console.log(res.data.mahasiswa) */
      this.mahasiswaId = res.data.mahasiswa
      // console.log(this.mahasiswaId)
    })
  },
  data() {
    return {
      jadwals: [],
      pelajarans: [],
      mahasiswaId: {}
    }
  },
  methods: {
    changePelajaranId (id) {
      this.$store.dispatch('changePelajaranId', id)
      this.$router.push({ name: 'Data Pelajaran' })
      // console.log('===========================')
      // console.log(id)
    },
    changeJadwalId (id) {
      this.$store.dispatch('changeJadwalId', id)
      this.$router.push({ name: 'Data Jadwal' })
      console.log(id)
      console.log('===========')
    }
  }
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}


table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
}

button {
  width: 10%;
}


*{
  box-sizing:border-box;
}

body{
  background-color: #fafafa;
}

.container{
  margin:100px auto;
  width:809px;
}

.light{
  background-color: #fff;
}
.dark{
  margin-left: 65px;
}

.calendar{
  width:370px;
  box-shadow: 0px 0px 35px -16px rgba(0,0,0,0.75);
  /* font-family: 'Roboto', sans-serif; */
  padding: 20px 30px;
  color:#363b41;
  display: inline-block;
}

.calendar_header{
  border-bottom: 2px solid rgba(0, 0, 0, 0.08);
}

.header_copy{
  color:#A39D9E;
  font-size:20px;
}
.calendar_plan{
  margin:5%;
  margin-left: 0;
}
.cl_plan_date{
  width:100%;
  /* height: 120px; */
  background-image: linear-gradient(-222deg,#295fd4 , rgb(20, 59, 131));
  /* box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75); */
  padding:30px;
  color:#fff;
  border-radius: 20px;
}
.cl_plan_item{
  width:100%;
  /* height: 120px; */
  background-image: linear-gradient(-222deg,#838485 , rgb(59, 59, 59));
  /* box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75); */
  padding:30px;
  color:#fff;
  border-radius: 20px;
}
.cl_plan_done{
  width:100%;
  /* height: 120px; */
  background-image: linear-gradient(-222deg,#0dc50d , rgb(6, 122, 11));
  /* box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75); */
  padding:30px;
  color:#fff;
  border-radius: 20px;
}
.cl_plan_skip{
  width:100%;
  /* height: 120px; */
  background-image: linear-gradient(-222deg,#ca0303 , rgb(141, 0, 0));
  /* box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75); */
  padding:30px;
  color:#fff;
  border-radius: 20px;
}
.cl_title{
  font-size:15px;
}
.cl_copy{
  font-size:30px;
  /* margin: 20px 0; */
  display: inline-block;
}

.cl_add{
  display: inline-block;
  width: 40px;
  height:40px;
  border-radius:50%;
  background-color: #fff;
  cursor: pointer;
  margin:0 0 0 65px;
  color:#c2c2c2;
  padding: 11px 13px;
}
.calendar_events{
  color:#A39D9E;
}
.ce_title{
  font-size:14px;
}

.event_item{
  margin: 18px 0;
  padding:5px;
  cursor: pointer;
  &:hover{
    background-image: linear-gradient(-222deg, #FF8494, #ffa9b7);
    box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
    .ei_Dot{
      background-color: #fff;
    }
    .ei_Copy,.ei_Title{
      color:#fff;
    }
  }
}

.ei_Dot,.ei_Title{
  display:inline-block;
}

.ei_Dot{
  border-radius:50%;
  width:10px;
  height: 10px;
  background-color: #A39D9E;
  box-shadow: 0px 0px 52px -18px rgba(0, 0, 0, 0.75);
}
.dot_active{
  background-color: #FF8494;
}

.ei_Title{
  margin-left:10px;
  color:#363b41;
}

.ei_Copy{
  font-size:12px;
  margin-left:27px;
}

.dark{
  background-image: linear-gradient(-222deg, #646464, #454545);
  color:#fff;
  .header_title,.ei_Title,.ce_title{
    color:#fff;
  }
  
}

#box-grid{
  display: grid;
  grid-template-columns: 0.75fr 2.25fr;
  grid-column-gap: 0.1vw;
  background: #f4f4f4;
}

.info-siswa {
  grid-area: 1 / 1 / 3 / 2;
  height: 70vh;
  display: grid;
  background: white;
}

.info-jdwl-pel {
  grid-area: 1 / 2 / 3 / 4;
  background: white;
  height: 70vh;
  overflow: hidden;
}

.text-siswa {
  text-align: center;
  font-weight: 600;
  font-size: 2vw;
}

#img-siswa {
  border-radius: 50%;
  height: 20vh; 
  width: 10vw; 
  margin-bottom: 3vh;
  justify-self: center;
  align-self: end;
}

#tab1 {
  font-size: 1vw;
  font-weight: 600;
  background-color: white;
}
#tab1:hover {
  background-color: #e7e7ee;
}

#tab2 {
  font-size: 1vw;
  font-weight: 600;
  background-color: white;
}
#tab2:hover {
  background-color: #e7e7ee;
}

.card-header {
  font-weight: 400;
  font-size: 1vw;
}
.card-title {
  font-weight: 600;
}
.card-text {
  font-size: 0.75vw;
}

#scroll {
  overflow-x: hidden; 
  overflow-y: scroll; 
  height: 60vh;
}

#scroll::-webkit-scrollbar {
    width: 1rem;
}
 
#scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
 
#scroll::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

#gaguna {
  width: 4vw;
}

#cards {
  max-width: 10vw; 
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); 
  min-width: 10vw; 
  background-color: white;
  transition: 0.5s ease;
}

#cards:hover {
  background-color: #f5f5f8;
  box-shadow: 0 2px 4px rgba(0,0,0,0.17), 0 2px 5px rgba(0,0,0,0.3); 
}

#cards .card-header {
  background-color: #007bff;
  transition: 0.5s ease
}

#cards:hover .card-header {
  background-color: #1673d6;
}
</style>
