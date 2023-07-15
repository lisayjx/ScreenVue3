import { onUnmounted } from "vue";
import * as echarts from "echarts";
export default function useEcharts(divEl) {

    const echartsInstance = echarts.init(divEl, null, { renderer: 'svg' });    //容器，主题色，渲染方式
    //   组件卸载时把echarts实例删除
    onUnmounted(() => {
        echartsInstance.dispose()
    })

    function setOption(option) {
        echartsInstance.setOption(option)
    }

    function resizeEchart(option) {
        echartsInstance.resize()
    }
    return {
        echartsInstance, setOption, resizeEchart
    }
}