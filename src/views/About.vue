<template>
  <div class="bingtu">
    <v-chart :options="polar" :auto-resize="true"/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

import 'echarts/lib/chart/pie';
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'



export default {
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      polar: {
        title : {
          text: '会员数据统计',
          subtext: '动态数据',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          data: ['微信访问','公众号访问','扫码进入','分享进入','搜索访问']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'微信访问'},
              {value:310, name:'公众号访问'},
              {value:234, name:'扫码进入'},
              {value:135, name:'分享进入'},
              {value:1548, name:'搜索访问'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>
<style scoped>
.bingtu{
  height: 100vh;
  width: 100%;
}
</style>
