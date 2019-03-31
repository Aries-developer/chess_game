const state = {
    money: 1,
    unLogin: '',
    Login_skin: JSON.parse(localStorage.getItem('Login_skin'))
}
const mutations = {
    add(state) {
        state.money++
    },
    reduce(state) {
        state.money--
    },
    checklogin(state, {
        unLogin
    }) {
        state.unLogin = unLogin
    }
}
const actions = {
    async checklogin({
        commit
    }, callback) {
        let cookie = document.cookie
        if (!cookie) {
            let unLogin = '黑人就不用登录了吗？⊙﹏⊙‖∣°'
            commit('checklogin', {
                unLogin
            })
            callback && callback()
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}