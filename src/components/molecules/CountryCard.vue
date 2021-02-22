<template>
  <div class="card round card-country">
    <img class="img-flag" src="../../assets/logo.svg" alt="flag">
    <div class="wrapper">
      <h3 class="country-name">United States of America</h3>
      <p><strong>Population:</strong> 200.200.900</p>
      <p><strong>Region:</strong> Americas</p>
      <p><strong>Capital:</strong> Brasilia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard'
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
