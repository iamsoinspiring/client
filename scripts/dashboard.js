var vm = new Vue({
  el: '#app',
  data: {
    description: ''
  },
  created() {
    let token = localStorage.getItem('token')
    console.log(token)
    if (!token) {
      window.location.href = "http://localhost:8080/"
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.href = "http://localhost:8080"
    }
  }
})