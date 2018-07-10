HomeAfterLoginView.vue

<template>
  <b-container>
    <div style="width: 100%;border-size: 0.2em; border: solid #f7f7f9; padding: 1.5rem;margin: 10px 0 0 0 ">
      <div class="postSection">
        <b-form @submit="onSubmit">
          <b-form-textarea label="Post:"
            label-for="post"
            id="post"
            v-model="post.text"
            placeholder="Your post"
            :rows="3"
            :max-rows="6">
              <pre class="mt-3">{{ post.text }}</pre>
          </b-form-textarea>
          <div style="text-align: right; margin-top: 5px;">
            <b-button type="submit" variant="primary">Post</b-button>
          </div>
        </b-form>
      </div>
    </div>

    <div style="width: 100%;border-size: 0.2em; border: solid #f7f7f9; padding: 1.5rem;margin: 10px 0 0 0 ">
      <h3 style="text-align: center;"> Your news feed </h3>
      
      <div class="feedSection">
        <div class="singlePost">
          <b-card>
            <div class="post-header">
              <b-img rounded="circle" src="https://picsum.photos/125/125/?image=58" width="30" height="30" alt="img" class="m-1" />
              <span> Post Owner name</span>
            </div>
            <div class="post-content">
              <div>
                <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
              </div>
              <p class="card-text" style="margin-top: 5px;">
                Post Content will be here. Post Content will be here. Post Content will be here. Post Content will be here. Post Content will be here. 
                Post Content will be here. Post Content will be here. Post Content will be here. Post Content will be here. 
              </p>
            </div>
            <b-button class="card-link" style="margin-top: 5px;">
              <span>
                <icon name="thumbs-up"></icon> Like
              </span>
            </b-button>
            <b-button class="card-link" style="margin-top: 5px; color: blue;">
              <span>
                <icon name="thumbs-down"></icon> Unlike
              </span>
            </b-button>
          </b-card>
        </div>

        <div class="singlePost">
          <b-card>
            <div class="post-header">
              <b-img rounded="circle" src="https://picsum.photos/125/125/?image=58" width="30" height="30" alt="img" class="m-1" />
              <span> Post Owner name</span>
            </div>
            <div class="post-content">
              <div>
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
                <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
              </div>
              <p class="card-text" style="margin-top: 5px;">
                Post Content will be here. Post Content will be here. Post Content will be here. Post Content will be here. Post Content will be here. 
                Post Content will be here. Post Content will be here. Post Content will be here. Post Content will be here. 
              </p>
            </div>

            <b-button class="card-link" style="margin-top: 5px;color: blue;">
              <span>
                <icon name="thumbs-up"></icon> Like
              </span>
            </b-button>
            <b-button class="card-link" style="margin-top: 5px;">
              <span>
                <icon name="thumbs-down"></icon> Unlike
              </span>
            </b-button>
          </b-card>
        </div>

      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      post: {
        text: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
    }
  }
}
</script>
<style scoped>
.feedSection .singlePost {
  margin: 10px;
}
</style>
