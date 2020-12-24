<template>
  <chart-pie
    :word="this.word"
    :count="this.count"
    title="国家和地区数据统计"
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
      .get("/ststic/country_count.json")
      .then(response => {
        (this.load = true), console.log(response.data);
        _this.word = response.data[0];
        _this.count = response.data[1];
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
