<template>
   <section class="content">
    <div class="row center-block">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Info Pelajaran</h3>
              
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form_box">

              <b-form-group id="input-group-1" label="Nama:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.nama"
                    required
                    placeholder="Masukan Nama"
                  ></b-form-input>
                </b-form-group>

              <b-form-group id="input-group-3" label="Tempat:" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.tempat"
                    :options="tempat"
                    required
                  ></b-form-select>
               </b-form-group>

                <div>
                  <label for="example-datepicker">Pilih Tanggal</label>
                  <b-form-datepicker id="example-datepicker" v-model="form.tanggal" class="mb-2"></b-form-datepicker>
                  <p>Tanggal: {{ form.tanggal }}</p>
                </div>

                <div>
                  <label>Pilih Jam Mulai</label>
                  <b-form-timepicker v-model="form.mulai" locale="en"></b-form-timepicker>
                  <p>Jam mulai: {{ form.mulai }}</p>
                </div>

                <div>
                  <label>Pilih Jam Selesai</label>
                  <b-form-timepicker v-model="form.selesai" locale="en" ></b-form-timepicker>
                  <p>Jam selesai: {{ form.selesai }}</p>
                </div>                 

                <div class="button" style="clear: both;">
                  <b-button variant="primary" to="/jadwaltwo" style="float: left; width: 10%;">Back</b-button>
                  <b-button variant="success" type="submit" style="float: right; margin-left: 0.5vw;">Submit</b-button>
                  <b-button variant="danger" type="reset" style="float: right;">Reset</b-button>
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
  name: 'UpdateSchedule',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      form: {},
      tempat: [{ text: 'Pilih Tempat', value: null }, 'Lab', 'Ruang 1', 'Ruang 2', 'Ruang 3'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      console.log(this.form)
      var res = api.addJadwal(this.form)
      console.log(res)
      this.$router.push({ name: 'Jadwal Finish' })
      // window.location.href = '/jadwalfinish'
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form = {}
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  created () {
    this.form = this.$store.state.jadwalToAdd
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
