import { getScreenData } from '../../api/index.js'

export const pieDatas = [
  {
    value: 0,
    name: "广州占比",
    percentage: "5%",
    color: "#34D160",
  },
  {
    value: 0,
    name: "深圳占比",
    percentage: "4%",
    color: "#027FF2",
  },
  {
    value: 0,
    name: "东莞占比",
    percentage: "8%",
    color: "#8A00E1",
  },
  {
    value: 0,
    name: "佛山占比",
    percentage: "10%",
    color: "#F19610",
  },
  {
    value: 0,
    name: "中山占比",
    percentage: "20%",
    color: "#6054FF",
  },
  {
    value: 0,
    name: "珠海占比",
    percentage: "40%",
    color: "#00C6FF",
  },
]


export const lineDatas = [
  {
    name: '正常',
    data: [0,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: '异常',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
]

export const barDatas = [
  {
    "name": "一月",
    "value": 0
  },
  {
    "name": "二月",
    "value": 0
  },
  {
    "name": "三月",
    "value": 0
  },
  {
    "name": "四月",
    "value": 0
  },
  {
    "name": "五月",
    "value": 0
  },
  {
    "name": "六月",
    "value": 0
  },
  {
    "name": "七月",
    "value": 0
  }
]



// 右下角 数据
export const exceptionMonitoring=[
  {
  "id": 1,
  "name": "异常1",
  "value": 5,  //点大小
  "dur": "10s",
  "begin": "0s"
  },
  {
  "id": 2,
  "name": "异常2",
  "value": 3,
  "dur": "10s",
  "begin": "-3s"
  },
  {
  "id": 3,
  "name": "异常3",
  "value": 5,
  "dur": "10s",
  "begin": "-5s"
  }
  ]


// 中间下 数据
export const dataAnalysis =[
  {
    id: 1,
    title: "充电桩总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 2,
    title: "年增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: true,
  },
  {
    id: 3,
    title: "月增长总数(个)",
    totalNum: 0,
    unit: "万",
    percentage: 0,
    isUp: false,
  },
]