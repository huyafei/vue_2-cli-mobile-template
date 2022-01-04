<template>
  <div class="layout">
    <div class="main">
      <!--      <transition name="page-fade">-->
      <router-view></router-view>
      <!--      </transition>-->
    </div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  //计算属性
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  //keep-alive 组件激活时调用
  activated() {},
  //keep-alive 组件停用时调用。
  deactivated() {},
  //方法
  methods: {},
};
</script>
<style scoped lang="less">
.layout {
  height: 100%;
  .main {
    height: calc(100% - 50px);
  }
}
//.page-fade-enter {
//  transform: translateX(100%);
//  opacity: 0;
//}
//.page-fade-enter-active {
//  transition: all 1s ease;
//}
//.page-fade-enter-to {
//  transform: translateX(0%);
//  opacity: 1;
//}
//.page-fade-leave {
//  transform: translateX(0);
//  opacity: 1;
//}
//.page-fade-leave-active {
//  transition: all 1s ease;
//}
//.page-fade-leave-to {
//  transform: translateX(-100%);
//  opacity: 0;
//}
</style>
