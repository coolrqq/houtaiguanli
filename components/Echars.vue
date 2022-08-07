// 封装echart表格
<template>
  <div ref="echart"><!-- 封装图标 --></div>
</template>

<script>
import * as echart from "echarts";
export default {
  // d定义一个属性区分是什么图  折现图和柱状图基本一致  定义一个属性区别是饼状图还是另外俩个图
  props: {
    isAxisChart: {
      type: Boolean,
      // 初始值
      default: true,
    },
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
          // legend:{data:[]}
        };
      },
    },
  },
  data() {
    return {
      // 折线图的option
      axisOption: {
        // 图例文字颜色
        legend: {
          data: [],
          textStyle: {
            color: "#333",
          },
        },

        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        // ?????????

        xAxis: {
          type: "category", // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [],
      },
      // 饼状图
      bingOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      echart: null,
    };
  },
  watch: {
    chartData: {
      handler: function () {
        this.initChart();
      },
      deep: true,
    },
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.option);
      } else {
        this.echart = echart.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;

        // this.axisOption.legend.data = this.chartData.legend.data
        // console.log("ss");
        // console.log("aac", this.echartData.legend.data);
      } else {
        this.bingOption.series = this.chartData.series;
      }
    },
  },

  computed: {
    options() {
      // p判断 如果isAxisChart存在 就是折现图/组装图 不然就是饼状图
      return this.isAxisChart ? this.axisOption : this.bingOption;
    },
  },
};
</script>

<style>
</style>