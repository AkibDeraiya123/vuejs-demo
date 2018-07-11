<template>
  <div style="width:100%;">
      <div style="text-align: center;margin: 10px;">
        <h1> CONTACT </h1>
        <hr />
        <h4> We'd <icon name="heart"></icon> to Help ! </h4>
        <p>Tag line will be here</p>
      </div>

      <b-container class="bv-example-row">
        <b-row>
            <b-col cols="12" md="6">
              <b-form @submit="onSubmit" @reset="onReset">      
                <h2 style="text-align: center;">How can we help you !</h2>
                
                <b-form-group label="Name:"
                  label-for="name">
                    <b-form-input 
                      id="name"
                      name="name"
                      type="text"
                      v-model="form.name"
                      v-validate="'required'"
                      :class="{'input': true, 'invalid-input': errors.has('name') }"
                      placeholder="Enter fullname">
                  </b-form-input>

                  <div v-show="errors.has('name')" class="errorDiv">
                    <icon name="exclamation-triangle"></icon>
                    <span>{{ errors.first('name') }}</span>
                  </div>
                </b-form-group>

                <b-form-group label="E-mail:"
                  label-for="email">
                    <b-form-input 
                      name="email"
                      id="email"
                      type="email"
                      v-model="form.email"
                      v-validate="'required|email'"
                      :class="{'input': true, 'invalid-input': errors.has('email') }"
                      placeholder="Enter email">
                  </b-form-input>

                  <div v-show="errors.has('email')" class="errorDiv">
                    <icon name="exclamation-triangle"></icon>
                    <span>{{ errors.first('email') }}</span>
                  </div>
                </b-form-group>

                <b-form-group label="Phone Number:"
                  label-for="number">
                    <b-form-input 
                      name="number"
                      id="number"
                      type="text"
                      v-model="form.number"
                      v-validate="'required'"
                      :class="{'input': true, 'invalid-input': errors.has('number') }"
                      placeholder="Enter Phone number">
                  </b-form-input>

                  <div v-show="errors.has('number')" class="errorDiv">
                    <icon name="exclamation-triangle"></icon>
                    <span>{{ errors.first('number') }}</span>
                  </div>
                </b-form-group>

                <b-form-textarea 
                  label="Message:"
                  label-for="message"
                  name="message"
                  id="message"
                  v-model="form.message"
                  v-validate="'required'"
                  :class="{'input': true, 'invalid-input': errors.has('message') }"
                  placeholder="Your message"
                  :rows="3"
                  :max-rows="6">
                </b-form-textarea>
                <div v-show="errors.has('message')" class="errorDiv">
                  <icon name="exclamation-triangle"></icon>
                  <span>{{ errors.first('message') }}</span>
                </div>

                  <div style="text-align: center;margin-top: 15px">
                    <b-button type="submit" variant="outline-success">Submit</b-button>
                    <b-button type="reset" variant="outline-danger">Reset</b-button>
                  </div>
              </b-form>
            </b-col>

            <b-col cols="12" md="6">
              <b-col>
                <p>
                  <icon name="map-marker"></icon> Titenium square, C - 706, Ahemdabad
                </p>
              </b-col>
              
              <b-col>
                <p>
                  <icon name="phone-square"></icon> +91 9999999999
                </p>
              </b-col>
              
              <b-col>
                <p>
                  <icon name="envelope"></icon> Contact@company.com
                </p>
              </b-col>

              <hr />
              <b-col>
                <ul>
                  <li>
                    <b-link>
                      <icon name="user-circle"></icon>
                    </b-link>
                  </li>

                  <li>
                    <b-link>
                      <icon name="user-circle"></icon>
                    </b-link>
                  </li>

                  <li>
                    <b-link>
                      <icon name="user-circle"></icon>
                    </b-link>
                  </li>

                  <li>
                    <b-link>
                      <icon name="user-circle"></icon>
                    </b-link>
                  </li>
              </ul>
            </b-col>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        number: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert(JSON.stringify(this.form))
        }
      })
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = {
        name: '',
        email: '',
        number: '',
        message: ''
      }
    }
  }
}
</script>