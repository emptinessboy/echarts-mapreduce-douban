<template>
  <el-table
    :data="tableData"
    :row-class-name="tableRowClassName"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="主演">
            <span>{{ props.row.actors }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column prop="rank" label="排名" width="50"> </el-table-column>
    <el-table-column prop="score" label="得分" width="50"> </el-table-column>
    <el-table-column prop="movie" label="电影名称（中外文）" width="220">
    </el-table-column>
    <el-table-column prop="pubdate" label="发行日期" width="120">
    </el-table-column>
    <el-table-column prop="country" label="国家地区" width="140">
    </el-table-column>
    <el-table-column prop="type" label="类型" width="180"> </el-table-column>
    <el-table-column prop="score" label="得分" width="50"> </el-table-column>
    <el-table-column prop="director" label="导演" width="260">
    </el-table-column>
    <el-table-column prop="count" label="评分人数"> </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";

export default {
  name: "AllInfo",
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
  },
  mounted() {
    let _this = this;
    axios
      .get("/static/all_info.json")
      .then(response => {
        console.log(response.data);
        _this.tableData = response.data;
      })
      .catch()
      .finally();
  },
  data() {
    return {
      tableData: []
    };
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
