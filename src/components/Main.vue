<template>
  <div class="container">
    <form>
      <input class="card round" type="text" id="country-input" name="country-name" placeholder="Search for a country..">
      <select class="card round" name="filter" id="filter-input">
        <option id="filter-placeholder" value="" disabled selected>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
    <div class="card-wrapper">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  </div>
</template>

<script>
import CountryCard from './molecules/CountryCard.vue'

export default {
  name: 'Main',
  components: {
    CountryCard
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
