var vm = new Vue({
  el: '#app',
  data: {
    name: '',
    email: '',
    password: '',
    error: ''
  },
  methods: {
    userLogin() {
      axios.post('http://35.240.248.109/register', {
        // name: this.name
        // email: this.email,
        // password: this.password
      }, {})
      .then(response => {
        if (response.data.error) {
          // this.error = response.data.error
        } else {
          window.location.href = 'http://iamsoinspiring.xendit.party/'
        }
      })
      .catch(err => {
        console.log(err)
        this.error = err
      })
    }
  }
})