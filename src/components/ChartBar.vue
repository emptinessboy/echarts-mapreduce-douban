<template>
  <v-chart :options="bar" :auto-resize="true" :theme="this.theme" />
</template>

<script>
import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title.js";
import "echarts/theme/blue.js";
export default {
  name: "ChartBar",
  props: ["word", "count", "name", "title", "subtext", "theme"],
  components: {
    "v-chart": ECharts
  },
  mounted() {
    console.log(this.word);
    console.log(this.count);
    this.bar.yAxis.data = this.word;
    this.bar.series[0].data = this.count;
  },
  data() {
    return {
      bar: {
        title: {
          text: this.title,
          subtext: this.subtext
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: this.name
        },
        grid: {
          left: "0",
          right: "4%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: [],
          axisLabel: {
            interval: 0,
            rotate: 30
          }
        },
        series: [
          {
            name: this.name,
            type: "bar",
            data: []
          }
        ]
      }
    };
  }
};
</script>

<style>
.echarts.style {
  width: 100%;
  height: 100%;
}
</style>
