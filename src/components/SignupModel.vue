<!-- Modal Component -->
<template>
	<b-form @submit="onSubmit" @reset="onReset">
  	<b-modal @shown="onReset" hide-footer id="signupModel" title="Signup">
      <b-form-group label="Fullname:"
        label-for="fullName">
        	<b-form-input 
            name="fullName"
            id="fullName"
            type="text"
            v-model="form.fullName"
            v-validate="'required'"
            :class="{'input': true, 'invalid-input': errors.has('fullName') }"
            placeholder="Enter Fullname">
        	</b-form-input>

          <div v-show="errors.has('fullName')" class="errorDiv">
            <icon name="exclamation-triangle"></icon>
            <span>{{ errors.first('fullName') }}</span>
          </div>
      </b-form-group>

      <b-form-group label="Sex: " label-for="sex">
	      <b-form-radio-group 
          name="sexList"
          v-validate="'required'"
          id="sex"
          :options="sexList"
          v-model="form.sex">
	      </b-form-radio-group>
        <div v-show="errors.has('sexList')" class="errorDiv">
          <icon name="exclamation-triangle"></icon>
          <span>{{ errors.first('sexList') }}</span>
        </div>
	    </b-form-group>
      
      <b-form-group label="Email:"
        label-for="email">
          <b-form-input 
            name="email"
            id="email"
            type="text"
            v-model="form.email"
            v-validate="'required|email'"
            :class="{'input': true, 'invalid-input': errors.has('email') }"
            placeholder="Enter Email">
          </b-form-input>

          <div v-show="errors.has('email')" class="errorDiv">
            <icon name="exclamation-triangle"></icon>
            <span>{{ errors.first('email') }}</span>
          </div>
      </b-form-group>

      <b-form-group label="Country"
        label-for="country">
        <b-form-select
          :options="countryList"
          name="country"
          v-validate="'required'"
          id="country"
          :class="{'input': true, 'invalid-input': errors.has('country') }"
          v-model="form.country">
        </b-form-select>

        <div v-show="errors.has('country')" class="errorDiv">
          <icon name="exclamation-triangle"></icon>
          <span>{{ errors.first('country') }}</span>
        </div>
      </b-form-group>

      <b-form-group label="Phone Number:"
        label-for="phone">
     	 		<b-form-input 
            id="phone"
            type="text"
            name="phone"
            v-validate="'required|numeric'"
            :class="{'input': true, 'invalid-input': errors.has('phone') }"
            v-model="form.phone"
            placeholder="Enter Phone number">
        </b-form-input>
        <div v-show="errors.has('phone')" class="errorDiv">
          <icon name="exclamation-triangle"></icon>
          <span>{{ errors.first('phone') }}</span>
        </div>
      </b-form-group>

      <b-form-group label="Password:"
        label-for="password">
     	 		<b-form-input 
            id="password"
            type="password"
            name="password"
            v-validate="'required'"
            :class="{'input': true, 'invalid-input': errors.has('password') }"
            v-model="form.password"
            placeholder="Enter Password">
        </b-form-input>
        <div v-show="errors.has('password')" class="errorDiv">
          <icon name="exclamation-triangle"></icon>
          <span>{{ errors.first('password') }}</span>
        </div>
      </b-form-group>
      <div style="text-align: center;">
	      <b-button type="submit" variant="primary">Submit</b-button>
	      <b-button type="reset" variant="danger">Reset</b-button>
  		</div>
  	</b-modal>
   </b-form>
</template>

<script>

// import Request from '../http-request'
// import config from '../../config-app'

export default {
  data () {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        sex: '',
        country: ''
      },
      countryList: [
        { text: 'Select One', value: '' },
        { text: 'India', value: 'india' },
        { text: 'Pakistan', value: 'pakistan' },
        { text: 'Bhutan', value: 'bhutan' },
        { text: 'Nepal', value: 'nepal' },
        { text: 'Bangladesh', value: 'bangladesh' },
        { text: 'Shri Lanka', value: 'Shri-lanka' }
      ],
      sexList: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!')
          // return fa
        }

        // alert('Correct them errors!')
      })

      // Call API for signup
      // Request.post(`${config.apiBaseUrl}/signup`, this.form, {})
      //   .then(response => {
      //     console.log('response', response)
      //   })
      //   .catch(e => {
      //     console.log('e', e)
      //   })
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        sex: '',
        country: ''
      }
    }
  }
}
</script>

<style>
.invalid-input {
  border: 1px solid red;
}
.errorDiv {
  color: red;
}
</style>