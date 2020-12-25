<template>
  <v-chart :options="line" :auto-resize="true" />
</template>

<script>
import ECharts from "vue-echarts"; // 在 webpack 环境下指向 components/ECharts.vue
// 按需引入 ECharts
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import axios from "axios";

export default {
  name: "ChartBar",
  components: {
    "v-chart": ECharts
  },
  created() {
    this.$notify({
      title: "TIPS",
      message:
        "对近三十年（1990-2019）每年，每季度，入围 TOP250 作品进行统计并求和。",
      duration: 8500,
      offset: 60
    });
  },
  mounted() {
    let _this = this;
    axios
      .get("./static/year_count.json")
      .then(response => {
        console.log(response.data);
        _this.line.series[0].data = response.data.A;
        _this.line.series[1].data = response.data.B;
        _this.line.series[2].data = response.data.C;
        _this.line.series[3].data = response.data.D;
      })
      .catch()
      .finally();
  },
  data() {
    return {
      line: {
        title: {
          text: "近30年中，每年（每季度）产出高质量电影数目"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["第一季度", "第二季度", "第三季度", "第四季度"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "第一季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: []
          },
          {
            name: "第二季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: []
          },
          {
            name: "第三季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: []
          },
          {
            name: "第四季度",
            type: "line",
            stack: "总量",
            areaStyle: {},
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
