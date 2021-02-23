<template>
  <div class="container detail-wrapper" v-if="country">
    <router-link to="/"><button class="btn card round">← Back</button></router-link>
    <div class="detail-content">
      <img class="flag-img" :src="country.flag" alt="flag">
      <div class="detail-text">
        <h1>{{ country.name }}</h1>
        <div class="wrapper">
          <div>
            <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
            <p><strong>Population:</strong> {{ country.population }}</p>
            <p><strong>Region:</strong> {{ country.region }}</p>
            <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
            <p><strong>Capital:</strong> {{ country.capital }}</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> {{ country.topLevelDomain.toString() }}</p>
            <p><strong>Currencies:</strong> {{ country.currencies.map(item => item.name).toString() }}</p>
            <p><strong>Languages:</strong> {{ country.languages.map(item => item.name).toString() }}</p>
          </div>
        </div>
        <div class="border">
          <p><strong>Border Countries:</strong></p>
          <span class="tag card" v-for="(border, index) in country.borders" :key="index">{{ border }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      country: null
    }
  },
  beforeRouteEnter (to, from, next) {
    fetch(`https://restcountries.eu/rest/v2/alpha/${to.params.id}`)
      .then(res => res.json())
      .then(country => {
      //   country tag should display full name
      //   const editedCountry = country
      //   const borders = country.borders
      //   let bordersName = []
      //   console.log('1')
      //   borders.forEach( async (item) => {
      //     await fetch(`https://restcountries.eu/rest/v2/alpha/${item}`)
      //       .then(res => res.json())
      //       .then(res => {
      //         console.log('2')
      //         bordersName.push(res.name)
      //       })
      //       .catch(err => console.error(err))
      //   })
      //   console.log('3')
      //   editedCountry['bordersName'] = bordersName
      //   console.log('edited country',editedCountry)
      //   return editedCountry
      // })
      // .then(country => {
        console.log('selected country', country)
        next(vm => vm.country = country)
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang="scss" scoped>
.detail-wrapper {
  font-size: 16px;
}
button {
  margin: 2rem 0;
  background-color: #fff;
  cursor: pointer;
}
.detail-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7em;
  .flag-img {
    width: 100%;
  }
  .detail-text {
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 1.5rem;
    }
    & > .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 3rem;
      p {
        margin-bottom: .75rem;
      }
    }
    .border {
      & > * {
        display: inline;
      }
      p {
        margin-right: .75rem;
      }
      .tag {
        padding: .25rem 1rem;
        margin: 0 .25rem;
      }
    }
  }
}
</style>
