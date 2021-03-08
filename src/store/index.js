import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '../http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jsonData: null,
  },
  mutations: {
    setJsonData (state, payload) { state.jsonData = payload },
  },
  getters: {
    getJsonData: state => { return state.jsonData },
  },
  actions: {
    getWords(context, payload) {
      return new Promise(function (resolve) {
        console.log(payload)

        // oxforddictionaries.entries({word_id: 'ace'})
        //     .then((data) => console.log(data))
        //     .catch((e) => console.log('Error', e));
        // ${payload.word}
        HTTP.get(`/entries/en-gb/ace`)
            .then(res => {
              context.commit('setJsonData', res.data.data)
              resolve(res.status)
            })

      })
    },
  },
  modules: {
  }
})
