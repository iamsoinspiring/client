Vue.component('quote-card', {
  data: function() {
    return {
      quote: null
    }
  },
  methods: {
    getQuote() {
      axios.get('https://talaikis.com/api/quotes/random/', {})
      .then(response => {
        this.quote = response.data.quote
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  },
  template: `
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Get an inspirational quote</h4>
            <button v-on:click="getQuote()">Get quote</button>
            <div v-show="quote">
              <br>
              <h5 class="card-title">{{ quote }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})