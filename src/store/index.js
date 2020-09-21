import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../api/http";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem("Authorization") ?
      localStorage.getItem("Authorization") : "",
    user_id: localStorage.getItem("user_id") ?
      localStorage.getItem("user_id") : "",
    account: localStorage.getItem("account") ?
      localStorage.getItem("account") : "",
    userInfo: {},
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem("Authorization", user.Authorization);

      state.user_id = user.user_id;
      localStorage.setItem("user_id", user.user_id);

      state.account = user.account;
      localStorage.setItem("account", user.account);
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    etUserInfo(context) {
      axios
        .get("/user/getUserInfo", {
          account: context.state.account
        })
        .then((res) => {
          // context.state.userInfo = res.data;
          context.commit("changeUserInfo", res.data);
          console.log("getUserInfo(context):", res.data);
        });
    },
  },
  modules: {}
})