<!-- Modal Component -->
<template>
  <div>
  	<b-form @submit="onSubmit" @reset="onReset">
    	<b-modal @shown="onReset" hide-footer id="loginModel" title="Login" ref="LoginModelShow">      
        <b-form-group label="Email:"
          label-for="email">
       	 		<b-form-input id="email"
              type="email"
              v-model="form.email"
              required
              placeholder="Enter email">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Password:"
          label-for="password">
       	 		<b-form-input id="password"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter Password">
          </b-form-input>
        </b-form-group>

        <b-link @click="hideLoginModel">Forgot Password?</b-link>

        <div style="text-align: center;">
  	      <b-button type="submit" variant="primary">Submit</b-button>
  	      <b-button type="reset" variant="danger">Reset</b-button>
    		</div>
    	</b-modal>
    </b-form>

    <b-form @submit="submitEmail" @reset="resetEmail">
      <b-modal @shown="onReset" hide-footer id="ForgotModelShow" title="Login" ref="ForgotModelShow">      
        <b-form-group label="Email:"
          label-for="email">
            <b-form-input id="forgotEmail"
              type="email"
              v-model="forgot.email"
              required
              placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        
        <b-link @click="showLoginModel">Click here to login</b-link>

        <div style="text-align: center;">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-modal>
    </b-form>
  </div>
</template>

<script>
import Request from '../http-request'
import config from '../../config-app'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      forgot: {
        email: ''
      }
    }
  },
  methods: {
    submitEmail (evt) {
      evt.preventDefault()
      // Call API for forgot-password
      Request.post(`${config.apiBaseUrl}/forgot-password`, this.forgot, {'Accept': 'application/json'})
        .then(response => {
          console.log('response', response)
        })
        .catch(e => {
          console.log('e', e)
        })
    },
    resetEmail (evt) {
      evt.preventDefault()
      this.forgot = {
        email: ''
      }
    },
    onSubmit (evt) {
      evt.preventDefault()
      // Call API for login
      Request.post(`${config.apiBaseUrl}/login`, this.form, {'Accept': 'application/json'})
        .then(response => {
          console.log('response', response)
        })
        .catch(e => {
          console.log('e', e)
        })
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = {
        email: '',
        password: ''
      }
    },
    hideLoginModel (evt) {
      this.$refs.LoginModelShow.hide()
      this.$refs.ForgotModelShow.show()
    },
    showLoginModel (evt) {
      this.$refs.LoginModelShow.show()
      this.$refs.ForgotModelShow.hide()
    }
  }
}
</script>