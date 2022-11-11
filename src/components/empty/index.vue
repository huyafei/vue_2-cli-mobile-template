<!--
 * @name: index
 * @description：index.vue
 * @date: 2022/10/27 12:46
 * @author: yf_hu
-->
<template>
  <div class="empty">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>
<script>
export default {
  name: "Empty",
  props: {
    text: {
      type: String,
      default: "暂无数据",
    },
  },
};
</script>
<style scoped>
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 14px;
}
</style>
