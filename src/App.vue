<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ path: '/' }">Demo App</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item :to="{ path: '/contact-us'}">Contact Us</b-nav-item>

            <b-nav-item v-b-modal.signupModel>Signup</b-nav-item>
            <b-nav-item v-b-modal.loginModel>Login</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <SignupModel></SignupModel>
    <LoginModel></LoginModel>

    <b-row style="margin: 0px">
      <router-view></router-view>
    </b-row>

  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import SignupModel from './components/SignupModel.vue'
  import LoginModel from './components/LoginModel.vue'
  
  export default {
    name: 'app',
    components: {
      'SignupModel': SignupModel,
      'LoginModel': LoginModel

    },
    methods: {
    }
  }
</script>
