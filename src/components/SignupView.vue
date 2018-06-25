<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
        <main class="mdl-layout__content" style="margin: 4% auto">
          <div class="mdl-card mdl-shadow--6dp">
            <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
              <h2 class="mdl-card__title-text">Regiser</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <form action="#">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="fullName">
                  <label class="mdl-textfield__label" for="fullName">Fullname</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="phoneNumber">
                  <label class="mdl-textfield__label" for="phoneNumber">Phone Number</label>
                  <span class="mdl-textfield__error">Phone number contains digits only!</span>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="email">
                  <label class="mdl-textfield__label" for="email">E-Mail</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="password" id="password">
                  <label class="mdl-textfield__label" for="password">Password</label>
                </div>
              </form>
            </div>

            <div class="mdl-card__actions mdl-card--border">
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Login
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>  
  </div>
</template>
<script>
import data from '../data'
export default {
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'detail', params: { id: id }})
    }
  },
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>
<style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
</style>