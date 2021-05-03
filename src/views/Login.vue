<template>
  <div class="login" :style="note">
    <div class="card">
      <h2>用户登录</h2>
      <div class="row">
        <input type="text" v-model="params.email" placeholder="邮箱" />
      </div>
      <div class="row">
        <input type="password" v-model="params.password" placeholder="密码" />
      </div>
      <div class="row">
        <button @click="handleLogin">登录</button>
      </div>
      <div class="row">
        <div>
          <input type="checkbox" />
          <label>记住密码</label>
        </div>

        <div>
          <span>忘记密码</span>
          <span>|</span>
          <span><router-link to="/register">注册</router-link></span>
        </div>
      </div>
      <div class="bottom">
        <h3>第三方登录</h3>
        <div class="icons">
          <ul>
            <li v-for="(item,index) in iconList" :key="index">
              <a href>
                <img :src="item" alt class="svg-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      params: { email: "", password: "" },
      note: {
        backgroundImage: "url(" + require("@/assets/img/p1.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      iconList: [
        require("@/assets/img/bilibili.svg"),
        require("@/assets/img/微博.svg"),
        require("@/assets/img/qq.svg"),
        require("@/assets/img/微信.svg"),
        require("@/assets/img/github.svg"),
      ],
    };
  },
  methods: {
    handleLogin() {
      this.$axios.post("/user/login", this.params).then((res) => {
        if (res.status == 1) {
          console.log(res);
          res.data.Authorization = res.data.token;
          res.data.account = res.data.email;
          this.$store.commit("changeLogin", res.data);
          this.$router.push("/");
        } else {
          this.$message({
            message: res.err,
            type: "warning",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  position: relative;
  .card {
    background: #292e42;
    width: 340px;
    height: 400px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid rgba($color: #ddd, $alpha: 0.1);
    position: absolute;
    right: 100px;
    top: 100px;
    display: flex;
    flex-direction: column;
    h2 {
      color: #adc1f4;
    }
    button {
      width: 100%;
      background: #eb6100;
      border-radius: 5px;
      color: #fff;
      text-align: center;
      padding: 10px 20px;
      cursor: pointer;
      transition: 0.6s;
      &:focus {
        outline: none;
      }
      &:hover {
        background: #fd79a8;
      }
    }
    input {
      width: 100%;
      height: 80%;
      background: #202539;
      color: #ddd;
      border: 0px;
      border-radius: 5px;
      overflow: hidden;
      padding: 5px;
      // margin: 5px 10px;
    }
    .row {
      height: 40px;
      padding: 0 10px;
      margin: 5px 0;
      display: flex;
      align-items: center;
      &:nth-child(5) {
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
        }
        input {
          width: 16px;
          height: 16px;
        }
        label {
          color: #adc1f4;
        }
        span {
          color: #eb6100;
          margin-right: 5px;
          &:not(:nth-child(2)) {
            cursor: pointer;
            &:hover {
              color: #fd79a8;
            }
          }
        }
      }
    }
    .bottom {
      flex: 1;
      overflow: hidden;
      padding-top: 30px;
      h3 {
        color: #adc1f4;
        font-size: 16px;
        text-align: center;
      }
      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
          display: flex;
          list-style: none;
        }

        ul li {
          margin: 10px;
        }

        li a {
          position: relative;
          display: block;
          color: white;
          width: 32px;
          height: 32px;
          font-size: 18px;
          text-align: center;
          line-height: 33px;
          border-radius: 50%;
          background: #292e42;
          transition: 0.6s;
          img {
            width: 100%;
          }
        }

        li a:hover {
          text-shadow: 0 0 4px #25ccf7;
        }

        li a::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 50%;
          background: #25ccf7;
          transition: 0.6s;
          transform: scale(0.8);
          z-index: -1;
        }

        li a:hover::before {
          box-shadow: 0 0 14px 2px #25ccf7;
          transform: scale(1.05);
        }

        /* bilibili */
        .svg-icon {
          transition: 0.6s;
          filter: invert(1);
        }

        li a:hover .svg-icon {
          filter: invert(1) drop-shadow(0 0 2px rgb(37, 204, 247));
        }

        @media screen and (max-width: 512px) {
          ul {
            flex-direction: column;
          }

          ul li {
            margin: 18px 0;
          }
        }
      }
    }
  }
}
</style>