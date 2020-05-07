<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tambah Data Murid</h3>
              
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form_box">
                <b-form-group
                  id="input-group-1"
                  label="Nama:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.nama"
                    required
                    placeholder="Masukan Nama"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Jenis Kelamin:" label-for="input-2">
                  <!-- <ul>
                  <li> <input type="checkbox" v-model="form.female" value=false :state="Boolean" required> <label> Laki-laki </label> </li>
                  <li> <input type="checkbox" v-model="form.female" value=true :state="Boolean"> <label> Perempuan </label> </li>
                  </ul> -->
                  <b-form-checkbox v-model="form.female" name="check-button" switch>
                   <b>{{form.female?'Perempuan':'Laki-laki'}}</b>
                  </b-form-checkbox>
                </b-form-group>
                
                <b-form-group id="input-group-3" label="RFID:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.rfid"
                    required
                    placeholder="Masukan RFID"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="NIM:" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="form.nim"
                    required
                    placeholder="Masukan NIM"
                  ></b-form-input>
                </b-form-group>
<!-- 
                 <b-form-group id="input-group-3" label="NIM:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.nim"
                    required
                    placeholder="Masukan NIM"
                  ></b-form-input>
                </b-form-group>

                 <b-form-group id="input-group-3" label="NIM:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.nim"
                    required
                    placeholder="Masukan NIM"
                  ></b-form-input>
                </b-form-group>
 -->
                <div >
                  <b-form-group id="input-group-5" label="Foto:" label-for="input-5">
                  <!-- Styled -->
                  <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Masukan Foto"
                    drop-placeholder="Masukan Foto Murid"
                  ></b-form-file>
                  <div class="mt-3">file: {{ file }}</div>
                  </b-form-group>
                </div>

                <div class="button">
                  <b-button type="reset" variant="danger">Reset</b-button> 
                  <b-button type="submit" variant="success" style="margin-left: 0.5vw">Submit</b-button>
                </div> 
              </b-form>
              <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
              </b-card> -->
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
  name: 'AddStudent',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      form: {
        nama: '',
        female: false,
        rfid: '',
        nim: '',
        file: null,
        pelajarans: [],
        jadwals: []
      },
      file: null,
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      this.form.file = this.file
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      var res = api.addMahasiswa(this.form)
      console.log(res)
      this.$router.push({ name: 'Mahasiswa Finish' })
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.nama = ''
      this.form.female = null
      this.form.rfid = ''
      this.form.nim = ''
      this.file = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
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

.row .image img {
  border-radius: 50%
}

.form_box{
  padding: 0;
  margin-top: 2vh ;
}
</style>
