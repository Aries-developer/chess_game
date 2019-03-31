import Vue from 'vue'
import Vuex from 'vuex'
import mode1 from './modules/mode1'
import mode2 from './modules/mode2'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mode1,
        mode2
    }
})