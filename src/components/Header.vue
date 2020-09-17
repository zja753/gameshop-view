<template>
  <div class="header">
    <div class="logo">小杉果</div>
    <div class="nav">
      <li v-for="(item,index) in navList" :key="index">
        {{item.title}}
        <i v-if="index==1" class="el-icon-arrow-down"></i>
      </li>
    </div>
    <div class="search">
      <el-input v-model="input" placeholder="请输入关键词" size="small"></el-input>
      <el-button icon="el-icon-search" size="small"></el-button>
    </div>
    <div class="user">
      <span class="login">登录</span>
      <span>|</span>
      <span class="register">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navList: [
        { title: "首页", list: [] },
        { title: "游戏", list: ["1", "2", "3", "4", "5", "6"] },
        { title: "社区", list: [] },
        { title: "周边", list: [] },
        { title: "头条", list: [] },
        { title: "客户端", list: [] },
        { title: "国际站", list: [] },
      ],
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #292e41;
  height: 80px;
  min-width: 1200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 20px;
    margin-right: 50px;
  }
  .nav {
    display: flex;
    li {
      list-style: none;
      margin-right: 50px;
      cursor: pointer;
      color: rgba($color: #fff, $alpha: 0.6);
      transition: 0.6s;
      i {
        position: relative;
        right: 5px;
      }
      &:hover {
        color: rgba($color: #fff, $alpha: 1);
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
    color: rgba($color: #fff, $alpha: 0.6);
    transition: 0.6s;
    margin-right: 80px;
    span {
      margin-right: 10px;
    }
    span:not(:nth-child(2)) {
      cursor: pointer;
      &:hover {
        color: rgba($color: #fff, $alpha: 1);
      }
    }
  }
}
</style>