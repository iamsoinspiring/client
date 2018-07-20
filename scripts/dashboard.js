var vm = new Vue({
  el: '#app',
  data: {
    description: ''
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      window.location.href = "http://localhost:8080"
    }
  }
})