import Vue from 'vue';//引用vue
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex
const state={
    nodeVoteCount:2,
    vueVoteCount:3,
    author:'ls'
}
const mutations={
    newAuthor(state,msg){
        state.author = msg
    },
    add(state,n){
        state.nodeVoteCount = state.nodeVoteCount + n
    },
    reduce(state,n){
        state.nodeVoteCount = state.nodeVoteCount - n
    }
}
const getters={
    getStateCount:function(state){
        return state.vueVoteCount + 10
    }
}
const actions={
    addFun(context,n){
        context.commit('add',n)
    },
    reduceFun(context,n){
        context.commit('reduce',n)
    }
}
export default new Vuex.Store({////暴露Store对象
    state,
    mutations,
    getters,
    actions
})