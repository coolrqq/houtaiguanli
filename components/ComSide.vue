<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
   :collapse="isCollapse"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
  >
    <h3>{{isCollapse ? '后台' : '后台管理系统'}}</h3>
    <el-menu-item
      @click="clickMenw(item)"
      v-for="item in nochild"
      :index="item.path + ''"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="subitem in haschild"
      :key="subitem.path"
      :index="subitem.path + ''"
    >
      <template slot="title">
        <i :class="'el-icon-' + subitem.icon"></i>
        <span slot="title">{{ subitem.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(child, childindex) in subitem.children"
        :key="child.path"
        :index="childindex + ''"
          
      >
        <el-menu-item  @click="clickMenw(child)">{{ child.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
        // isCollapse:false,
        menu:[]
      // meuu: [
      //   {
      //     path: "/home",
      //     name: "home",
      //     label: "首页",
      //     icon: "s-home",
      //     url: "Home/Home",
      //   },
      //   {
      //     path: "/mall",
      //     name: "mall",
      //     label: "商品管理",
      //     icon: "video-play",
      //     url: "MallManage/MallManage",
      //   },
      //   {
      //     path: "/user",
      //     name: "user",
      //     label: "用户管理",
      //     icon: "user",
      //     url: "UserManage/UserManage",
      //   },
      //   // {
      //   //   path: "/dialag",
      //   //   name: "dialag",
      //   //   label: "el-dialag",
      //   //   icon: "folder",
      //   //   url: "dialag/dialag",
      //   // },
      //   {
      //     label: "其他",
      //     icon: "location",
      //     children: [
      //       {
      //         path: "/page1",
      //         name: "page1",
      //         label: "页面1",
      //         icon: "setting",
      //         url: "Other/PageOne",
      //       },
      //       {
      //         path: "/page2",
      //         name: "page2",
      //         label: "页面2",
      //         icon: "setting",
      //         url: "Other/PageTwo",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenw(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit('selectMenu',item)
      // console.log(selectMenu)
    },
  },
  computed: {
    nochild() {
      return this.asyncMenu.filter((item) => !item.children);
    },
    haschild() {
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tap.isCollapse;
    },
    asyncMenu(){
      return this.$store.state.tap.menu
    }
  },
};
</script>