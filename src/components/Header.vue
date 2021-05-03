<template>
  <div class="header">
    <div class="logo">小杉果</div>
    <div class="nav">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="{ hasmenu: item.list.length > 0 }"
      >
        <span>
          <router-link :to="item.url">
            {{ item.title }}
            <i v-if="index == 1" class="el-icon-arrow-down"></i>
          </router-link>
        </span>

        <ul class="menu" v-if="item.list.length > 0">
          <li v-for="(x, i) in item.list" :key="i">{{ x }}</li>
        </ul>
      </li>
    </div>
    <div class="search">
      <el-input
        v-model="input"
        placeholder="请输入关键词"
        size="small"
      ></el-input>
      <el-button icon="el-icon-search" size="small"></el-button>
    </div>
    <div class="user" v-if="!userEmail || userEmail.length === 0">
      <span class="login">
        <router-link to="/login">登录</router-link>
      </span>
      <span>|</span>
      <span class="register"><router-link to="/register">注册</router-link></span>
    </div>
    <div class="user" v-else>
      <router-link to="/userInfo">欢迎您！ {{ userEmail }}</router-link>
      <router-link to="/cart" class="cart">
        <i class="el-icon-shopping-cart-1"></i>购物车
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navList: [
        { title: "首页", list: [], url: "/" },
        {
          title: "游戏",
          list: [
            "促销游戏",
            "试玩游戏",
            "预售游戏",
            "动作",
            "射击",
            "策略",
            "角色扮演",
            "模拟",
            "独立",
            "查看所有游戏",
          ],
          url: "/gamelist",
        },
        { title: "社区", list: [], url: "/gamelist" },
        { title: "周边", list: [], url: "/gamelist" },
        { title: "头条", list: [], url: "/gamelist" },
        { title: "客户端", list: [], url: "/gamelist" },
        { title: "国际站", list: [], url: "/gamelist" },
      ],
      input: "",
      userEmail: null,
    };
  },
  mounted() {
    this.userEmail = localStorage.getItem("account") || "";
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  min-width: 1200px;
  position: fixed;
  z-index: 1000;
  background: #292e41;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 20px;
    margin-right: 50px;
    margin-left: 30px;
    color: #ddd;
  }
  .nav {
    display: flex;
    height: 100%;
    .hasmenu {
      position: relative;
      height: 100%;
      &:hover .menu {
        display: block;
      }
    }
    li {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0 25px;
      a {
        color: rgba($color: #fff, $alpha: 0.6);
        transition: 0.6s;
      }
      a:hover {
        color: rgba($color: #fff, $alpha: 1);
      }
      .menu {
        position: absolute;
        color: rgba($color: #fff, $alpha: 0.6);
        border: 1px solid rgba($color: #fff, $alpha: 0.5);
        border-radius: 5px;
        background: #292e41;
        top: 80px;
        z-index: 100;
        width: 200px;
        transform: translateX(-50px);
        display: none;
        &:hover {
          display: block;
        }
        li {
          padding: 10px 10px;
          width: 100%;
          cursor: pointer;
          &:hover {
            background: rgba($color: #ddd, $alpha: 0.1);
          }
        }
      }
    }
  }
  .search {
    display: flex;

    button {
      position: relative;
      right: 2px;
    }
  }
  .user {
    color: #ddd;
    cursor: pointer;
    a {
      color: rgba($color: #fff, $alpha: 0.6);
      transition: 0.6s;
      &:hover {
        color: rgba($color: #fff, $alpha: 1);
      }
    }
    margin-right: 80px;
    span {
      color: rgba($color: #fff, $alpha: 0.6);
      margin: 0 10px;
    }
    .cart {
      margin-left: 10px;
    }
  }
}
</style>
