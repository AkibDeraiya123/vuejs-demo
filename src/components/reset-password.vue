<!-- Modal Component -->
<template style="background-color: blue;">
  <b-container style="margin: 10% auto;padding: 20px; background-color: gray;">
  	<b-form @submit="onSubmit">
      
      <h2 style="text-align: center;">Reset Password</h2>
      
      <b-form-group label="Password:"
        label-for="password">
     	 		<b-form-input id="password"
            type="password"
            v-model="form.password"
            required
            placeholder="Enter Password">
        </b-form-input>
      </b-form-group>

      <b-form-group label="Confirm Password:"
        label-for="cpassword">
          <b-form-input id="cpassword"
            type="password"
            v-model="form.cpassword"
            required
            placeholder="Enter Password">
        </b-form-input>
      </b-form-group>

        <div style="text-align: center;">
  	      <b-button type="submit" variant="primary">Submit</b-button>
    		</div>
    </b-form>
  </b-container>
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