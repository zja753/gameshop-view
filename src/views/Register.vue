<template>
  <div class="register">
    <div class="regbox">
      <h2>邮箱注册</h2>

      <div class="row">
        <span>邮箱</span>
        <input
          type="text"
          v-model="email"
          @focus="handleFocus"
          @blur="handleBlur"
          placeholder="请输入邮箱"
          alt="邮箱"
        />
        <div class="tips"></div>
      </div>
      <div class="row">
        <span>邮箱验证码</span>
        <input type="text" placeholder="请输入邮箱验证码" />
        <button>获取邮箱验证码</button>
        <div class="tips"></div>
      </div>
      <div class="row">
        <span>密码</span>
        <input
          type="password"
          v-model="password"
          name
          id
          placeholder="请输入密码"
          @focus="handleFocus"
          @blur="handleBlur"
          alt="密码"
        />
        <div class="tips"></div>
      </div>
      <div class="row">
        <span>确认密码</span>
        <input
          type="password"
          v-model="repass"
          name
          id
          placeholder="请再次填写密码"
          @focus="handleFocus"
          @blur="handleBlur"
          alt="密码确认"
        />
        <div class="tips"></div>
      </div>
      <div class="row">
        <input type="checkbox" name id="che" />

        <label>
          同意
          <b>《杉果游戏服务协议》</b>和
          <b>《杉果隐私协议》</b>
        </label>
      </div>
      <div class="row">
        <button @click="handleRegister">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repass: "",
    };
  },
  watch: {
    email() {
      let msg = "<i class='el-icon-warning'></i>请输入正确的邮箱";
      this.emailCheck(msg);
    },
    password() {
      let msg = "<i class='el-icon-warning'></i>8-20位的数字、字母或符号";
      this.passCheck(msg);
    },
    repass() {
      let msg = "<i class='el-icon-warning'></i>请再次输入密码";
      this.repassCheck(msg);
    },
  },
  methods: {
    handleFocus(event) {
      let msg = "";
      if (event.target.alt == "邮箱") {
        msg = "<i class='el-icon-warning'></i>请输入正确的邮箱";
        this.emailCheck(msg);
      }

      if (event.target.alt == "密码") {
        msg = "<i class='el-icon-warning'></i>8-20位的数字、字母或符号";
        this.passCheck(msg);
      }

      if (event.target.alt == "密码确认") {
        msg = "<i class='el-icon-warning'></i>请再次输入密码";
        this.repassCheck(msg);
      }
    },
    handleBlur() {
      let d1 = "";
      if (event.target.alt == "邮箱") {
        d1 = document.getElementsByClassName("tips")[0];
        let res = this.emailCheck();
        if (res) d1.innerHTML = "";
        else {
          d1.innerHTML = "<i class='el-icon-error'></i>请输入正确的邮箱";
          d1.classList.add("error");
        }
      }

      if (event.target.alt == "密码") {
        d1 = document.getElementsByClassName("tips")[2];
        let res = this.passCheck();
        if (res) d1.innerHTML = "";
        else {
          d1.innerHTML =
            "<i class='el-icon-error'></i>8-20位的数字、字母或符号";
          d1.classList.add("error");
        }
      }

      if (event.target.alt == "密码确认") {
        let res = this.repassCheck();
        d1 = document.getElementsByClassName("tips")[3];
        if (res) d1.innerHTML = "";
        else {
          d1.classList.add("error");
          d1.innerHTML = "<i class='el-icon-error'></i>两次密码不一致";
        }
      }
    },
    handleRegister() {
      if (!this.emailCheck()) {
        this.$message({
          message: "邮箱不正确!!!",
          type: "warning",
        });
        return;
      }
      if (!this.passCheck()) {
        this.$message({
          message: "请输入8-20位的密码!!!",
          type: "warning",
        });
        return;
      }
      if (!this.repassCheck()) {
        this.$message({
          message: "两次密码不一致!!!",
          type: "warning",
        });
        return;
      }
      let d = document.getElementById("che");
      if (!d.checked) {
        this.$message({
          message: "请勾选条件!!!",
          type: "warning",
        });
        return;
      }
    },
    emailCheck(msg) {
      let reg = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      let d1 = document.getElementsByClassName("tips")[0];
      d1.classList.remove("error");
      if (reg.test(this.email)) {
        d1.innerHTML = "";
        d1.classList.remove("error");
        return true;
      } else {
        d1.innerHTML = msg;
        return false;
      }
    },
    passCheck(msg) {
      let d1 = document.getElementsByClassName("tips")[2];
      d1.classList.remove("error");
      if (this.password.length < 8 || this.password.length > 20) {
        d1.innerHTML = msg;
        return false;
      } else {
        d1.innerHTML = "";
        d1.classList.remove("error");
        return true;
      }
    },
    repassCheck(msg) {
      let d1 = document.getElementsByClassName("tips")[3];
      d1.classList.remove("error");
      if (this.password === this.repass && this.repass !== "") {
        d1.innerHTML = "";
        d1.classList.remove("error");
        return true;
      } else {
        d1.innerHTML = msg;
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  padding-bottom: 50px;
  span {
    color: #adc1f4;
    font-size: 20px;
    position: absolute;
    transform: translateX(-100%);
    height: 50px;
    line-height: 50px;
  }
  button {
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
    font-size: 18px;
    border: 0px;
    border-radius: 5px;
    overflow: hidden;
    padding: 5px;
    margin: 5px 10px;
  }
  .regbox {
    width: 1200px;
    margin: auto;
    border: 1px solid rgba($color: #ddd, $alpha: 0.1);
    background: #292e42;
    height: 100%;
    padding: 50px 150px;
    h2 {
      color: #adc1f4;
      text-align: center;
      border-bottom: 1px solid rgba($color: #ddd, $alpha: 0.4);
      padding: 10px 0;
    }
    .row {
      margin: 30px 200px;
      position: relative;
      height: 50px;
      display: flex;
      align-items: center;
      &:nth-of-type(2) {
        button {
          width: 200px;
        }
      }
      &:nth-of-type(5) {
        input {
          width: 15px;
          height: 15px;
        }
        label {
          font-size: 14px;
          b {
            color: #eb6100;
            cursor: pointer;
          }
        }
      }
      &:nth-of-type(6) {
        button {
          width: 100%;
        }
      }
      .tips {
        width: 200px;
        height: 50px;
        position: absolute;
        left: 500px;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #adc1f4;
        &.error {
          color: #bb4651;
        }
      }
    }
  }
}
</style>