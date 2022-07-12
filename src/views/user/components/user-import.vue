<template>
  <el-dialog
    title="导入"
    v-model="dialogVisible"
    width="600px"
    @close="handleClose">
    <el-form ref="importFormRef" :model="importForm" label-width="120px">
      <el-form-item label="下载模板：">
        <el-button type="text" style="color: #3875fb" @click="downLoadTemplate">下载导入模板</el-button>
      </el-form-item>
      <el-form-item label="上传文件：" prop="file" :rules="[{required: true,message:'请选择文件',trigger: 'change'}]">
        <el-upload
          ref="upload"
          class="upload-demo"
          action=""
          :limit="1"
          :on-exceed="handleExceed"
          :http-request="httpRequest"
          :before-upload="handleBeforeUpload"
          :auto-upload="false"
          accept=".xlsx"
        >
          <template #trigger>
            <el-button type="primary">选择文件</el-button>
          </template>
          <template #tip>
            <div class="el-upload__tip text-red">
              只能上传大小为1M的xlsx文件
            </div>
          </template>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import {ElMessage, genFileId} from 'element-plus'
import {downloadModel, importExcel} from "@/api/comman";
const upload = ref(null)
const importFormRef = ref(null)

const emits = defineEmits(['refreshList'])
const dialogVisible = ref(false)
const importForm = reactive({
  file: ''
})
const openDialog = () => {
  dialogVisible.value = true
}

const handleClose = () => {
  importForm.file = ''
  upload.value.clearFiles()
}

const handleExceed = (files) => {
  upload.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  upload.value.handleStart(file)
  importForm.file = file.name
}

const downLoadTemplate = () => {
  downloadModel().then((res)=>{
    /**
     * blob下载思路
     * 1） 使用ajax发起请求，指定接收类型为blob（responseType: 'blob'）
     * 2）读取请求返回的头部信息里的content-disposition，返回的文件名就在这里面（或者自定义文件名，可跳过此步骤）
     * 3）使用URL.createObjectURL将请求的blob数据转为可下载的url地址
     * 4）使用a标签下载
     *
     */
    let blob = res.data

    //将请求的blob数据转为可下载的url地址
    let url = URL.createObjectURL(blob)

    // 创建一个下载标签<a>
    const aLink = document.createElement('a')
    aLink.href = url

    // 2.直接使用自定义文件名,设置下载文件名称
    aLink.setAttribute('download', '用户导入模板.xlsx' )
    document.body.appendChild(aLink)

    // 模拟点击下载
    aLink.click()

    // 移除改下载标签
    document.body.removeChild(aLink);
  })
}
const handleBeforeUpload = (file) => {
  const {name, size} = file
  const fileType = name.split('.').slice(-1)[0]
  const fileTypeList = ['xlsx']
  if (!fileTypeList.includes(fileType)) {
    ElMessage({
      type: 'warning',
      message: '请上传格式正确的文件(xlsx)'
    })
    return false
  }
  if (size >= 1 * 1024 * 1024) {
    ElMessage({
      type: 'warning',
      message: '请上传大小在1M以内的文件'
    })
    return false
  }
}

const httpRequest = (data) => {
  const {file} = data
  const formData = new FormData()
  formData.append('file', file)
  importExcel(formData).then((res) => {
    ElMessage.success('导入成功')
    dialogVisible.value = false
    emits('refreshList')
  })
}

const handleSubmit = () => {
  importFormRef.value.validate((valid)=> {
    upload.value.submit()
  })
}
defineExpose({openDialog})
</script>

<style scoped>

</style>
