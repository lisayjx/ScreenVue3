<template>
        <!-- echarts的容器 -->
       <div ref="divRef" class="line-echarts" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { ref ,onMounted,watch} from "vue";
import useEcharts from '../hooks/useEcharts'
// props
const props = defineProps({
    width: {
        type: String,
        default: "100%",
    },
    height: {
        type: String,
        default: "100%",
    },
    echartDatas: {
        type: Array,
        default: function () {
            return []
        },
    }
});

watch(()=>props.echartDatas,(newV,oldV)=>{
  setupEcharts(newV)
})
// 获取dom元素
let divRef = ref(null);
let myChart=null
onMounted(() => {
   // 设置echarts图表
   setupEcharts(props.echartDatas)
});


  // 设置echarts图表
 function setupEcharts(echartDatas){
  if(!myChart){
    myChart=useEcharts(divRef.value)
  }
 
   let option=getOption(echartDatas)
   myChart.setOption(option)
 }

//  拿到option
function getOption(lineData=[]){
  let option = {
    // backgroundColor: 'rbg(40,46,72)',
    grid: {
      left: "5%",
      right: "1%",
      top: "20%",
      bottom: "15%",
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    legend: {
      right: "center",
      bottom: "5%",
      itemGap: 20,
      itemWidth: 13,
      itemHeigth: 12,
      textStyle: {
        color: "#64BCFF",
      },
      icon: "rect",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "#20FF89",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: "#64BCFF",
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: "#64BCFF",
        },
      },
    ],
    series: [
      {
        name: lineData[0].name,
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#20FF89",
          lineStyle: {
            color: "#20FF89",
            width: 2,
          },
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#20FF89",
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0)",
              },
            ],
          },
        },
        data: lineData[0].data,
      },
      {
        name: lineData[1].name,
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "#EA9502",
          lineStyle: {
            color: "#EA9502",
            width: 2,
          },
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#EA9502",
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0)",
              },
            ],
          },
        },
        data: lineData[0].data,
      },
    ],
  };
return option
}
</script>
<style scoped>
</style>