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
                    <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter fullname">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="E-mail:"
                  label-for="email">
                    <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Phone Number:"
                  label-for="number">
                    <b-form-input id="number"
                      type="text"
                      v-model="form.number"
                      required
                      placeholder="Enter Phone number">
                  </b-form-input>
                </b-form-group>

                <b-form-textarea label="Message:"
                  label-for="message"
                  id="message"
                  v-model="form.message"
                  placeholder="Your message"
                  :rows="3"
                  :max-rows="6">
                    <pre class="mt-3">{{ form.message }}</pre>
                </b-form-textarea>

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
      alert(JSON.stringify(this.form))
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