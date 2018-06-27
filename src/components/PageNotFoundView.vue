<!-- Modal Component -->
<template style="background-color: blue;">
  <div class="absolute-center" style="color: rgb(34, 4, 82);text-align: center;">
    <h1>
      <span>Oops! We're sorry, but this page could not be found.</span>
    </h1>
  <b-button variant="outline-primary" :to="{ 'path': '/'}"> Redirect to home </b-button>
 </div>
</template>

<script>
import Request from '../http-request'
import config from '../../config-app'

export default {
  data () {
    return {
      form: {
        cpassword: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // Call API for reset-password
      Request.post(`${config.apiBaseUrl}/change-password/${this.$route.params.passwordString}`, this.form, {'Accept': 'application/json'})
        .then(response => {
          console.log('response', response)
        })
        .catch(e => {
          console.log('e', e)
        })
    }
  }
}
</script>
<style>
.absolute-center {
  position: absolute;
  top: 40%;
  left: 15%;
}
</style>