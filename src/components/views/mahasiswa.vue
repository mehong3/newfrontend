<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tabel Data Murid</h3>
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
                  <p>Search Bar baru:  <input type="text" v-model="search" placeholder="search mahasiswa"></p>
                    <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                            <th aria-label="Photo: activate to sort column ascending" style="width: 10px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting"></th>
                            <th aria-label="Nama: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Nama</th>
                            <th aria-label="RFID: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">RFID</th>
                            <th aria-label="NIM: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">NIM</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even" role="row" v-for='mahasiswa in filteredMahasiswa' :key='mahasiswa.nama' v-on:click='changeMahasiswaId(mahasiswa._id)'>
                            <td class="gambar"><img style="border-radius: 50%; height: 50px;" src="\static\img\stock\user1-128x128.jpg" alt="foto" /></td>
                            <td class="sorting_1">{{mahasiswa.nama}}</td>
                            <td>{{mahasiswa.rfid}}</td>
                            <td>{{mahasiswa.nim}}</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <!-- <P>{{ mahasiswaId }}</P>
                <button v-on:click="changeMahasiswaId">ganti</button> -->
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
  name: 'Tables',
  computed: {
    mahasiswaId: function () {
      return this.$store.state.mahasiswaId
    },
    filteredMahasiswa: function () {
      return this.mahasiswas.filter((mahasiswa) => {
        return mahasiswa.nama.match(this.search)
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
      mahasiswas: [],
      search: ''
    }
  },
  created() {
    api.listMahasiswa().then((res) => {
      /* console.log(res.data.mahasiswas) */
      this.mahasiswas = res.data.mahasiswas
      /* console.log(this.mahasiswas) */
    })
  },
  methods: {
    changeMahasiswaId (id) {
      this.$store.dispatch('changeMahasiswaId', id)
      this.$router.push({ name: 'Data Siswa' })
      console.log(id)
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
