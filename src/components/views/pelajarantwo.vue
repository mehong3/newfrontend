<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Mahasiswa ke Pelajaran</h3>
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
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered dataTable">
                    <thead>
                      <tr role="row" >
                        <th aria-label="Checkbox: activate to sort column ascending" style="width: 10px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting"></th>
                        <th aria-label="Photo: activate to sort column ascending" style="width: 10px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting"></th>
                        <th aria-label="Nama: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Nama</th>
                        <th aria-label="NIM: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">NIM</th>
                        <th aria-label="Gender: activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Gender</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row" v-for='mahasiswa in mahasiswas' :key='mahasiswa.nama'>
                        <b-form-checkbox v-model="mahasiswaIdToAdd" :value="mahasiswa._id" style="padding-left: 50%; padding-top: 50%; transform: translate(20%,-50%);" > </b-form-checkbox>
                        <td @click="redirect" class="gambar" id="femaleimage"><img style="border-radius: 50%; height: 50px;" :src="mahasiswa.female ? '\\static\\img\\stock\\user2-128x128.jpg' : '\\static\\img\\stock\\user1-128x128.jpg'" alt="foto" id="genderCell"/></td>
                        <td @click="redirect" class="sorting_1">{{mahasiswa.nama}}</td>
                        <td @click="redirect">{{mahasiswa.nim}}</td>
                        <td @click="redirect" id="genderType">{{mahasiswa.female?'Perempuan':'Laki-laki'}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>              
            </div>
            <!-- /.box-body -->
          </div>
        </div>

        <div class="button" style="clear: both;">
          <b-alert v-model="showalert" dismissible variant="warning"> Belum Diisi </b-alert>
          <b-button variant="primary" to="/pelajaranone" style="float: left; width: 10%;">Back</b-button>
          <b-button variant="success" @click="submit()" style="float: right; margin-left: 0.5vw;">Submit</b-button>
          <b-button variant="danger" @click="reset" style="float: right;">Reset</b-button>
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
  name: 'MahasiswaToPelajaran',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      pelajaran: [],
      mahasiswas: [],
      mahasiswaIdToAdd: [],
      showalert: false
    }
  },
  methods: {
    getImgUrl(gen) {
      return gen ? '\\static\\img\\stock\\user2-128x128.jpg' : '\\static\\img\\stock\\user1-128x128.jpg'
    },
    checkInside() {
      if (this.mahasiswaIdToAdd.length === 0) {
        this.showalert = true
        return true
      } else {
        return false
      }
    },
    reset() {
      this.mahasiswaIdToAdd = []
      this.showalert = false
    },
    redirect() {
      window.location.href = '/datasiswa'
    },
    getPelajaran() {
      this.pelajaran = this.$store.state.pelajaranToAdd
    },
    getMahasiswas() {
      api.listMahasiswa().then((res) => {
        /* console.log(res.data.mahasiswas) */
        this.mahasiswas = res.data.mahasiswas
        /* console.log(this.mahasiswas) */
      })
    },
    async submit () {
      if (this.checkInside() === false) {
        this.pelajaran.mahasiswas = this.mahasiswaIdToAdd

        this.$store.dispatch('resetPelajaranToAdd')

        await api.addPelajaran(this.pelajaran).then((data) => {
          console.log(data)
          this.$store.dispatch('changePelajaranId', data.data.addPelajaran._id)
          this.$router.push({ name: 'Data Pelajaran' })
        })
      }
    }
  },
  created () {
    this.getMahasiswas()
    this.getPelajaran()
    // alert(this.pelajaran.nama)
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

button.close {
  transform: translateX(-1vw);
  width: 2vw;
  align-items:center ;
}

tbody tr:hover{
  background-color: rgba(0, 0, 0, 0.082);
}

</style>
