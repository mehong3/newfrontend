<template>
   <section class="content">
    <div class="row center-block">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tabel Data Pelajaran</h3>
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
                  <p>Search Bar baru:  <input type="text" v-model="search" placeholder="search pelajaran"></p>
                    <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr role="row">
                          <th aria-label="Nama: activate to sort column ascending" style="width: 200px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Nama Pelajaran</th>
                          <th aria-label="Guru: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Guru</th>
                          <th aria-label="Mahasiswa: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Jenis Kelamin</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="even" role="row" v-for='pelajaran in filteredPelajarans' :key='pelajaran.nama' v-on:click='changePelajaranId(pelajaran._id)'>
                          <td>{{pelajaran.nama}}</td>
                          <td>{{pelajaran.guru}}</td>
                          <td>{{pelajaran.female ? 'Perempuan' : 'Laki-laki'}}</td>
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
  name: 'Pelajaran',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      pelajarans: [],
      search: ''
    }
  },
  computed: {
    filteredPelajarans: function () {
      return this.pelajarans.filter((pelajaran) => {
        return pelajaran.nama.match(this.search)
      })
    }
  },
  created() {
    api.listPelajaran().then((res) => {
      /* console.log(res.data.pelajarans) */
      this.pelajarans = res.data.pelajarans
    })
  },
  methods: {
    changePelajaranId (id) {
      this.$store.dispatch('changePelajaranId', id)
      this.$router.push({ name: 'Data Pelajaran' })
      /* console.log(id) */
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
</style>
