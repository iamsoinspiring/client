Vue.component('register-card', {
  data: function() {
    return {
      fullname: '',
      username: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    userRegister() {
      axios.post('http://35.240.248.109/users/register', {
        full_name: this.fullname,
        email: this.email,
        username: this.username,
        password: this.password
      }, {})
      .then(response => {
        console.log(response);
        window.location.href = "http://localhost:8080"
      })
      .catch(err => {
        this.error = err.response.data
        console.log(err.response.data)
      })
    }
  },
  template: `
  <div class="card card-container">
    <h5 style="align-self: center">Register</h5>
    <br>
    <small style="color: red">{{ error }}</small>
    <input type="text" id="fullname" v-model="fullname" placeholder="Full name"><br>
    <input type="text" id="username" v-model="username" placeholder="Username"><br>
    <input type="text" id="email" v-model="email" placeholder="Email address"><br>
    <input type="password" id="password" v-model="password" placeholder="Password"><br>
    <button class="btn btn-primary btn-block btn-signin" v-on:click="userRegister">Register</button>
  </div>
`
})