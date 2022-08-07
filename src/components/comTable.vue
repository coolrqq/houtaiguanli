<template>
  <div class="common-table">
    <!-- stripe	是否为斑马纹 table	boolean	—	false -->
    <el-table :data="tableData" height="90%" stript>
      <!-- show-overflow-tooltip	当内容过长被隐藏时显示 tooltip	Boolean	—	false -->
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <!-- 看不懂  作用域插槽  猜測這裡是數據，每行显示的数据-->
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop]}}</span>
        </template></el-table-column
      >
      <el-table-column label="操作" min-width="“180”">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEidt(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          ></template
        >
      </el-table-column>
    </el-table>
    <!-- layout	组件布局，子组件名用逗号分隔	String	sizes, prev, pager, next, jumper, ->, total, slot	'prev, pager, next, jumper, ->, total' -->
    <!-- total	总条目数	number	—	— -->
    <!-- current-page	当前页数，支持 .sync 修饰符	number	—	1 -->
    <!-- page-sizes	每页显示个数选择器的选项设置	number[]	—	[10, 20, 30, 40, 50, 100] -->
    <!-- current-change	currentPage 改变时会触发	当前页 -->
    <!-- 分页 -->
    <el-pagination
      class="pager"
      layout="prev,pager,next"
      :total="config.totol"
      :current-page.sync="config.page"
      @current-change="changepage"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    handleEidt(row) {
      this.$emit("edit", row);
      console.log('编辑的row--',row)//undefined
      // console.log('scope.row===',scope.row[item.prop])
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changepage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 10px;
    right: 20px;
    color: red;
  }
}
</style>