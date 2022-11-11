<template>
  <div class="layout">
    <div class="main">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </div>
    <VenTabbar></VenTabbar>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
  computed: {
    cachedViews() {
      return this.$store.state.router.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route() {
      this.addCachedViews();
    },
  },
  mounted() {
    this.addCachedViews();
  },
  methods: {
    addCachedViews() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("router/addCachedViews", this.$route);
      }
    },
  },
};
</script>

<style scoped lang="less">
.layout {
  height: 100%;

  & > .main {
    height: calc(100% - 50px);
  }
}
</style>
