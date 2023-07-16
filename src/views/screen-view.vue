
<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top"> <PieEcharts :echartDatas="pieData"></PieEcharts> </div>
    <div class="left-bottom"><LineEcharts :echartDatas="lineData"></LineEcharts>  </div>

    <div class="right-top"><right-top-panel :percentage="chargingtop4Per" :panelItems="chargingTopFour"></right-top-panel> </div>
    <div class="right-center"> <BarEcharts :echartDatas="barData"></BarEcharts></div>
    <div class="right-bottom"><RightBottomSvg :dots="exceptionMonitor"></RightBottomSvg> </div>

    <div class="center"><Center></Center></div>
    <div class="bottom"><BottomPanel :panelItems="dataAnaly"></BottomPanel></div>
  </main>
</template>


<script setup>
import PieEcharts from "../components/pie-echarts.vue";
import LineEcharts from "../components/line-echarts.vue";
import BarEcharts from "../components/bar-echarts.vue";
import RightBottomSvg from '../components/right-bottom-svg.vue'
import Center from '../components/center.vue'
import BottomPanel from '../components/bottom-panel.vue'
import rightTopPanel from "../components/right-top-panel.vue";
import { onMounted, ref } from "vue";
import {pieDatas,lineDatas,barDatas,exceptionMonitoring,dataAnalysis,chargingTop4 } from './config/home-data.js'
import {getScreenData} from '../api/index.js'
 

// pie-echarts数据
let pieData= ref(pieDatas);
// line-echarts数据
let lineData=ref(lineDatas)
// bar-echarts数据
let barData=ref(barDatas)
// 中下 数据分析
let dataAnaly=ref(dataAnalysis)
// top4 水球
let chargingTopFour=ref(chargingTop4)
let chargingtop4Per=ref(0)
// 右下角 监控
let exceptionMonitor=ref(exceptionMonitoring)

// 请求数据
getScreenData().then(res=>{
  pieData.value=res.data.chargingPile.data
  lineData.value=res.data.processMonitoring.data
  dataAnaly.value=res.data.dataAnalysis.data
  chargingTopFour.value=res.data.chargingTop4.data
  chargingtop4Per.value=res.data.chargingTop4.totalPercentage
  barData.value=res.data.chargingStatistics.data
  exceptionMonitor.value=res.data.exceptionMonitoring.data
})















// 大屏适配
import useScalePage from "@/hooks/useScalePage";
let option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9,
};
useScalePage(option);
</script>



<style scoped lang="scss">
/* @mixin bgstyle() {
  background-color: red;
  background-size: 100% 100%;
  background-repeat: no-repeat;
   @include bgstyle()  
} */

.screen-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #070a3c;
  background-image: url(@/assets/images/bg.png) ;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  position: absolute;
  top: 21px;
  left: 0;
  width: 100%;
  height: 56px;

  background-image: url(@/assets/images/bg_header.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  height: 443px;
  width: 536px;
  /* 背景 */
  background-image: url(../assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.center {
  position: absolute;
  right: 535px;
  bottom: 272px;
  width: 823px;
  height: 710px;
box-sizing: border-box;
padding-left: 20px;
padding-top: 20px;

  /* border: 2px solid pink; */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
