<template>
  <div class="introduction">
    <h2>游戏介绍</h2>
    <!-- <img
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/757320/extras/atomicropsHeaderSteamB.png"
      alt
    />-->
    <h3>关键特性</h3>
    <!-- <img
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/757320/extras/atomicropsFarmingSteam2.gif"
      alt
    />-->
    <p>耕种。种植变异的庄稼并获得大丰收来维持人类社会的生存……同时大赚一笔。</p>
    <!-- <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/757320/extras/3.gif" alt /> -->
    <p>结婚。从当地小镇那找到意中人并求爱和结婚，来找个陪伴你战斗和耕种的对象。</p>
    <!-- <img
      src="https://cdn.cloudflare.steamstatic.com/steam/apps/757320/extras/atomicropsCombatSteam.gif"
      alt
    />-->
    <p>杀戮。与怪异的核爆后害虫战斗，它们在夜晚会对庄稼垂涎三尺。白天的时候，在周围危险的生物群落狩猎并觅食，以寻找种子和战利品。把敌人们变成肥料来提升庄稼的质量。</p>
    <!-- <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/757320/extras/2_(2).gif" alt /> -->
    <p>升级。探索生物群落的边缘区域来寻找久远以前农场留下的有用遗物。找到生锈的农具、古老的园艺工具，还有大部头的园艺指南，提升耕种能力。把钱花在小镇上，升级枪支和能力。对你的农舍进行永久升级以获取在游戏进程中持续存在的奖励。</p>
    <!-- <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/757320/extras/1.gif" alt /> -->
    <p>成为朋友。招募猪伙伴、鸡密友和牛同事作为助手来自动完成务农任务。耕种原子庄稼是一项艰巨的任务，你需要尽可能多的帮助。竞争。撑过更加艰难的年份，解锁得分倍数，成为冠军农夫，跻身积分榜顶端。</p>
    <p>厌倦了现代的城市生活？正好，你刚刚继承了叔叔的农场，带上行李，去宁静祥和的农村开始新的生活吧。能出什么事情？也就是核爆末日吧。你现在身处一片废土之中，必须保卫赖以生存的唯一食物来源：农作物。所有变种生物都想抢夺你的作物，你必须像合格的农民那样：种地、结婚、杀敌。</p>
    <p>《Atomicrops》是一款动作类种植模拟轻度Rogue游戏。你必须扛起锄头，拎起水桶，拿起简简单单的豌豆枪，播种变异的「原子作物」，为小镇提供食物……然后狠狠地赚上一笔。变种怪物和强盗会在夜间入侵农场，糟蹋你的田地，你一定要保护好自己的土地。追求镇上的居民，跟他们结婚，一同保卫和经营你们的农场。收集升级物品，营救被抢的动物，以此提升生产效率、利润和力量。农场发展到一定的程度，可以获得永久加成，能够增加此后每次游戏的分数，从而提升你在积分榜上的名次。</p>
  </div>
</template>
<script>
export default {
  name: "GameIntroduction",
};
</script>

<style lang="scss" scoped>
.introduction {
  margin-top: 20px;
  background: #32394c;
  padding: 10px;
  color: #a7acdc;
  height: 350px;
  overflow: hidden;
  h2 {
    font-weight: 2000;
    margin: 20px 0;
  }
  img {
    width: 520px;
    margin: 20px 0;
  }
  p {
    color: #b7bdec;
    margin: 20px 0;
  }
}
</style>