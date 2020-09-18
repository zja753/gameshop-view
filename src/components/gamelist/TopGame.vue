<template>
  <div>
    <main>
      <div class="card" v-for="(item,index) in productList" :key="item+index">
        <img
          src="https://s1-rc.sonkwo.com/medium/910135728720663/file/57947/sonkwo-top-L-Bless-Unleashed.jpg?imageView2/2/w/170/h/100"
          alt
        />
        <div class="info">
          <div class="title">神佑 压力测试版ggggggggggggggggggg</div>
          <div class="detial">发行于 2020-07-28</div>
        </div>
        <span class="rank" :class="{first:index==0,second:index==1,third:index==2}">{{index+1}}</span>
      </div>
    </main>
  </div>
</template>
g
<script>
export default {
  name: "TopGame",
  data() {
    return {
      productList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  .card {
    width: 350px;
    height: 80px;
    background-color: rgb(51, 57, 77);
    color: rgba($color: #ddd, $alpha: 1);
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgba(51, 57, 77, 0.5);
    }
    img {
      // width: 100px;
      height: 100%;
      object-fit: cover;
    }
    .info {
      margin-left: 10px;
      // flex: 1;
      width: 140px;
      .title {
        height: 24px;
        font-size: 16px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
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
    }
    .rank {
      width: 40px;
      height: 40px;
      background: #7a80a2;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: #333;
      position: relative;
      margin: 0 10px;
    }
    .first {
      color: #fff;
      background: #ff6900;
    }
    .second {
      color: #fff;
      background: #8bc054;
    }
    .third {
      color: #fff;
      background: #2095f4;
    }
  }
}
</style>