<template>
  <div class="LessonMission-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="600px"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <el-scrollbar max-height="400px">
        <el-form ref="lessonMissionFormRef" :rules="rules" :model="data" label-width="100px">
          <el-form-item label="标题：" prop="missionTitle">
            <el-input v-model="data.missionTitle" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="任务类型" prop="missionType">
            <el-radio-group v-model="data.missionType">
              <el-radio label="1" size="large">训练任务</el-radio>
              <el-radio label="2" size="large">竞赛任务</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="排序：" prop="missionOrder">
            <el-input v-model="data.missionOrder" placeholder="请输入排序" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="作业时间：" prop="missionLimit">
            <el-input v-model="data.missionLimit" placeholder="请输入作业时间" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="开始时间：">
            <el-date-picker
            v-model="data.startTime"
            type="datetime"
            placeholder="请输入时间"
            default-format="yyyy-MM-dd HH:mm:ss"
          />
          </el-form-item>
          <el-form-item label="任务详情：" prop="chapterIntroduce">
            <wang-editor @changeVal="val=>data.missionContent=val" style="z-index: 0"/>
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

<script setup name="LessonMissionDialog">
import WangEditor from "@/components/TextEditor/wangEditor.vue";
import {ElMessage} from "element-plus";
import {saveLessonMission,updateLessonMissionById} from "@/api/lessonmission";

const dialogVisible = ref(false)

const title = ref('添加开发任务')
const lessonMissionFormRef = ref(null)
const lessonMissionForm = reactive({
  data:{
    missionTitle:'',
    missionType:'',
    missionOrder:'',
    missionLimit:'',
    startTime:'',
    missionContent:'',
    chapterId:'',
    courseId:''
  },
  rules:{
    missionTitle:[
      {required:true,message:'请输入标题',trigger:'blur'}
    ],
    missionType:[
      {required:true,message:'请输入任务类型',trigger:'blur'}
    ],
    missionLimit:[
      {required:true,message:'请输入作业时间',trigger:'blur'}
    ],
  }
})
const {data,rules} = toRefs(lessonMissionForm)

const emits = defineEmits(['refreshList'])

const openLessonMissionDialog = () =>{
  if(props.editFlag){
    title.value = "修改开发任务"
    Object.assign(lessonMissionForm.data,props.lessonMissionObj)
  }else{
    title.value = "添加开发任务"
  }
  dialogVisible.value = true
}

const handleSubmit = () => {
  lessonMissionFormRef.value.validate((valid)=>{
    if(valid){
      if (!props.editFlag){
        data.value.chapterId=props.chapterId;
        data.value.courseId=props.courseId;
        saveLessonMission(data.value).then((res)=>{
          ElMessage.success('提交成功')
          dialogVisible.value = false
          emits('refreshList')
        })
      }else{
        updateLessonMissionById(data.value).then((res)=>{
          data.value.chapterId=props.chapterId;
          data.value.courseId=props.courseId;
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
  lessonMissionObj:{
    type:Object,
    default:()=>{
      return{}
    }
  },
  chapterId:{},
  courseId:{},
})

const handleClose = () => {
  lessonMissionForm.data={
    missionTitle:'',
    missionType:'',
    missionOrder:'',
    missionLimit:'',
    startTime:'',
    missionContent:'',
    chapterId:'',
    courseId:''
  }
  nextTick(()=>{
    lessonMissionFormRef.value.clearValidate()
  })
}

defineExpose({openLessonMissionDialog})
</script>

<style scoped>

</style>
