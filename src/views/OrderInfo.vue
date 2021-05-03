<template>
  <div class="gamelist">
    <main>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="group_name" label="游戏分组" width="180">
        </el-table-column>
        <el-table-column prop="name" label="游戏名" width="180">
        </el-table-column>
        <el-table-column prop="brief_introduction" label="简介">
        </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column prop="is_dlc" label="是否DLC">
          <template slot-scope="scope">
            {{ scope.row.is_dlc ? "是" : "否" }}
          </template>
        </el-table-column>
      </el-table>

      <div class="fooer">
        游戏总数:{{ this.order && this.order.quantity }} 总价格:{{
          this.order && this.order.totle_price
        }}元
        <el-button
          class="buyBtn"
          type="success"
          round
          @click="payOrder"
          v-if="order && +order.status === 1"
        >
          支付订单
        </el-button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "OrderInfo",
  data() {
    return {
      tableData: [],
      order: null,
    };
  },
  components: {},
  created() {
    this.order_id = this.$route.params.id;
    this.getOrderInfo();
  },
  mounted() {},
  methods: {
    getOrderInfo() {
      this.$axios.get("order/get", { _id: this.order_id }).then((res) => {
        const { data } = res;
        this.tableData = data.productList;
        this.order = data;
      });
    },
    payOrder() {
      //   console.log(this.order_id);
      this.$axios.post("order/pay", { order_id: this.order_id }).then((res) => {
        if (res.status === 1) {
          this.$message({
            message: res.msg,
            type: "success",
          });
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

<style lang="scss" scoped>
.gamelist {
  // height: 2000px;
  padding: 50px 0;
  main {
    width: 1200px;
    margin: auto;
    min-height: calc(100vh - 184px);

    .fooer {
      width: 100%;
      height: 50px;
      color: #fff;
      font-size: 22px;
      text-align: right;
      line-height: 50px;

      .buyBtn {
        margin-left: 20px;
      }
    }
  }
}
</style>
