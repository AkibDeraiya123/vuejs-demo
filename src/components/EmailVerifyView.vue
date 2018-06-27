<!-- Modal Component -->
<template style="background-color: blue;">
  <div class="absolute-center" style="color: rgb(34, 4, 82);">
    <icon name="check" style="color: blue; width:130px; margin: 16px 30px; height: 70px;"></icon>
    <div style="margin-bottom: 40px;">
      <h1 style="margin: 10px;">
        <span>Thank you!</span>
      </h1>
      <p style="font-size: 18px;">
        <span>Your email address was successfully verified.</span>
      </p>
    </div>

    <b-button variant="outline-primary" v-b-modal.loginModel> Click here for login </b-button>
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
  top: 30%;
  left: 35%;
}
</style>