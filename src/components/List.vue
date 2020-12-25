<template>
  <el-table
    :data="tableData"
    :row-class-name="tableRowClassName"
    style="width: 100%"
  >
    <el-table-column prop="word" :label="this.name" :width="this.datawidth">
    </el-table-column>
    <el-table-column prop="count" :label="this.subname"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "List",
  props: ["tableData", "name", "subname", "datawidth"],
  mounted() {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "one-row";
      } else if (rowIndex === 1) {
        return "two-row";
      } else if (rowIndex === 2) {
        return "tree-row";
      } else if (rowIndex === 3) {
        return "four-row";
      } else if (rowIndex === 4) {
        return "five-row";
      }
      return "";
    }
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
.el-table .one-row {
  background: #8ab8e8;
}
.el-table .two-row {
  background: #accef1;
}
.el-table .tree-row {
  background: #cbe2fa;
}
.el-table .four-row {
  background: #e1effd;
}
.el-table .five-row {
  background: #f0f7fd;
}
</style>
