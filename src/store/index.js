import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: null
  },
  mutations: {
    SET_ALL_COUNTRIES(state, countries) {
      state.countries = countries
    }
  },
  actions: {
    setAllCountries({ commit }, countries) {
      commit('SET_ALL_COUNTRIES', countries)
    }
  },
  getters: {
    getMainCountry(state) {
      return state.countries.filter(country => {
        return ['Indonesia','Germany','United States of America','Brazil','Iceland','Afghanistan','Albania','Algeria'].includes(country.name)
      })
    },
    getAfricaCountry(state) {
      return state.countries.filter(country => country.region === 'Africa')
    },
    getAmericaCountry(state) {
      return state.countries.filter(country => country.region === 'Americas')
    },
    getAsiaCountry(state) {
      return state.countries.filter(country => country.region === 'Asia')
    },
    getEuropeCountry(state) {
      return state.countries.filter(country => country.region === 'Europe')
    },
    getOceaniaCountry(state) {
      return state.countries.filter(country => country.region === 'Oceania')
    },
  },
  modules: {

  }
})
