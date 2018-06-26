<!-- Modal Component -->
<template>
	<b-form @submit="onSubmit" @reset="onReset">
  	<b-modal @shown="onReset" hide-footer id="Auth" title="Signup">
      <b-form-group label="Fullname:"
        label-for="fullName">
        	<b-form-input id="fullName"
            type="text"
            v-model="form.fullName"
            required
            placeholder="Enter Fullname">
        	</b-form-input>
      </b-form-group>

      <b-form-group label="Sex: " label-for="sex">
	      <b-form-radio-group id="sex"
          :options="sexList"
          required
          v-model="form.sex">
	      </b-form-radio-group>
	    </b-form-group>
      
      <b-form-group label="Email:"
        label-for="email">
     	 		<b-form-input id="email"
            type="email"
            v-model="form.email"
            required
            placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group label="Country"
        label-for="country">
        <b-form-select id="country"
          :options="countryList"
          required
          v-model="form.country">
        </b-form-select>
      </b-form-group>

      <b-form-group label="Phone Number:"
        label-for="phone">
     	 		<b-form-input id="phone"
            type="text"
            v-model="form.phone"
            required
            placeholder="Enter Phone number">
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
      <div style="text-align: center;">
	      <b-button type="submit" variant="primary">Submit</b-button>
	      <b-button type="reset" variant="danger">Reset</b-button>
  		</div>
  	</b-modal>
   </b-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        sex: 'male',
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
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        sex: 'male',
        country: ''
      }
    }
  }
}
</script>