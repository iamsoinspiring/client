Vue.component('container', {
    data: function () {
      return {
        count: 0
      }
    },
    template: `<div class= "container">
                <slot></slot>
                </div>`
  })