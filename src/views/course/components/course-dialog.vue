<template>
  <div class="course-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="600px"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <el-scrollbar max-height="400px">
        <el-form ref="courseFormRef" :rules="rules" :model="data" label-width="120px">
          <el-form-item label="课程名称：" prop="courseName">
            <el-input v-model="data.courseName" placeholder="请输入课程名称"></el-input>
          </el-form-item>
          <el-form-item label="课程类型：" prop="courseType">
            <el-select v-model="data.courseType" placeholder="请选择课程类型">
              <el-option label="普通课程" :value="1"></el-option>
              <el-option label="实训课程" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排序：" prop="courseSort">
            <el-input v-model="data.courseSort" placeholder="请输入排序" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="课程封面：" prop="courseCover">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              accept=".jpg,.png,.gif"
              :auto-upload="false"
              :limit="3"
              :on-change="handleCoverOnchange"
            >
              <img v-if="data.courseCover" :src="appStore.getPreviewInfo(data.courseCover)" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="竞赛简介：" prop="courseIntroduce">
            <wang-editor @changeVal="val=>data.courseIntroduce=val" style="z-index: 0"/>
          </el-form-item>
        </el-form>
      </el-scrollbar>
      <template #footer>
        <div style="display: flex; justify-content: center;">
          <el-button type="primary" @click="handleSubmit">确定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="CourseDialog">
import {Plus} from "@element-plus/icons-vue";
import WangEditor from "@/components/TextEditor/wangEditor.vue";
import {ElMessage} from "element-plus";
import {saveCourse} from "@/api/course";
import {updateById} from "@/api/course";
import {useAppStore} from "@/store/app";
import {upload} from "@/api/comman";


const appStore = useAppStore()

const props = defineProps({
  /**
   * true 修改
   * false 新增
   */
  editFlag:{
    type:Boolean,
    required:true
  },
  courseObj:{
    type:Object,
    default:()=>{
      return{}
    }
  }
})


const dialogVisible = ref(false)

const title = ref('添加课程信息')

const courseFormRef = ref(null)

const courseForm = reactive({
  data:{
    courseName:'',
    courseType:'',
    courseSort:'',
    courseCover:'',
    courseIntroduce:''
  },
  rules:{
    courseName:[
      {required:true,message:'请输入课程名称',trigger:'blur'}
    ],
    courseType:[
      {required:true,message:'请输入课程类型',trigger:'change'}
    ],
  }
})
const {data,rules} = toRefs(courseForm)

const emits = defineEmits(['refreshList'])

// watch(()=>props.editFlag,(newValue)=>{
//   if(newValue){
//     title.value = "修改课程信息"
//     Object.assign(courseForm.data,props.courseObj)
//   }else{
//     title.value = "新建课程信息"
//   }
// })

const handleCoverOnchange = (file,fileList) => {
  //判断文件列表是否大于1,大于1取最后一次上传数据
  if(fileList.length > 1){
    fileList.splice(0,1)
  }
  const {name, size} = file
  const fileType = name.split('.').slice(-1)[0]
  const fileTypeList = ['jpg','png','gif']
  if(!fileTypeList.includes(fileType)){
    ElMessage({
      type:'warning',
      message: '请上传正确的文件(jpg/png/gif)'
    })
    fileList.splice(0,1)
    return
  }
  if (size >= 10 * 1024 * 1024){
    ElMessage({
      type:'warning',
      message: '请上传大小在10M以内的文件'
    })
    fileList.splice(0,1)
    return
  }
  const formData = new FormData()
  formData.append('file',file.raw)
  upload(formData).then((res) => {
    data.value.courseCover = res
  })
}

const openDialog = () =>{
  if(props.editFlag){
    title.value = "修改课程信息"
    Object.assign(courseForm.data,props.courseObj)
  }else{
    title.value = "新建课程信息"
  }
  dialogVisible.value = true
}
const handleSubmit = () => {
  courseFormRef.value.validate((valid)=>{
    if(valid){
      if (!props.editFlag){
        saveCourse(data.value).then((res)=>{
          ElMessage.success('提交成功')
          dialogVisible.value = false
          emits('refreshList')
        })
      }else{
        updateById(data.value).then((res)=>{
          ElMessage.success('更新成功')
          dialogVisible.value = false
          emits('refreshList')
        })
      }

    }else {
      ElMessage.warning('存在不符合的提交项')
    }
  })
}
const handleClose = () => {
  courseForm.data={
    courseName:'',
    courseType:'',
    courseSort:'',
    courseCover:'',
    courseIntroduce:''
  }
  nextTick(()=>{
    courseFormRef.value.clearValidate()
  })
}
defineExpose({openDialog})
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
