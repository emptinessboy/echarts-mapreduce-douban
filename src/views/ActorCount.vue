<template>
  <e-bar
    v-if="this.loaded === true"
    :word="this.word"
    :count="this.count"
    name="TOP250作品数量"
    title="演员作品排名"
    subtext="(受篇幅限制)入围TOP250作品少于5件的不显示"
    theme="blue"
  ></e-bar>
  <!--  <v-chart :options="bar" :auto-resize="true" />-->
</template>

<script>
import axios from "axios";
import ChartBar from "@/components/ChartBar";
export default {
  name: "ActorCount",
  components: {
    "e-bar": ChartBar
  },
  created() {
    this.$notify({
      title: "TIPS",
      message:
        "演员入围信息统计（如果一个电影有多个演员，则每个演员都按照权重 1 进行统计），考虑篇幅限制少于 5 件入围作品的演员在菜单栏中的列表信息以文字显示！",
      duration: 8500,
      offset: 60
    });
  },
  mounted() {
    let _this = this;
    axios
      .get("./static/actor_count.json")
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
