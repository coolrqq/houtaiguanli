<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-7-19</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <!-- 表头  -->
          <el-table-column
            v-for="(item, key) in tablelabel"
            :prop="key"
            :key="key"
            :label="item"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <!-- 订单相关数据 -->
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <!-- 折现图 -->
        <!-- <div style="height: 280px" ref="echarts"></div> -->
        <Echart :chartData="echartData.order" style="height: 280px"></Echart>
      </el-card>
      <div class="graph">
        <!-- 柱状图 -->
        <el-card style="height: 260px">
          <!-- <div style="height: 240px" ref="userEcharts"></div> -->
          <Echart :chartData="echartData.user" style="height: 240px"></Echart>
        </el-card>
        <!-- 饼图 -->
        <el-card style="height: 260px">
          <!-- <div style="height: 240px" ref="videoEcharts"></div> -->
          <Echart :chartData="echartData.video" style="height: 240px" :isAxisChart="false"></Echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../../../api/data";
// import * as echarts from "echarts";
import Echart from "../../components/Echars.vue";
export default {
  components: {
    Echart,
  },
  data() {
    return {
      // 图片的按需引入
      userImg: require("../../assets/images/zxx.jpg"),
      tableData: [
        // {
        //   name: "oppo",
        //   todayBuy: 100,
        //   monthBuy: 300,
        //   totalBuy: 800,
        // },
        // {
        //   name: "vivo",
        //   todayBuy: 100,
        //   monthBuy: 300,
        //   totalBuy: 800,
        // },
        // {
        //   name: "苹果",
        //   todayBuy: 100,
        //   monthBuy: 300,
        //   totalBuy: 800,
        // },
        // {
        //   name: "小米",
        //   todayBuy: 100,
        //   monthBuy: 300,
        //   totalBuy: 800,
        // },
        // {
        //   name: "三星",
        //   todayBuy: 100,
        //   monthBuy: 300,
        //   totalBuy: 800,
        // },
        // {
        //   name: "魅族",
        //   todayBuy: 100,
        //   monthBuy: 300,
        //   totalBuy: 800,
        // },
      ],
      tablelabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: [],
          legend:{data:[]}
        },
        user: { xData: [], series: [] },
        video: {
          series:[]
        },
      },
    };
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res;
      console.log("tubiao", res);
      if (code === 20000) {
        this.tableData = data.tableData;
        // 折现图
        const order = data.orderData;
        const series = [];
        const xAA = Object.keys(order.data[0]);

        Object.keys(order.data[0]).forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
          // console.log(series);
        });
        // let option = {
        //   xAxis: {
        //     data: order.date,
        //   },
        //   yAxis: {},
        //   // 图例 显示再图标上面的那个
        //   legend: {
        //     data: xAA,
        //   },
        //   // ???
        //   tooltip: {
        //     trigger: "axis",
        //   },
        //   series,
        // };
        this.echartData.order.xData = order.date
        this.echartData.order.series = series
        // this.echartData.order.legend.data= xAA
        // console.log('lll---',this.echartData.order.legend.data);
        // const E = echarts.init(this.$refs.echarts);
        // E.setOption(option);

        // 柱状图
        // const userOption = {
        //   // 图例文字颜色
        //   legend: {
        //     textStyle: {
        //       color: "#333",
        //     },
        //   },
        //   // ??????????
        //   grid: {
        //     left: "20%",
        //   },
        //   // 提示框
        //   tooltip: {
        //     trigger: "axis",
        //   },
        //   xAxis: {
        //     type: "category", //
        //     data: data.userData.map((item) => item.date),
        //     axisLine: {
        //       lineStyle: {
        //         color: "#17b3a3",
        //       },
        //     },
        //     axisLabel: {
        //       interval: 0,
        //       color: "#333",
        //     },
        //   },

        //   yAxis: [
        //     {
        //       type: "value",
        //       axisLine: {
        //         lineStyle: {
        //           color: "#17b3a3",
        //         },
        //       },
        //     },
        //   ],
        //   color: ["#2ec7c9", "#b6a2de"],
        //   series: [
        //     {
        //       name: "新增用户",
        //       data: data.userData.map((item) => item.new),
        //       type: "bar", //柱状图
        //     },
        //     {
        //       name: "活跃用户",
        //       data: data.userData.map((item) => item.active),
        //       type: "bar",
        //     },
        //   ],
        // };
        this.echartData.user.xData =  data.userData.map((item) => item.date)
        this.echartData.user.series = [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar", //柱状图
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ]
        // const U = echarts.init(this.$refs.userEcharts);
        // U.setOption(userOption);

        // 饼状图
        // const videoOption = {
        //   tooltip: {
        //     trigger: "item",
        //   },
        //   color: [
        //     "#0f78f4",
        //     "#dd536b",
        //     "#9462e5",
        //     "#a6a6a6",
        //     "#e1bb22",
        //     "#39c362",
        //     "#3ed1cf",
        //   ],
        //   series: [
        //     {
        //       data: data.videoData,
        //       type: "pie", //饼图
        //     },
        //   ],
        // };
        // this.echartData.video.xData = order.date
        this.echartData.video.series =[
            {
              data: data.videoData,
              type: "pie", //饼图
            },
          ]
      //   const Aa = echarts.init(this.$refs.videoEcharts);
      //   Aa.setOption(videoOption);
      }
    });
  },
};
</script>

<style>
</style>