<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Tambah Pelajaran</h3>
              
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form_box">
                <b-form-group
                  id="input-group-1"
                  label="Nama Pelajaran:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.nama"
                    required
                    placeholder="Masukan Nama Pelajaran"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Guru:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.guru"
                    required
                    placeholder="Masukan Nama Guru"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Jenis Kelamin:" label-for="input-3">
                  <b-form-checkbox v-model="form.female" name="check-button" switch>
                   <b>{{form.female?'Perempuan':'Laki-laki'}}</b>
                  </b-form-checkbox>
                </b-form-group>

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
// import api from '../../api/api'
// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')

export default {
  name: 'AddPelajaran',
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
        guru: ''
      },
      show: true,
      value: ''
    }
  },
  methods: {
    onSubmit(evt) {
      // this.form.tanggal = this.value
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$store.dispatch('changePelajaranToAdd', this.form)
      this.$router.push({ name: 'Pelajaran Two' })
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.nama = ''
      this.form.female = false
      this.form.guru = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  created () {
    this.form = this.$store.state.pelajaranToAdd
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
