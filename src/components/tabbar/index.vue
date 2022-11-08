<template>
  <van-tabbar
    v-model="tabbarIndex"
    active-color="#1989fa"
    safe-area-inset-bottom
  >
    <template v-for="item in tabbarList">
      <van-tabbar-item :key="item.to" :icon="item.icon" :to="item.to">{{
        item.text
      }}</van-tabbar-item>
    </template>
  </van-tabbar>
</template>
<script>
export default {
  name: "Tabbar",
  components: {},
  props: {},
  data() {
    return {
      tabbarIndex: 0,
      tabbarList: [
        {
          icon: "home-o",
          text: "首页",
          to: "/home/index",
        },
        {
          icon: "flag-o",
          text: "分类",
          to: "/classify/index",
        },
        {
          icon: "friends-o",
          text: "购物车",
          to: "/cart/index",
        },
        {
          icon: "user-o",
          text: "我的",
          to: "/my/index",
        },
      ],
    };
  },
  watch: {
    $route: function () {
      this.setTabbarIndex();
    },
  },
  mounted() {
    this.setTabbarIndex();
  },
  methods: {
    setTabbarIndex() {
      this.tabbarIndex = this.tabbarList.findIndex(
        (item) => item.to === this.$route.path
      );
    },
  },
};
</script>
<style scoped lang="less"></style>
