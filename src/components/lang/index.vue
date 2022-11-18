<!--
 * @name: index
 * @description: index.vue
 * @date: 2022/10/31 15:40
 * @author: yf_hu
-->
<template>
  <div class="">
    <span @click="openPopop">{{ $i18n.locale }}</span>
    <van-popup
      v-model="isShow"
      position="bottom"
      get-container="body"
      :overlay="false"
    >
      <van-picker
        ref="picker_ref"
        :title="$t('global.lang')"
        show-toolbar
        :columns="languageList"
        @confirm="onConfirm"
        @cancel="
          () => {
            isShow = false;
          }
        "
      />
    </van-popup>
  </div>
</template>
<script>
import {
  getCurrentInstance,
  ref,
  reactive,
  computed,
  onMounted,
  nextTick,
  toRefs,
} from "vue";
import { Locale } from "vant";
import { messages } from "@/lang";

export default {
  name: "Lang",
  components: {},
  props: {},
  data() {
    return {
      isShow: false,
      languageList: Object.keys(messages),
    };
  },
  mounted() {},
  methods: {
    onConfirm(value) {
      this.$i18n.locale = value;
      this.$cookies.set("language", value);
      Locale.use(value, messages[value]);
      this.isShow = false;
    },
    openPopop() {
      const index = this.languageList.indexOf(this.$i18n.locale);
      this.isShow = true;
      this.$nextTick(() => {
        this.$refs.picker_ref.setIndexes([index]);
      });
    },
  },
};
</script>
<style scoped></style>
