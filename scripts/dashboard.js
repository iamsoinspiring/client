var vm = new Vue({
  el: '#app',
  data: {
    description: ''
  },
  created() {
    let token = localStorage.getItem('token')
    console.log(token)
    if (!token) {
      window.location.href = "http://iamsoinspiring.xendit.party"
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.href = "http://iamsoinspiring.xendit.party"
    }
  }
})