<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div>
        <div >
          <img style="width:60%; margin-left:0%;" src="../../../static/img/logo_kyra.png" />
        </div>
        <!-- <div class="pull-left info">
          <div>
            <p class="white">{{user.displayName}}</p>
          </div>
          <a href="javascript:;">
            <i class="fa fa-circle text-success"></i> Online
          </a>
        </div> -->
      </div>

      <!-- search form (Optional) -->
      <!-- <form v-on:submit.prevent class="sidebar-form" id="searchForm">
        <div class="input-group" id="searchContainer">
          <span class="input-group-btn">
            <input type="text"
            name="search"
            id="search"
            class="search form-control"
            data-toggle="hideseek" p
            laceholder="Search Menus"
            data-list=".sidebar-menu">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form> -->
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  props: ['user'],
  components: { SidebarMenu },
  mounted: function() {
    window
      .jQuery('[data-toggle="hideseek"]')
      .off()
      .hideseek()
  }
}
</script>
<style scope="local">
.main-sidebar {
  padding-top: 0;
}

.user-panel {
  padding-bottom: 7vh;
}

.user-panel .image img {
  border-radius: 50%;
}
#searchForm {
  padding-left: 0em;
  padding-right: 0em;
}
#searchContainer {
  height: 100%;
  padding-bottom: 0em;
}
#search {
  width: 80%;
  float: right;
}

#search-btn {
  width: 20%;
}
</style>
