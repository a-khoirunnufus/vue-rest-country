<template>
  <router-link :to="{ name: 'country', params: { id: country.alpha3Code }}">
  <div class="card round card-country">
    <img class="img-flag" :src="country.flag" alt="flag">
    <div class="wrapper">
      <h3 class="country-name">{{ country.name }}</h3>
      <p><strong>Population:</strong> {{ country.population }}</p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Capital:</strong> {{ country.capital }}</p>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  name: 'CountryCard',
  props: [
    'country'
  ]
}
</script>

<style lang="scss" scoped>
.card-country {
  display: inline-flex;
  flex-direction: column;
  height: 166*2px;
  .img-flag {
    border: none;
    width: 100%;
    max-height: 178px;
    background-size: cover;
    border-radius: 5px 5px 0 0;
  }
  .wrapper {
    padding: 1.75rem 1.5rem;
    .country-name {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: .25rem;
    }
  }
}
</style>
