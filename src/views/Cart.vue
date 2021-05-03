<template>
  <div class="gamelist">
    <main>
      <el-table
        :data="cartItemList"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="group_name" label="游戏分组" width="180">
        </el-table-column>
        <el-table-column prop="name" label="游戏名" width="180">
        </el-table-column>
        <el-table-column prop="brief_introduction" label="简介">
        </el-table-column>
        <el-table-column prop="price" label="价格">
          <template slot-scope="scope"> {{ scope.row.price }} 元 </template>
        </el-table-column>
        <el-table-column prop="is_dlc" label="是否DLC">
          <template slot-scope="scope">
            {{ scope.row.is_dlc ? "是" : "否" }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-popconfirm
              title="这是一段内容确定删除吗？"
              @confirm="deleteItem(scope.row)"
            >
              <el-button slot="reference" type="danger" size="small"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <div class="fooer">
        游戏总数:{{ quantity }} 总价格:{{ totle_price }}元
        <el-button
          class="buyBtn"
          type="success"
          round
          @click="buy"
          :disabled="!chooseProductIdList || chooseProductIdList.length === 0"
        >
          购买
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
      cartItemList: [],
      chooseProductIdList: [],
    };
  },
  components: {},
  created() {
    this.order_id = this.$route.params.id;
    this.fetchCart();
  },
  mounted() {},
  methods: {
    fetchCart() {
      this.$axios
        .post("cart/fetchCart", { user_id: localStorage.getItem("user_id") })
        .then((res) => {
          const { data } = res;
          this.cartItemList = Array.from(data);
        });
    },
    deleteItem(data) {
      //   console.log(data);
      this.$axios
        .post("cart/delete", {
          user_id: localStorage.getItem("user_id"),
          product_id_list: [data._id],
        })
        .then((res) => {
          const { msg } = res;
          this.$message({
            message: msg,
            type: "success",
          });
          this.fetchCart();
        });
    },
    handleSelectionChange(data) {
      //   console.log(data);
      this.chooseProductIdList = data.map((item) => item._id);
    },
    async buy() {
      let confirm = false;
      await this.$confirm("确认购买选中游戏吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          confirm = true;
        })
        .catch(() => {});
      if (!confirm) return;

      const { data: order } = await this.$axios.post("order/create", {
        user_id: localStorage.getItem("user_id"),
        orderItemList: this.chooseProductIdList.map((item) => ({
          product_id: item,
          quantity: 1,
        })),
      });

      await this.$axios.post("cart/delete", {
        user_id: localStorage.getItem("user_id"),
        product_id_list: this.chooseProductIdList,
      });

      this.$router.push(`/orderInfo/${order._id}`);
    },
  },
  computed: {
    quantity() {
      return (this.chooseProductIdList && this.chooseProductIdList.length) || 0;
    },
    totle_price() {
      return this.cartItemList
        .filter((item) => this.chooseProductIdList.includes(item._id))
        .reduce((total, item) => total + parseFloat(item.price), 0);
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
