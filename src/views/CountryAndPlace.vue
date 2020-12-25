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
  mounted() {
    let _this = this;
    axios
      .get("/static/country_count.json")
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
