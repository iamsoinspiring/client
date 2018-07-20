var vm = new Vue({
  el: '#app',
  data: {
    // uname_email: '',
    // password: '',
    // error: ''
  },
  methods: {
    // userLogin() {
    //   console.log(this.uname_email)
    //   axios.post('http://localhost:3000/users/login', {
    //     uname_email: this.uname_email,
    //     password: this.password
    //   }, {})
    //   .then(response => {
    //     let token = response.data.token // CHANGE SOON
    //     if (token) {
    //       localStorage.setItem('token', token)
    //       window.location.href = "http://localhost:8080/dashboard.html"
    //     } else {
    //       console.log('error', response.data)
    //       this.error = response.data.error // CHANGE SOON
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err.error)
    //     // console.log(err)
    //     this.error = 'Please put correct username / password'
    //   })
    // }
  }
})