<template>
  <!-- echarts的容器 -->
  <div
    ref="divRef"
    class="bar-echarts"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import useEcharts from "../hooks/useEcharts";

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
      return [];
    },
  },
});

let divRef = ref(null);
let myChart=null

watch(()=>props.echartDatas,(newV,oldV)=>{
    setupEcharts(newV)
})
onMounted(() => {
    setupEcharts(props.echartDatas)
});
function setupEcharts(echartDatas){
    if(!myChart){
         myChart = useEcharts(divRef.value);
    }
    
  let option = getOption(echartDatas);
  myChart.setOption(option);
}
function getOption(barData=[]) {
  let mons=barData.map(item=>item.name)  //name数组
  let values=barData.map(item=>item.value)  //name数组
  var option = {
    // backgroundColor: 'rbg(40,46,72)',
    grid: {
      left: "5%",
      right: "5%",
      top: "30%",
      bottom: "5%",
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "white",
      },

      data: mons,
    },
    yAxis: {
      name: "个",
      nameTextStyle: {
        color: "white",
        fontSize: 13,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisLabel: {
        color: "white",
      },
    },
    series: [
      {
        name:'销量',
        type: "bar",
        barWidth: 17,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#01B1FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#033BFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: values,
      },
    ],
  };
  return option;
}
</script>
<style scoped>
</style>