Vue.component('login-card', {
    data: function() {
        return {
            uname_email: '',
            password: '',
            error: ''
        }
    },
    // props: ['unameemail','password','error'],
    methods: {
        userLogin() {
            console.log(this.uname_email)
            axios.post('http://35.240.248.109/users/login', {
              uname_email: this.uname_email,
              password: this.password
            }, {})
            .then(response => {
              let token = response.data.token // CHANGE SOON
              if (token) {
                localStorage.setItem('token', token)
                window.location.href = "http://iamsoinspiring.xendit.party/dashboard.html"
              } else {
                console.log('error', response.data)
                this.error = response.data.error // CHANGE SOON
              }
            })
            .catch(err => {
              console.log(err.error)
              // console.log(err)
              this.error = 'Please put correct username / password'
            })
          }
    },
    template: `
        <div class= "card card-container">
            <h5 style="align-self: center">Login</h5><br>
            <input type="text" id="email" v-model="uname_email" placeholder="Email address"><br>
            <input type="password" id="password" v-model="password" placeholder="Password"><br>
            <button class="btn btn-primary btn-block btn-signin" v-on:click="userLogin">Login</button><br>
            <a href="http://localhost:8080/register.html" style="align-self: center"><small>Don't have an account? Click here</small></a>
            <small style="align-self: center color: red">{{ error }}</small>
        </div>
  `
  })