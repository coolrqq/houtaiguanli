<template>
  <header>
    <!-- 左边盒子-->
    <div class="l-content">
      <!-- 左侧按钮  -->
      <el-button
        @click="iscoll"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
        v-for="item in tap.tabsList"
          :key="item.path"
          :to="{ path: item.path }"
          >{{item.label}}11</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
<!-- 下拉菜单 右边盒子 -->
    <span class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span> <img :src="srcimg" class="user" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="out">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </header>
</template>

<script>
// mapstate是vuex的辅助函数  当⼀个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使⽤
// 辅助函数帮助我们⽣成计算

import { mapState } from 'vuex';

export default {
  name: "ComHeader",
  data() {
    return {
      // 图片懒加载
      srcimg: require("../assets/images/zxx.jpg"),
  
    };
  },
  methods: {
    iscoll() {
      // 接收vuex中的方法判断左边是否收起
      this.$store.commit("collapseMenu");
      console.log("wss");
    },
    out(){
      console.log('a');
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/login')
    }
  },
 
  computed: {
    ...mapState(['tap']),
   
  },
};
// console.log(tabsList)
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  text-align: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  display: flex;
  align-items: center;
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>