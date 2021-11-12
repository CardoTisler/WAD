import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allPostsArray: []
  },
  mutations: {
    setAllPostsArray (state, payload) {
      state.allPostsArray = payload.map(
        post => ({...post, likeCount: 0})
      )
    },
    incrementLikeCount (state, id) {
      state.allPostsArray = state.allPostsArray.map(
        post => {
          if (post.id === id) {
            post.likeCount += 1
          }
          return post
        }
      )
    },
    resetLikes (state) {
      state.allPostsArray = state.allPostsArray.map(
        post => ({...post, likeCount: 0})
      )
    }
  },
  actions: {
    async fetchAllPosts (state) {
      const url = 'https://api.npoint.io/b5c08d0e15c1c01572f1'
      const options = {method: 'GET'}
      const {posts} = await fetch(url, options).then((res) => res.json())
      state.commit('setAllPostsArray', posts)
    }
  },
  modules: {},
  getters: {
    getAllPostsArray: state => state.allPostsArray
  }
})
