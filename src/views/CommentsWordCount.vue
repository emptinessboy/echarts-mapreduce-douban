<template>
  <div>
    <div
      style="height:25px;text-align: center;padding-bottom: 20px;margin-top: -15px;"
    >
      <h1>豆瓣前250电影评论区 中文分词 词云图</h1>
    </div>
    <div ref="wordcloud" class="wordcloud"></div>
  </div>
</template>

<script>
import axios from "axios";
import echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";

export default {
  name: "CommentsWordCount",
  data() {
    return {
      wordList: []
    };
  },
  mounted() {
    let _this = this;
    axios.get("./static/comments_word_count.json").then(response => {
      _this.wordList = response.data;
      // 无效数据处理
      // _this.wordList[0].value = 0;
      // _this.wordList[4].value = 0;
      // _this.wordList[7].value = 0;
      // _this.wordList[6].value = 0;
      // 当数据获取完后再初始化echarts
      _this.initchart();
      // console.log(response.data);
      console.log(_this.wordList);
    });
  },
  created() {
    this.$notify({
      title: "TIPS",
      message:
        "这是基于来自 TOP250电影的 2500 条豆瓣评论，经过 ik-analyzer 中文分词处理后得到的词云图（过滤了无意义词）",
      duration: 8500,
      offset: 60
    });
  },
  methods: {
    initchart() {
      let myChart = echarts.init(this.$refs.wordcloud);
      myChart.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [9, 125],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ")"
                  );
                }
              }
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: this.wordList
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.wordcloud {
  width: 100%;
  height: calc(100vh - 150px);
  margin: auto;
}
</style>
