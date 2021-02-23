<template>
  <div class="container" v-if="displayCountry">
    <form v-on:submit.prevent="searchCountry">
      <input v-model="inputText" class="card round" type="text" id="country-input" name="country-name" placeholder="Search for a country..">
      <select class="card round" name="filter" id="filter-input" v-model="selected">
        <option id="filter-placeholder" value="" disabled>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </form>
    <div class="card-wrapper">
      <CountryCard v-for="(country, index) in displayCountry" :country="country" :key="index"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CountryCard from './molecules/CountryCard.vue'

export default {
  name: 'Main',
  components: {
    CountryCard
  },
  data() {
    return {
      displayCountry: ref(null),
      selected: '',
      inputText: ''
    }
  },
  watch: {
    selected(val) {
      this.setRegion(val)
    }
  },
  mounted() {
    // fetch data for first time
    this.fetchFromAPI()
      .then(res => {
        if(res) this.displayCountry = this.$store.getters.getMainCountry
      })
      .catch(err => console.error(err));
  },
  methods: {
    fetchFromAPI() {
      return new Promise((resolve, reject) => {
        fetch('https://restcountries.eu/rest/v2/all')
          .then(res => res.json())
          .then(countries => {
            console.log('hasil fetch',countries)
            this.$store.dispatch('setAllCountries', countries)
            resolve(true)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    setRegion(region) {
      console.log('filter click')
      switch(region) {
        case 'Africa':
          console.log('set to Africa region')
          this.displayCountry = this.$store.getters.getAfricaCountry
          break
        case 'America':
          console.log('set to America region')
          this.displayCountry = this.$store.getters.getAmericaCountry
          break
        case 'Asia':
          console.log('set to Asia region')
          this.displayCountry = this.$store.getters.getAsiaCountry
          break
        case 'Europe':
          console.log('set to Europe region')
          this.displayCountry = this.$store.getters.getEuropeCountry
          break
        case 'Oceania':
          console.log('set to Oceania region')
          this.displayCountry = this.$store.getters.getOceaniaCountry
          break
        default:
          console.log('region not found')
      }
    },
    searchCountry() {
      fetch(`https://restcountries.eu/rest/v2/name/${this.inputText}`)
        .then(res => res.json())
        .then(res => {
          console.log('search result', res)
          this.displayCountry = res
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
#country-input {
  width: 400px;
  margin: 2rem 0;
  padding: 1rem;
  padding-left: 4rem;
  background-image: url("../assets/icons/search-solid.svg");
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 2rem center;
  color: hsl(0, 0%, 52%);
  border: none;
}
form {
  display: flex;
  justify-content: space-between;
}
select {
  width: 200px;
  padding: 1rem;
  border: none;
  margin: 2rem 0;
}
#filter-placeholder{
  display: none;
}
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  margin-bottom: 2rem;
}
</style>
