<template>
   <section class="content">
    <div class="row center-block">
        <div class="col-md-12">
            <div class="box">
                <div class="box_check">
                <div class="checkmulai">
                <div class="check"></div>
                <div class="tulisan">
                  <b>Input {{title}} Berhasil</b>
                </div>
              </div>
            </div>
            </div>
            <b-button variant="primary" to="/">Kembali</b-button>
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
  name: 'Finish',
  mounted() {
    this.$nextTick(() => {
      $('#example1').DataTable()
    })
  },
  data() {
    return {
      title: 'Jadwal'
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

.box_check{
  height: 70vh;
  background-color: #3ed160;
}

.row .image img {
  border-radius: 50%
}

.checkmulai {
  background-color: #3ed160;
  min-height: auto;
}

.tulisan {
  position: absolute;
  font-family: "Helvetica";
  color: white;
  font-size: 50px;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  animation: mulai 2.5s ease;
  text-align: center;
  width: 60vw;
}

@keyframes mulai {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
}

.check {
  position: absolute;
  left: calc(50% - 30px);
  top: calc(50% + 30px);
  border: solid 30px white;
  width: 200px;
  height: 100px;
  margin: -50px 0 0 -75px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  transform-origin: top left;
  /* box-shadow: -5px 5px 0 0 rgba(0,0,0,.5); */
  animation: start 2.5s ease;
  animation-play-state: running !important;
}

@keyframes start {
  0% {
    opacity: 0;
    width: 0;
    height: 0;
  }
  10% {
    opacity: 1;
    height: 100px;
  }
  20% {
    width: 200px;
  }
}
</style>
