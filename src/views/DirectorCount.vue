<template>
  <e-bar
    v-if="this.loaded === true"
    :word="this.word"
    :count="this.count"
    name="TOP250作品数量"
    title="导演作品排名"
    subtext="入围TOP250作品少于2件的不显示"
  ></e-bar>
  <!--  <v-chart :options="bar" :auto-resize="true" />-->
</template>

<script>
import axios from "axios";
import ChartBar from "@/components/ChartBar";
export default {
  name: "DirectorCount",
  components: {
    "e-bar": ChartBar
  },
  mounted() {
    let _this = this;
    axios
      .get("/ststic/director_count.json")
      .then(response => {
        console.log(response.data);
        _this.word = response.data.word;
        _this.count = response.data.count;
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

<style>
.echarts.style {
  width: 100%;
  height: 100%;
}
</style>
