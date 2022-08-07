<template>
  <!-- model	表单数据对象	object -->
  <!-- inline	行内表单模式	boolean	—	false  :label="item.label"  单行-->
  <!-- label-width	表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。	string -->
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <!-- label	标签文本 string -->
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <!-- type	类型	string	text，textarea 和其他 原生 input 的 type 值	text -->
      <!-- placeholder	输入框占位文本	string	 -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="form[item.model]"
      >
      </el-input>
      <!-- ????????????????Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」 -->
      <el-switch v-if="item.type === 'switch'" v-model="form[item.model]">
      </el-switch>
      <!-- DatePicker 日期选择器  yyyy--年--2017  MM--月--01   dd--日--02   -->
      <!-- format	显示在输入框中的格式	string	见日期格式	yyyy-MM-dd -->
      <!-- value-format	可选，绑定值的格式。不指定则绑定值为 Date 对象	string	见日期格式 -->
      <!-- value / v-model	绑定值	date(DatePicker) / array(DateRangePicker) -->
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="form[item.model]"
      >
      </el-date-picker>
      <!-- Select 选择器 -->
      <!-- value / v-model	绑定值	boolean / string / number -->
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="form[item.model]"
      >
        <!-- value	选项的值	string/number/object -->
        <!-- label	选项的标签，若不设置则默认与 value 相同	string/number -->
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <!-- —	Form Item 的内容 -->
    <!-- 如果对当前组件都不能满意=  就自定义个插槽  自定义传输数据                      -->
    <!-- 给其他需要显示的组件留一个位置 -->
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    // 表单相关配置
    formLabel: Array,
    // 表单数据（双向绑定）
    form: Object,
    // 表单布局
    inline: Boolean,
  },
};
</script>

<style>
</style>