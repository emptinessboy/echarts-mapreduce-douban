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
  mounted() {
    let _this = this;
    axios
      .get("/static/actor_count.json")
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
