<template>
  <div class="container detail-wrapper">
    <button class="btn card round">← Back</button>
    <div class="detail-content">
      <img class="flag-img" src="../assets/logo.svg" alt="flag">
      <div class="detail-text">
        <h1>Indonesia</h1>
        <div class="wrapper">
          <div>
            <p><strong>Native Name:</strong> Indonesia</p>
            <p><strong>Population:</strong> 200.200.900</p>
            <p><strong>Region:</strong> Asia</p>
            <p><strong>Sub Region:</strong> Southeast Asia</p>
            <p><strong>Capital:</strong> Jakarta</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> .id</p>
            <p><strong>Currencies:</strong> Indonesian Rupiah</p>
            <p><strong>Languages:</strong> Bahasa Indonesia</p>
          </div>
        </div>
        <div class="border">
          <p><strong>Border Countries:</strong></p>
          <span class="tag card">Malaysia</span>
          <span class="tag card">Singapura</span>
          <span class="tag card">Timor Leste</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details'
}
</script>

<style lang="scss" scoped>
.detail-wrapper {
  font-size: 16px;
}
button {
  margin: 2rem 0;
  background-color: #fff;
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
