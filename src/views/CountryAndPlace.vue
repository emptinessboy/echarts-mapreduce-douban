<template>
  <chart-pie
    v-if="this.loaded === true"
    :word="this.word"
    :count="this.count"
    title="国家和地区数据统计"
    subtext="Top250电影分析"
    name="拍摄国家 / 地区"
  ></chart-pie>
</template>

<script>
import axios from "axios";
import ChartPie from "@/components/ChartPie";

export default {
  name: "CountryAndPlace",
  components: {
    "chart-pie": ChartPie
  },
  created() {
    this.$notify({
      title: "TIPS",
      message:
        "这是基于来自 TOP250电影的国家和地区信息统计（如果一个电影有多个国家地区，则每个地区都按照权重 1 进行统计）",
      duration: 8500,
      offset: 60
    });
  },
  mounted() {
    let _this = this;
    axios
      .get("./static/country_count.json")
      .then(response => {
        console.log(response.data);
        _this.word = response.data[0];
        _this.count = response.data[1];
        _this.loaded = true;
      })
      .catch()
      .finally();
  },
  data() {
    return {
      loaded: false,
      word: [],
      count: []
    };
  }
};
</script>

<style></style>
