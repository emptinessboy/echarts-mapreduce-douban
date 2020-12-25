<template>
  <e-bar
    v-if="this.loaded === true"
    :word="this.word"
    :count="this.count"
    name="TOP250作品数量"
    title="导演作品排名"
    subtext="(受篇幅限制)入围TOP250作品少于2件的不显示"
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
  created() {
    this.$notify({
      title: "TIPS",
      message:
        "导演入围信息统计（如果一个电影有多个导演，则每个导演都按照权重 1 进行统计），考虑篇幅限制少于 2 件入围作品的导演在菜单栏中的列表信息以文字显示！",
      duration: 8500,
      offset: 60
    });
  },
  mounted() {
    let _this = this;
    axios
      .get("./static/director_count.json")
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

<style></style>
