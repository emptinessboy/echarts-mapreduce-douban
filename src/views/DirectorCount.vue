<template>
  <v-chart :options="bar" :auto-resize="true" />
</template>

<script>
import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title.js";
import "echarts/theme/fruit.js";
import axios from "axios";
export default {
  name: "DirectorCount",
  components: {
    "v-chart": ECharts
  },
  mounted() {
    let _this = this;
    axios
      .get("/ststic/director_count.json")
      .then(response => {
        console.log(response.data);
        _this.bar.yAxis.data = response.data.word;
        _this.bar.series[0].data = response.data.count;
      })
      .catch()
      .finally();
  },
  data() {
    return {
      bar: {
        title: {
          text: "导演作品排名",
          subtext: "入围TOP250作品少于2件的不显示"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["TOP250作品数量"]
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
          },
        },
        series: [
          {
            name: "TOP250作品数量",
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
