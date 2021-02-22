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
      <div class="card round card-country">
        <img class="img-flag" src="../assets/logo.svg" alt="flag">
        <div class="wrapper">
          <h3 class="country-name">United States of America</h3>
          <p><strong>Population:</strong> 200.200.900</p>
          <p><strong>Region:</strong> Americas</p>
          <p><strong>Capital:</strong> Brasilia</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
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
.card-country {
  display: inline-flex;
  flex-direction: column;
  min-height: 166*2px;
  .img-flag {
    width: 250px;
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
