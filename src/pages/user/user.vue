<template>
  <div class="manage">
    <!-- Dialog 对话框 -->
    <!-- visible	是否显示 Dialog，支持 .sync 修饰符	boolean	—	false -->
    <el-dialog 
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <ComForm
        :formLabel="operateFormLabel"
        :form="operataForm"
        :inline="true"
        ref="form"
      ></ComForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="comfirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+新增</el-button>
      <ComForm
        :formLabel="formLabel"
        :form="searchFrom"
        :inline="true"
        ref="form"
      >
      <!-- x卸载cimform的slot地方 -->
        <el-button type="primary" @click="getList(searchFrom.keyword)">搜索</el-button></ComForm
      >
    </div>
    <ComTable
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></ComTable>
  </div>
</template>

<script>
import ComForm from "../../components/comForm.vue";
import ComTable from "../../components/comTable.vue";
import { getUser,ddelUSer} from "../../../api/data";
export default {
  components: {
    ComForm,
    ComTable,
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      operataForm: {
        name: "",
        addr: "",
        age: "",
        brith: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchFrom: {
        keyword: "",
      },
      tableData: [
        // {id: "2cce6DBF-86FC-d6BD-73d5-e4fDbc5fbE09", name: "崔磊", addr: "广西壮族自治区 河池市 东兰县", age: 59, birth: "1975-02-28"},
        // {name:'a',addr:'a',age:2,birth:'1999-01-01'}
     

      ],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200,
        },
        {
          prop: "addr",
          label: "地址",
          width: 320,
        },
      ],
      config: {
        page: 1,
        totol: 30,
      },
    };
  },
  methods: {
    comfirm() {
      if (this.operateType === "edit") {
        this.$http.post("/user/edit", this.operataForm).then((res) => {
          console.log('comfirm',res);
          this.isShow = false;
          this.getList();
          // this.$message({
          //   type: "success",
          //   message: "保存更新",
          // });
        });
      } else {
        this.$http.post("/user/add", this.operataForm).then((res) => {
          // console.log('新增----',res.request.custom.options.body);
          console.log('add---------',res);

          this.isShow = false;
          this.getList();
          // this.$message({
          //   type: "success",
          //   message: "添加",
          // });
        });
      }
    },
    // 新增
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operataForm = {
        name: "",
        addr: "",
        age: "",
        brith: "",
        sex: "",
      };
    },
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operataForm = row;
      // console.log("row----bj", row);
    },
    // 删除
    delUser(row) {
      console.log("del---",row);//可以获取到数据
      this.$MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const id = row.id
          console.log('111111',id);
          this.$http.post('/user/del',{
            id
          }).then(res=>{
            console.log('shanchu',res)
              this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
          })
        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // this.$comfirm("此操作将永久删除该文件，是否继续？", "提示", {
      //   confirmButtonText: "确认",
      //   cancelButtonText: "取消",
      //   type: "warning",
      // })
      //   .then(() => {
      //     console.log("row----", row);
      //     const id = row.id;
      //     console.log("id----", id);
      //     this.$http
      //       .post("/user/del", {
      //         params: { id },
      //       })
      //       .then(() => {
      //         this.$message({
      //           type: "success",
      //           message: "删除成功",
      //         });
      //         this.getList();
      //       });
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: "info",
      //       message: "已取消删除",
      //     });
      //   });
    // },
    // getListF(){}

    // 获取用户列表 & 搜索   
    getList(name='') {
      console.log('searchname---',name);
      this.config.loading = true;
      name ? (this.config.page = 1) : "";
      getUser({
        page: this.config.page,
        name,
      }).then((res) => {
        console.log("res----", res);
       this.tableData = res.list.map((item) => {
          item.sexLabel = item.sex === 0 ? "女" : "男";
          
          return item;
          // item
          
        });
        if(name){
          this.tableData = res.data
        }
        this.config.totol = res.count;
        this.config.loading = false;
      },err =>{console.log(err);});
    },

 
        },
        // 页面加载就要调用
        created() {
            this.getList()
        },
    }

</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

