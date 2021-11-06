import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    newsCategory:[],
    newsSource:[]
  },
  getters: {
    getNewsCategory:(state) => state.newsCategory,
    getNewsSource:(state) => state.newsSource
  },
  mutations: {
    setNewsCategory:(state, payload) => (state.newsCategory = payload),
    setNewsSource:(state, payload) => (state.newsSource = payload)
  },
  actions: {
    showNewsCategory:({commit}, category) => {
      const api_key = process.env.VUE_APP_API_KEY;
      try{
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`)
        .then((res) => {
          //console.log("category", res.data.articles)
          commit("setNewsCategory", res.data.articles)
        })
      }catch(e){
        console.log(e);
      }
    },
    showNewsSource:({commit}, source) => {
     const api_key = process.env.VUE_APP_API_KEY;
      try{
        axios.get(`https://newsapi.org/v2/top-headlines/sources?id=${source}&apiKey=${api_key}`)
        .then((res) => {
          console.log(source, res.data.sources)
          commit("setNewsSource", res.data.sources)
        })
      }catch(e){
        console.log(e);
      }
    }
  },
  modules: {
  },
  plugins: [
    vuexLocal.plugin
  ]
})
