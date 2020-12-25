<template>
  <list
    :tableData="this.tableData"
    name="国家 / 地区"
    subname="频次"
  ></list>
</template>

<script>
import List from "@/components/List";
import axios from "axios";
export default {
  name: "ListCountry",
  components: { List },
  methods: {
  },
  mounted() {
    let _this = this;
    axios
      .get("/static/list_country_count.json")
      .then(response => {
        // console.log(response.data);
        _this.tableData = response.data;
        _this.loaded = true;
        _this.loading.close();
      })
      .catch()
      .finally();
  },
  data() {
    return {
      loading: this.$loading({
        lock: true,
        text: "数据量较大，加载中……",
        spinner: "el-icon-loading"
        // background: "rgba(0, 0, 0, 0.7)"
      }),
      loaded: false,
      tableData: []
    };
  }
};
</script>

<style scoped></style>
