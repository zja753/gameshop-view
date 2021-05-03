<template>
  <div class="gamelist">
    <main>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </main>
  </div>
</template>

<script>
export default {
  name: "OrderInfo",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {},
  created() {
    this.getOrderInfo();
  },
  mounted() {},
  methods: {
    getOrderInfo() {},
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
  }
}
</style>