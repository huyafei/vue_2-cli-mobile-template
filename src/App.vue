<template>
  <router-view v-if="isRouterAlive" />
</template>
<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
  mounted() {},
};
</script>
<style lang="less">
#app {
  height: 100%;
  background: #5277ba;
  padding: 40px 10px 10px 10px;
  overflow: auto;
}
</style>
