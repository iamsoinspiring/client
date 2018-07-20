Vue.component('password-box', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<input type="password" id="password" v-model="password" placeholder="Password"><br>`
  })