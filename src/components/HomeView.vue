<template>
  <div class="mdl-grid">
    <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" to="/signup">
      Signup
    </router-link>

    <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" to="/login">
      Login
    </router-link>
  </div>
</template>
<script>
import data from '../data'
export default {
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>
<style scoped>
  .mdl-button {
    margin: 15% 15% 0% 21% !important;
  }
</style>
