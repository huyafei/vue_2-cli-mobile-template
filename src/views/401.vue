<template>
  <div class="main error flex-c">
    <div class="error__content flex-1">用户无权限，不能使用当前应用</div>
  </div>
</template>
<script>
export default {
  name: "Page401",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="less">
.error {
  color: #fff;
  background: #5277ba;
  /deep/ .nav-bar {
    .back {
      i {
        color: #fff;
      }
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
