<template>
  <div class="chapter-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="600px"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <el-scrollbar max-height="400px">
        <el-form ref="chapterFormRef" :rules="rules" :model="data" label-width="120px">
          <el-form-item label="章节名称：" prop="chapterName">
            <el-input v-model="data.chapterName" placeholder="请输入章节名称"></el-input>
          </el-form-item>
          <el-form-item label="排序：" prop="chapterSort">
            <el-input v-model="data.chapterSort" placeholder="请输入排序" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="章节描述：" prop="chapterIntroduce">
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

<script setup name="ChapterDialog">
import WangEditor from "@/components/TextEditor/wangEditor.vue";
import {ElMessage} from "element-plus";
import {saveChapter,updateChapterById} from "@/api/chapter";

const dialogVisible = ref(false)

const title = ref('添加章节信息')

const chapterFormRef = ref(null)
const chapterForm = reactive({
  data:{
    chapterName:'',
    chapterSort:'',
    chapterIntroduce:'',
    courseId:''
  },
  rules:{
    chapterName:[
      {required:true,message:'请输入章节名称',trigger:'blur'}
    ],
    chapterSort:[
      {required:true,message:'请输入排序',trigger:'blur'}
    ],
  }
})
const {data,rules} = toRefs(chapterForm)

const emits = defineEmits(['refreshList'])

const openChapterDialog = () =>{
  if(props.editFlag){
    title.value = "修改章节信息"
    Object.assign(chapterForm.data,props.chapterObj)
  }else{
    title.value = "新建章节信息"
  }
  dialogVisible.value = true
}

const handleSubmit = () => {
  chapterFormRef.value.validate((valid)=>{
    if(valid){
      if (!props.editFlag){
        data.value.courseId=props.courseId;
        saveChapter(data.value).then((res)=>{
          ElMessage.success('提交成功')
          dialogVisible.value = false
          emits('refreshList')
        })
      }else{
        updateChapterById(data.value).then((res)=>{
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
  chapterObj:{
    type:Object,
    default:()=>{
      return{}
    }
  },
  courseId:{},
})

const handleClose = () => {
  chapterForm.data={
    chapterName:'',
    chapterSort:'',
    chapterIntroduce:'',
    courseId:''
  }
  nextTick(()=>{
    chapterFormRef.value.clearValidate()
  })
}

defineExpose({openChapterDialog})
</script>

<style scoped>

</style>
