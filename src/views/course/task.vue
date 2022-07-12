<template>
  <div class="task-head">
    <h1>{{course.courseName}}</h1>
    <div>
      <el-button type="primary" @click="handleAddChapter">添加章节</el-button>
      <el-button @click="handleReset">返回</el-button>
    </div>
  </div>
  <div class="task-table" style="padding-top: 20px;">
    <el-collapse v-for="(data,key,index) in chapterList" :key="index">
<!--       v-for="(data,key,index) in chapterList" :key="index"-->
      <el-collapse-item name="1">
        <template #title>
          <div style="display: flex; justify-content: space-between; width: 100%" >
            <div style="flex-grow: 2">
              <span style="font-size: large">{{data.chapterName}}</span>
            </div>

              <el-switch v-model="data.chapterStatus"
                         :active-value="1"
                         :inactive-value="0" @change="handlechapterStatusChange(data)" style="padding-top: 20px; padding-right: 40px">
              </el-switch>

            <div>
              <el-tooltip class="item" effect="dark" content="修改" placement="top">
                <el-button type="text" :icon="Edit" style="color: #999999" @click.stop="handleEditChapter(data)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="添加学习内容" placement="top">
                <el-button type="text" :icon="FolderAdd" style="color: #999999" @click.stop="handleAddLessonPeriod(data)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="添加开发内容" placement="top">
                <el-button type="text" :icon="Document" style="color: #999999" @click.stop="handleAddLessonMission(data)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="删除" placement="top">
                <el-button type="text" :icon="Delete" style="color: #999999" @click.stop="handleDelChapter(data)"></el-button>
              </el-tooltip>
            </div>
          </div>
        </template>
        <div>
          <div>
            <div v-for="(data1,key1) in LessonPeriodList[key]" :key="key1" style="display: flex; justify-content: space-between; border-bottom: solid 1px #999999">
              <div style="flex-grow: 2; padding-left: 20px">
                <div style="width: 100%">
                  <el-icon><DocumentCopy /></el-icon>
                  <span>{{data1.lessonPeriodName}}</span>
                </div>
                <div style="width: 100%">
                  <span>{{data1.chapterIntroduce}}</span>
                </div>
              </div>
              <el-switch v-model="data1.lessonPeriodStatus"
                         :active-value="1"
                         :inactive-value="0" @change="handleLessonPeriodStatusChange(data1)" style="padding-right: 40px">
              </el-switch>
              <div>
                <el-tooltip class="item" effect="dark" content="修改" placement="top">
                  <el-button type="text" :icon="Edit" style="color: #999999" @click.stop="handleEditLessonPeriod(data1)"></el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="删除" placement="top">
                  <el-button type="text" :icon="Delete" style="color: #999999" @click="handleDelLessonPeriod(data1)"></el-button>
                </el-tooltip>
              </div>
            </div>
            <div v-for="(data1,key1) in LessonMissionList[key]" :key="key1" style="display: flex; justify-content: space-between; border-bottom: solid 1px #999999">
              <div style="flex-grow: 2; padding-left: 20px">
                <div style="width: 100%">
                  <el-icon><EditPen /></el-icon>
                  <span>{{data1.missionTitle}}</span>
                </div>
                <div style="width: 100%">
                  <span>开始时间：{{dateFormat(data1.startTime)}} 作业时间:{{data1.missionLimit}}分钟</span>
                </div>
              </div>
              <el-switch v-model="data1.lessonPeriodStatus"
                         :active-value="1"
                         :inactive-value="0" @change="handleLessonMissionStatusChange(data1)" style="padding-right: 40px">
              </el-switch>
              <div>
                <el-tooltip class="item" effect="dark" content="修改" placement="top">
                  <el-button type="text" :icon="Edit" style="color: #999999" @click.stop="handleEditLessonMission(data1)"></el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="删除" placement="top">
                  <el-button type="text" :icon="Delete" style="color: #999999" @click="handleDelLessonMission(data1)"></el-button>
                </el-tooltip>
              </div>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <ChapterDialog ref="chapterDialogRef" :course-id="course.courseId" :chapter-obj="chapterObj" :edit-flag="editFlag" @refreshList="getcourse"/>
    <LessonPeriodDialog ref="LessonPeriodDialogRef" :chapter-id="chapterId" :lesson-period-obj="lessonPeriodObj" :edit-flag="editFlag" @refreshList="getcourse"/>
    <LessonMissionDialog ref="LessonMissionDialogRef" :course-id="course.courseId" :chapter-id="chapterId" :lesson-mission-obj="lessonMissionObj" :edit-flag="editFlag" @refreshList="getcourse"/>
  </div>
</template>

<script setup name="Task">
import {Delete,Edit,FolderAdd,Document,DocumentCopy,EditPen} from "@element-plus/icons-vue";
import {useRoute} from 'vue-router';
import {getCourseById} from "@/api/course";
import { ref } from 'vue'
import {getChapter, removeChapterById, updateChapterById} from "@/api/chapter";
import {getLessonPeriodByChapterId, removeLessonPeriodById, updateLessonPeriodById} from "@/api/lessonperiod";
import ChapterDialog from "@/views/course/components/chapter-dialog.vue";
import LessonPeriodDialog from "@/views/course/components/lessonperiod-dialog.vue"
import LessonMissionDialog from "@/views/course/components/lessonmission-dialog.vue"
import {ElMessage, ElMessageBox} from "element-plus";
import {getLessonMissionByChapterId, removeLessonMissionById, updateLessonMissionById} from "@/api/lessonmission";

const route = useRoute()

const chapterDialogRef = ref(null)
const LessonPeriodDialogRef = ref(null)
const LessonMissionDialogRef = ref(null)

//数据总数
const total = ref(0)
//课程
const course = ref([])
//章节列表
const chapterList = ref([])
//学习内容列表
const LessonPeriodList =ref([])
//开发任务列表
const LessonMissionList =ref([])

const editFlag = ref(false)

const chapterObj = ref({})
const lessonPeriodObj = ref({})
const lessonMissionObj = ref({})
const chapterId = ref({})

const handlechapterStatusChange = (row) =>{
  updateChapterById(row).then(()=>{
    getcourse()
  })
}
const handleLessonPeriodStatusChange = (row) =>{
  updateLessonPeriodById(row).then(()=>{
    getcourse()
  })
}
const handleLessonMissionStatusChange = (row) =>{
  updateLessonMissionById(row).then(()=>{
    getcourse()
  })
}
//添加章节钩子
const handleAddChapter = () => {
  editFlag.value= false
  nextTick(()=>{
    chapterDialogRef.value.openChapterDialog()
  })
}
//修改章节钩子
const handleEditChapter = (row) => {
  editFlag.value= true
  chapterObj.value = row
  nextTick(()=>{
    chapterDialogRef.value.openChapterDialog()
  })
}
//添加学习内容钩子
const handleAddLessonPeriod = (row) =>{
  editFlag.value= false
  chapterId.value = row.chapterId
  nextTick(()=>{
    LessonPeriodDialogRef.value.openLessonPeriodDialog()
  })
}
//修改学习内容钩子
const handleEditLessonPeriod = (row) => {
  editFlag.value= true
  lessonPeriodObj.value = row
  nextTick(()=>{
    LessonPeriodDialogRef.value.openLessonPeriodDialog()
  })
}
//添加开发任务钩子
const handleAddLessonMission = (row) => {
  editFlag.value = false
  chapterId.value = row.chapterId
  nextTick(()=>{
    LessonMissionDialogRef.value.openLessonMissionDialog()
  })
}
//修改开发任务钩子
const handleEditLessonMission  = (row) => {
  editFlag.value = true
  lessonMissionObj.value = row
  nextTick(()=>{
    LessonMissionDialogRef.value.openLessonMissionDialog()
  })
}
//删除开发任务钩子
const handleDelLessonMission = (row) => {
  ElMessageBox.confirm(
    '是否删除该开发任务?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      removeLessonMissionById([row.missionId]).then(()=>{
        ElMessage.success('删除成功')
        getChapterList()
      })
    })
}
//删除学习内容钩子
const handleDelLessonPeriod = (row) => {
  ElMessageBox.confirm(
    '是否删除该学习内容?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      removeLessonPeriodById([row.lessonPeriodId]).then(()=>{
        ElMessage.success('删除成功')
        getChapterList()
      })
    })
}
//删除章节钩子
const handleDelChapter = (row) => {
  ElMessageBox.confirm(
    '是否删除该章节?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      removeChapterById([row.chapterId]).then(()=>{
        ElMessage.success('删除成功')
        getChapterList()
      })
    })
}

//时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进⾏格式化
function dateFormat(time){
  var date=new Date(time);
  var year=date.getFullYear();
  /* 在⽇期格式中，⽉份是从0开始的，因此要加0
   * 使⽤三元表达式在⼩于10的前⾯加0，以达到格式统⼀如 09:11:05
   * */
  var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1): date.getMonth()+1;
  var day=date.getDate()<10 ? "0"+date.getDate(): date.getDate();
  var hours=date.getHours()<10 ? "0"+date.getHours(): date.getHours();
  var minutes=date.getMinutes()<10 ? "0"+date.getMinutes(): date.getMinutes();
  var seconds=date.getSeconds()<10 ? "0"+date.getSeconds(): date.getSeconds();
  // 拼接
  return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
}

//获取课程
const getcourse = () => {
  getCourseById([route.params.courseId]).then((res)=>{
    course.value = res
    getChapterList()
  })
}
//获取章节
const getChapterList = ()=>{
  getChapter(course.value.courseId).then((res)=>{
    chapterList.value = res
    getLPByChapterId()
    getLMByChapterId()
  })
}
//获取学习内容
const getLPByChapterId = () =>{
  // for (var i=0;i<chapterList.value.length;i++){
  //   getLessonPeriodByChapterId(chapterList[i].chapterId).then((res)=>{
  //     LessonPeriodList.value.push(res);
  //     console.log(LessonPeriodList.value)
  //   })
  // }
  chapterList.value.forEach((item, index)=>{
    getLessonPeriodByChapterId(item.chapterId).then((res)=>{
      LessonPeriodList.value.push(res);
    })
  })
}
//获取开发任务
const getLMByChapterId= () => {
  chapterList.value.forEach((item, index)=>{
    getLessonMissionByChapterId(item.chapterId).then((res)=>{
      LessonMissionList.value.push(res);
    })
  })
}
getcourse()
</script>

<style scoped>
.task-head{
  display: flex;
  justify-content: space-between;
}
</style>
