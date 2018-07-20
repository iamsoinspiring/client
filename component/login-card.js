Vue.component('login-card', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `
                <div class= "card card-container">
                    <slot></slot>
                    <input type="password" id="password" v-model="password" placeholder="Password"><br>
                    <button class="btn btn-primary btn-block btn-signin" v-on:click="userLogin">Login</button><br>
                    <a href="http://localhost:8080/register.html" style="align-self: center"><small>Don't have an account? Click here</small></a>
                    <small style="align-self: center">{{ error }}</small>
                </div>
  `
  })