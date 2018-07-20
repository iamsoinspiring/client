Vue.component('image-list', {
  data: function() {
    return {
      images: undefined
    }
  },
  created() {
    axios.get('http://35.240.248.109/users/image', {})
    .then(response => {
      // console.log(response)
      this.images = response.data
      console.log(this.images)
    })
    .catch(err => {
      console.log(err.response)
    })
  },
  template: `
  <div class="row">
    <div class="col-md-4" v-for="image in images">
      <div class="card">
        <a v-bind:href="image.url" download="test-image">
          <img :src="image.url" alt="test-image" class="card-img-top" alt="test-image">
        </a>
        <div class="card-body">
          <p class="card-text">{{ image.description }}</p>
          <a href="https://twitter.com/intent/tweet?text=hello" 
          class="twitter-share-button" 
          data-url=""
          data-show-count="false" data-size="large">
            Tweet
          </a>
        </div>
      </div>
    </div>
  </div>
  `
})