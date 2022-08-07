<template>
  <div style="height:100%">
   <el-container style="height:100%">
  <el-aside width="auto"  style="height:100%"><ComSide></ComSide></el-aside>
  <el-container>
    <el-header>
      <ComHeader></ComHeader>
      </el-header><ComTag></ComTag>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import ComSide from '../components/ComSide.vue'
import ComHeader from '../components/ComHeader.vue'
import ComTag from '../components/ComTag.vue'
export default {
    components:{
        ComSide,
        ComHeader,
        ComTag
    }
};
</script>

<style lang="less" scope>
.el-header{
    background-color: #333;
    height: 100%;
}
.el-main{
    padding-top: 0;
}
// .div{
//     height: 100%;
// }
</style>