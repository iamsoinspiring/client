Vue.component('email-box', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<input type="text" id="email" v-model="uname_email" placeholder="Email address"><br>`
  })