<template>
  <div>
    <h1>Element-Plus</h1>
    <el-button :icon="Edit" >Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" @click="handleClickButton">Success</el-button>
  </div>
</template>

<script setup>
import {
  Edit,
} from '@element-plus/icons-vue'
import {ElMessage} from "element-plus";
const  handleClickButton = () =>{
  ElMessage.success("11111")
}
</script>

<style scoped>

</style>
