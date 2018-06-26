<template>
  <div style="width: 100%">
    <b-carousel id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="100"
      img-height="200"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide 
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/350/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide 
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/350/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide 
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/350/?image=52"
      ></b-carousel-slide>

      <b-carousel-slide 
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/350/?image=52"
      ></b-carousel-slide>
    </b-carousel>

    <b-container class="bv-example-row">
      <b-row style="display: inline;text-align: center;">
        <h1>Our Services</h1>
      </b-row>
      <b-card-group deck>
        <b-card title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Img"
          img-top
        >
          <p class="card-text">
              This is a wider card with supporting text below as a
              natural lead-in to additional content. This content
              is a little bit longer.
          </p>
          <div slot="footer">
              <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
        
        <b-card title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Img"
          img-top
        >
          <p class="card-text">
              This card has supporting text below as a natural lead-in
              to additional content.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
        
        <b-card title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Img"
          img-top
        >
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This card has even longer content
            than the first to show that equal height action.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>

</style>
