<template>
  <div id="app">
    <el-container style="height: 100vh; border: 0px">
      <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '2', '3']" router>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>数据概览</template
            >
            <el-menu-item index="/">所有数据</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>可视化展示</template
            >
            <el-menu-item-group>
              <template slot="title">词云图</template>
              <el-menu-item index="comments-word">评论词云图</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">堆叠折线图</template>
              <el-menu-item index="year_count">近30年走势</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">饼状分布图</template>
              <el-menu-item index="country-and-place"
                >国家地区排行</el-menu-item
              >
              <el-menu-item index="movie_type">电影类型排行</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">横向条形图</template>
              <el-menu-item index="director_count">导演作品排行</el-menu-item>
              <el-menu-item index="actor_count">演员作品排行</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>文本数据</template
            >
            <el-menu-item-group>
              <template slot="title">统计表</template>
              <el-menu-item index="list_comments">评论中文词频</el-menu-item>
              <el-menu-item index="list_country">国家地区排名</el-menu-item>
              <el-menu-item index="list_type">类型排名统计</el-menu-item>
              <el-menu-item index="list_director">导演排名统计</el-menu-item>
              <el-menu-item index="list_actor">演员排名统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 15px">
          <span
            >胡晓帆 - 2018010587 /
            <strong>豆瓣 TOP250 电影数据分析结果</strong></span
          >
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
body {
  display: block;
  margin: 0px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
