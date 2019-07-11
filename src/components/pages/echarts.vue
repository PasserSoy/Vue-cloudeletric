<template>
  <div>
    <div id="main" style="width:500px;height:500px;"></div>
    <input id='tipinput' type="text">
    <div id="container" style="width:500px;height:500px;"></div>
  </div>
</template>
<script>
// import 'https://webapi.amap.com/maps?v=1.4.15&key=您申请的key值'
import AMap from 'AMap'
export default {
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$ec.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });

    var map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:11, //初始化地图层级
        center: [116.397428, 39.90923] //初始化地图中心点
    });
    //输入提示
    var auto = new AMap.Autocomplete({
        input: "tipinput"
    });
  }
}
</script>
