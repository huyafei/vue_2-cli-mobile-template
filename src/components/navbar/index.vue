<!--
 * @name: index
 * @description: index.vue
 * @date: 2022/10/27 14:54
 * @author: yf_hu
-->
<template>
  <van-nav-bar
    v-bind="$attrs"
    v-on="$listeners"
    @click-left="onClickLeft"
    safe-area-inset-top
  >
    <template v-if="$slots.left" #left>
      <slot name="left"></slot>
    </template>
    <template v-if="$slots.title" #title>
      <slot name="title"></slot>
    </template>
    <template v-if="$slots.right" #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped></style>
