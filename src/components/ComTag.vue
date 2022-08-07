<template>
<!--  :closable= 显示叉叉 -->
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tap.tabsList"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
      >{{ tag.label }}</el-tag
    >
  </div>
</template>

<script>
// 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
import { mapState,  } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tap"]),
  },
  methods: {
    // ...mapMutations(["closeTag"]),
    changeMenu(item) {
      // 所有的组件都可以通过this.$router拿到路由器对象，还可以通过this.$route拿到当前路由对象
      this.$router.push({ name: item.name });
    //   console.log(closeTag);
    },
    handleClose(tag, index) {
      const length = this.tap.tabsList.length - 1;
      console.log(length)
      // this.tap.closeTag(tag)
      this.$store.commit("closeTag",tag);
      if (tag.name !== this.$route.name) {
        return;
      }
      // 如果点击的是最后一个tag  则需要往左跳转
      if (index === length) {
        this.$router.push({
          name: this.tabsList[+index - 1].name,
        });
      } else {
        // 如果不是 就需要往右跳转
        this.$router.push({
          name: this.tabsList[+index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>