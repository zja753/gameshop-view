<template>
  <div class="gameList">
    <div class="main">
      <header>
        <h2>全部游戏</h2>
        <div class="menu">
          <span class="active">畅销</span>
          <span>折扣</span>
          <span>最新</span>
          <span>评分</span>
          <span>人气</span>
          <span>价格</span>
        </div>
      </header>
      <div class="content">
        <main>
          <div class="card" v-for="(item,index) in productList" :key="item+index">
            <img
              src="https://s1-rc.sonkwo.com/medium/910135728720663/file/57947/sonkwo-top-L-Bless-Unleashed.jpg?imageView2/2/w/170/h/100"
              alt
            />
            <div class="info">
              <div class="title">
                神佑 压力测试版
                <span class="badge_ys">预售</span>
                <span class="badge_gjz">国际站</span>
              </div>
              <div class="detial">
                发行于 2020-07-28
                <span>￥163.00</span>
              </div>
              <div class="iconGroup">
                <span>多人</span>
                <span>角色扮演</span>
                <span>动作</span>
              </div>
            </div>
          </div>
        </main>
        <aside>
          <div class="searchCard" v-for="item in searchGroupList" :key="item">
            <header>{{item}}</header>
            <el-checkbox-group class="checkboxGroup" v-model="search.region">
              <el-checkbox class="checkboxGroupItem" label="复选框 A"></el-checkbox>
              <el-checkbox class="checkboxGroupItem" label="复选框 B"></el-checkbox>
              <el-checkbox class="checkboxGroupItem" label="复选框 C"></el-checkbox>
              <el-checkbox class="checkboxGroupItem" label="复选框 D"></el-checkbox>
              <el-checkbox class="checkboxGroupItem" label="复选框 E"></el-checkbox>
              <el-checkbox class="checkboxGroupItem" label="复选框 F"></el-checkbox>
            </el-checkbox-group>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: { region: [] },
      productList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      searchGroupList: [
        "按地区",
        "按类型",
        "热门标签",
        "按语言",
        "按价格",
        "按类别",
      ],
    };
  },
};
</script>

<style lang='scss' scope>
.gameList {
  background-color: #202539;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: #b9c0ef;
  .main {
    width: 1200px;
    header {
      h2 {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        font-weight: 500;
      }
      .menu {
        height: 45px;
        display: flex;
        color: #7a80a2;

        span {
          font-size: 14px;
          line-height: 45px;
          margin-right: 50px;
          cursor: pointer;

          &:hover {
            color: #9298be;
            font-weight: bold;
          }
          &.active {
            color: #9298be;
            font-weight: bold;
          }
        }
      }
    }
    .content {
      width: 100%;
      display: flex;

      main {
        .card {
          width: 830px;
          height: 100px;
          background-color: rgb(51, 57, 77);
          display: flex;
          align-items: center;
          border-radius: 5px;
          margin-bottom: 10px;
          cursor: pointer;
          &:hover {
            background-color: rgba(51, 57, 77, 0.5);
          }

          .info {
            margin-left: 20px;
            flex: 1;
            .title {
              height: 24px;
              font-size: 16px;
              font-weight: 600;

              span {
                font-size: 12px;
                border-radius: 2px;
                color: white;
                font-weight: 400;

                &.badge_ys {
                  padding: 0 4px;
                  background-color: rgb(138, 195, 73);
                }
                &.badge_gjz {
                  padding: 0 4px;
                  background-color: #3178f5;
                }
              }
            }
            .detial {
              width: 100%;
              height: 18px;
              font-size: 12px;
              color: #7a80a2;
              margin-top: 6px;
              display: flex;

              span {
                margin-left: auto;
                padding-right: 20px;
                color: #eb6100;
                font-size: 16px;
                font-weight: bold;
              }
            }
            .iconGroup {
              height: 18px;
              font-size: 12px;
              color: #7a80a2;
              margin-top: 6px;

              span {
                border: 1px solid #7a80a2;
                border-radius: 2px;
                padding: 0 2px;
                margin-right: 5px;
              }
            }
          }
        }
      }
      aside {
        margin-left: auto;

        .searchCard {
          width: 350px;
          header {
            width: 100%;
            height: 45px;
            line-height: 45px;
            background: #292e41;
            font-size: 14px;
            color: #7a80a2;
            text-indent: 20px;
          }
          .checkboxGroup {
            background-color: rgb(51, 57, 77);
            padding: 10px 0;

            .checkboxGroupItem {
              width: 50%;
              height: 30px;
              line-height: 30px;
              margin: 0;
              padding-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>