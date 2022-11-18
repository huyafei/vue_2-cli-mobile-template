<!--
 * @name: index
 * @description: index.vue
 * @date: 2022/10/27 9:34
 * @author: yf_hu
-->
<template>
  <div class="chart-box" :style="{ width: width, height: height }">
    <div v-if="isShowChart" ref="chartRef" class="chart"></div>
    <VenEmpty v-else class="empty"></VenEmpty>
  </div>
</template>
<script>
export default {
  name: "Chart",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "260px",
    },
    colors: {
      type: Array,
      default: () => [
        "#9E87FF",
        "#FDD56A",
        "#FDB36A",
        "#FD866A",
        "#1890FF",
        "#13C2C2",
        "#2FC25B",
        "#FACC14",
        "#F04864",
        "#8543E0",
        "#3436C7",
        "#223273",
      ],
    },
  },
  data() {
    return {
      myChart: null,
      isShowChart: false,
    };
  },
  mounted() {
    if (this.option.series?.length && this.option.series[0].data?.length) {
      this.isShowChart = true;
      this.$nextTick(() => {
        this.initChart();
      });
    } else {
      this.isShowChart = false;
    }
    window.addEventListener("resize", this.onResize, false);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize, false);
  },
  methods: {
    initChart() {
      this.myChart = this.$echarts.init(this.$refs.chartRef);

      const option = {
        color: this.colors,
        ...this.option,
      };
      this.myChart.setOption(option);
    },
    onResize() {
      if (this.myChart) this.myChart.resize();
    },
  },
};
</script>
<style scoped>
.chart,
.empty {
  width: 100%;
  height: 100%;
}
</style>
