<template>
  <v-chart :options="polar" :auto-resize="true" />
</template>

<script>
import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/pie";
import "echarts/lib/component/polar";
import "echarts/lib/component/legend";
import "echarts/lib/component/title.js";
import axios from "axios";

export default {
  name: "CharPie",
  props: ["word", "count", "name", "title", "subtext"],
  components: {
    "v-chart": ECharts
  },
  mounted() {
  },
  data() {
    return {
      polar: {
        title: {
          text: "国家和地区数据统计",
          subtext: "动态数据",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          show: true,
          orient: "vertical",
          left: "left",
          data: this.word
        },
        series: [
          {
            name: "拍摄国家 / 地区",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.count,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
