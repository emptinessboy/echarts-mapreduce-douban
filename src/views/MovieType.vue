<template>
  <chart-pie
    v-if="this.loaded === true"
    :word="this.word"
    :count="this.count"
    title="受欢迎的电影类型统计"
    subtext="Top250电影分析"
    name="电影类型"
    theme="forest"
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
      .get("/ststic/type_count.json")
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
