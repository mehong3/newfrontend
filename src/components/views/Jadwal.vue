<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tabel Schedule</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                    <p>Search Bar baru:  <input type="text" v-model="search" placeholder="search jadwal"></p>
                      <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                        <thead>
                          <tr role="row">
                            <th aria-label="ID: activate to sort column ascending" style="width: 200px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">ID</th>
                            <th aria-label="Tanggal: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Tanggal</th>
                            <th aria-label="Nama: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Nama</th>
                            <th aria-label="Nama Pelajaran: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Nama Pelajaran</th>
                            <th aria-label="Tanggal: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Tanggal</th>
                            <th aria-label="Mulai: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Waktu Mulai</th>
                            <th aria-label="Selesai: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Waktu Selesai</th>
                            <th aria-label="Tempat: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Tempat</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="even" role="row" v-for='jadwal in filteredJadwals' :key='jadwal.nama' v-on:click='changeJadwalId(jadwal._id)'>
                            <td class="gambar"><img style="border-radius: 50%; height: 50px;" v-bind:src="image(jadwal.pelajaran.female)" alt="foto" /></td>
                            <td class="sorting_1">{{jadwal.tanggal}}</td>
                            <td>{{jadwal.nama}}</td>
                            <td>{{jadwal.pelajaran.nama}}</td>
                            <td>{{jadwal.tanggal}}</td>
                            <td>{{jadwal.mulai}}</td>
                            <td>{{jadwal.selesai}}</td>
                            <td>{{jadwal.tempat}}</td>
                          </tr>
                        </tbody>
                      </table>                 
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import api from '../../api/api'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'Jadwal',
  computed: {
    JadwalId: function () {
      return this.$store.state.jadwalId
    },
    filteredJadwals: function () {
      return this.jadwals.filter((jadwal) => {
        return jadwal.nama.match(this.search)
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      jadwals: [],
      pelajarans: [],
      search: ''
    }
  },
  created() {
    api.listJadwal().then((res) => {
      /* console.log(res.data.jadwal) */
      this.jadwals = res.data.jadwals
    })
  },
  methods: {
    changeJadwalId (id) {
      this.$store.dispatch('changeJadwalId', id)
      this.$router.push({ name: 'Data Jadwal' })
      console.log(id)
    },
    image (female) {
      if (female) {
        return '../../../static/img/stock/user2-128x128.jpg'
      } else {
        return '../../../static/img/stock/user1-128x128.jpg'
      }
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

.row .image img {
  border-radius: 50%
}
</style>
