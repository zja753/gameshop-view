<template>
  <div class="gameinfo">
    <div class="info">
      <p>{{ gameInfo.brief_introduction }}</p>
      <span v-for="(item, index) in tagList" :key="index">{{ item }}</span>
    </div>

    <div class="bottom">
      <div class="price">
        <span>￥{{ gameInfo.discount }}</span>
        <span v-if="gameInfo.discount !== gameInfo.price">
          ￥{{ gameInfo.price }}
        </span>
        <span v-if="gameInfo.discount !== gameInfo.price">
          -30%
          <i class="el-icon-sort-down"></i>
        </span>
      </div>
      <div class="btn">
        <button class="add" @click="addCart">
          <i class="el-icon-s-shop"></i>加入购物车
        </button>
        <button class="buy" @click="buy">立即购买</button>
      </div>
      <div class="wish">
        <span>
          <i>
            <img :src="heart[0]" alt />
          </i>
          加入心愿单
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameInfo",
  data() {
    return {
      tagList: [],
      heart: [
        require("@/assets/img/爱心2.svg"),
        require("@/assets/img/爱心.svg"),
      ],
    };
  },
  props: {
    gameInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
  mounted() {
    this.tagList = this.gameInfo.tagList.slice(0, 5);
  },
  methods: {
    addCart() {
      // console.log(this.gameInfo._id,localStorage.getItem('user_id'));
      this.$axios
        .post("/cart/add", {
          product_id: this.gameInfo._id,
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          console.log(res);
        });
    },
    buy() {
      this.$axios
        .post("/order/create", {
          orderItemList: [{ product_id: this.gameInfo._id, quantity: 1 }],
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.gameinfo {
  background: #32394c;
  height: 460px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .info {
    flex: 1;
    p {
      color: #777991;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 10;
      -webkit-box-orient: vertical;
      margin-bottom: 20px;
    }
    span {
      color: #ddd;
      margin-right: 10px;
      padding: 5px;
      font-size: 13px;
      background: #292e41;
      border-radius: 3px;
    }
  }
  .bottom {
    // height: 10px;
    div {
      margin-bottom: 10px;
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      span {
        &:nth-child(1) {
          font-size: 30px;
          color: #eb6100;
        }
        &:nth-child(2) {
          font-size: 18px;
          text-decoration: line-through;
          color: #777991;
        }
        &:nth-child(3) {
          font-size: 18px;
          color: #eb6100;
          background: #202539;
          padding: 2px 5px;
          border-radius: 5px;
          padding: 5px;
        }
      }
    }
    .btn {
      button {
        padding: 5px 0;
        color: #fff;
        border-radius: 5px;
        margin-right: 10px;
        font-size: 18px;
        width: 120px;
        height: 50px;
        cursor: pointer;
        transition: 0.6s;
        &:hover {
          background: #fd79a8;
        }
      }
      .add {
        background: #eb6100;
      }
      .buy {
        background: #508bf3;
      }
    }
    .wish {
      color: #777991;
      span {
        font-size: 14px;
        img {
          width: 14px;
          height: 14px;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>