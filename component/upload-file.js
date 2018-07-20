Vue.component('upload-file', {
  data: function() {
    return {
      file: '',
      desc: ''
    }
  },
  methods: {
    uploadImage(e) {
      this.file = e.target.files[0]
      console.log(e)
    },
    submitImage() {
      let formData = new FormData()
      formData.append('image', this.file)
      formData.append('desc', this.desc)

      axios.post('http://35.240.248.109/users/image-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response)
        if (response) {
          console.log('success')
          console.log(response)
          window.location.href = "http://iamsoinspiring.xendit.party/dashboard.html"
        }
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }
  },
  template: `
  <div class="row" id="uploadfile">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Upload your picture</h4>
          <input type="file" name="" id="" v-on:change="uploadImage($event)">
          <br><br>
          <h5>Description</h5>
          <input type="text" name="desc" id="desc" v-model="desc">
          <br>
          <button v-on:click="submitImage()">Upload</button>
        </div>
      </div>
    </div>
  </div>
  `
})