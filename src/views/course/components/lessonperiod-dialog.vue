<template>
  <div class="LessonPeriod-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="600px"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <el-scrollbar max-height="400px">
        <el-form ref="lessonPeriodFormRef" :rules="rules" :model="data" label-width="120px">
          <el-form-item label="内容名称：" prop="lessonPeriodName">
            <el-input v-model="data.lessonPeriodName" placeholder="请输入章节名称"></el-input>
          </el-form-item>
          <el-form-item label="排序：" prop="lessonPeriodSort">
            <el-input v-model="data.lessonPeriodSort" placeholder="请输入排序" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="内容描述：" prop="chapterIntroduce">
            <wang-editor @changeVal="val=>data.chapterIntroduce=val" style="z-index: 0"/>
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

<script setup name="LessonPeriodDialog">
import WangEditor from "@/components/TextEditor/wangEditor.vue";
import {ElMessage} from "element-plus";
import {saveLessonPeriod,updateLessonPeriodById} from "@/api/lessonperiod"


const dialogVisible = ref(false)

const title = ref('添加学习内容')
const lessonPeriodFormRef = ref(null)
const lessonPeriodForm = reactive({
  data:{
    lessonPeriodName:'',
    lessonPeriodSort:'',
    chapterIntroduce:'',
    chapterId:''
  },
  rules:{
    lessonPeriodName:[
      {required:true,message:'请输入内容名称',trigger:'blur'}
    ],
    lessonPeriodSort:[
      {required:true,message:'请输入排序',trigger:'blur'}
    ],
  }
})
const {data,rules} = toRefs(lessonPeriodForm)

const emits = defineEmits(['refreshList'])

const openLessonPeriodDialog = () =>{
  if(props.editFlag){
    title.value = "修改学习内容"
    Object.assign(lessonPeriodForm.data,props.lessonPeriodObj)
  }else{
    title.value = "添加学习内容"
  }
  dialogVisible.value = true
}

const handleSubmit = () => {
  lessonPeriodFormRef.value.validate((valid)=>{
    if(valid){
      if (!props.editFlag){
        data.value.chapterId=props.chapterId;
        saveLessonPeriod(data.value).then((res)=>{
          ElMessage.success('提交成功')
          dialogVisible.value = false
          emits('refreshList')
        })
      }else{
        updateLessonPeriodById(data.value).then((res)=>{
          data.value.chapterId=props.chapterId;
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

const props = defineProps({
  /**
   * true 修改
   * false 新增
   */
  editFlag:{
    type:Boolean,
    required:true
  },
  lessonPeriodObj:{
    type:Object,
    default:()=>{
      return{}
    }
  },
  chapterId:{},
})

const handleClose = () => {
  lessonPeriodForm.data={
    lessonPeriodName:'',
    lessonPeriodSort:'',
    chapterIntroduce:'',
    chapterId:'',
  }
  nextTick(()=>{
    lessonPeriodFormRef.value.clearValidate()
  })
}

defineExpose({openLessonPeriodDialog})
</script>

<style scoped>

</style>
