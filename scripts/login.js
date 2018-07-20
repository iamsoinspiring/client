var vm = new Vue({
  el: '#app',
  data: {
    email: '',
    password: '',
    error: null
  },
  methods: {
    userLogin() {
      axios.post('http://35.240.248.109/login', {
        // email: this.email,
        // password: this.password
      }, {})
      .then(response => {
        // let token = response.data.token // CHANGE SOON
        if (token) {
          localStorage.setItem('token', token)
          window.location.href = "http://iamsoinspiring.xendit.party/dashboard.html"
        } else {
          // this.error = response.data.error // CHANGE SOON
        }
      })
      .catch(err => {
        console.log(err)
        this.error = err
      })
    }
  }
})