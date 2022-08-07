import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import tap from './tap'
import user from './user'

export default new Vuex.Store({
    modules:{
tap,
user
    }
})