<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Demo App</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item v-b-modal.Auth>Signup</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <Authentication></Authentication>

    <b-row style="margin: 0px">
      <router-view></router-view>
    </b-row>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import AuthModal from './components/AuthModal.vue'
  
  export default {
    name: 'app',
    components: {
      'Authentication': AuthModal
    },
    methods: {
    }
  }
</script>
