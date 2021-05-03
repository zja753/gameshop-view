<template>
  <div class="userinfo">
    <main>
      <el-form :model="userInfo" label-width="100px">
        <el-form-item prop="email" label="邮箱:">
          {{ userInfo && userInfo.email }}
        </el-form-item>
        <el-form-item prop="email" label="昵称:">
          {{ userInfo && userInfo.nickName }}
        </el-form-item>
        <el-form-item prop="email" label="余额:">
          {{ userInfo && userInfo.balance }} 元
        </el-form-item>
        <el-form-item prop="orderList" label="订单:">
          <el-table :data="orderList" style="width: 100%">
            <el-table-column prop="_id" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="quantity" label="游戏数量" width="180">
            </el-table-column>
            <el-table-column prop="totle_price" label="总价格">
            </el-table-column>
            <el-table-column prop="status" label="订单状态">
              <template slot-scope="scope">
                {{ ["", "未支付", "已支付"][+scope.row.status] }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="toOrderInfo(scope.row)"
                  type="text"
                  size="small"
                  >查看详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<script>
export default {
  name: "OrderInfo",
  data() {
    return {
      userInfo: null,
      orderList: null,
    };
  },
  components: {},
  created() {
    this.getUserInfo();
    this.fetchOrderList();
  },
  mounted() {},
  methods: {
    getUserInfo() {
      this.$axios
        .get("user/getUserInfo", { _id: localStorage.getItem("user_id") })
        .then((res) => {
          const { data } = res;
          this.userInfo = data;
        });
    },
    fetchOrderList() {
      this.$axios
        .get("order/fetch", { user_id: localStorage.getItem("user_id") })
        .then((res) => {
          const { data } = res;
          this.orderList = data;
        });
    },
    toOrderInfo(data) {
      const { _id } = data;
      this.$router.push(`orderInfo/${_id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.userinfo {
  padding: 50px 0;
  main {
    width: 1200px;
    margin: auto;
    min-height: calc(100vh - 184px);
    background-color: #fff;
    padding-top: 30px;
  }
}
</style>
