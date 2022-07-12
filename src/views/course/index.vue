<template>
  <div class="course">
    <div class="course-search">
      <el-form ref="searchFormRef" :model="listQuery" inline label-position="left" label-width="90px">
        <el-form-item label="课程名称：" prop="courseName">
          <el-input v-model="listQuery.courseName" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="状态：" prop="courseStatus" label-width="60px">
          <el-select v-model="listQuery.courseStatus" placeholder="请选择状态">
            <el-option label="请选择状态" value=""></el-option>
            <el-option label="启用" value="1"></el-option>
            <el-option label="禁用" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程类型：" prop="courseType">
          <el-select v-model="listQuery.courseType" placeholder="请选择课程类型">
            <el-option label="请选择课程类型" value=""></el-option>
            <el-option label="普通课程" value="1"></el-option>
            <el-option label="实训课程" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" :icon="Search" @click="getPageList">搜索</el-button>
        <el-button :icon="Refresh" @click="handleReset">重置</el-button>
      </div>
    </div>
    <div class="course-setting">
      <el-button type="success" plain :icon="Plus" @click="handleCourseAdd"></el-button>
      <el-button type="danger" plain :icon="Delete" :disabled="!selectionList.length > 0" @click="handleBatchDel"></el-button>
    </div>
    <div class="course-table">
      <el-table
        :data="courseList"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
<!--        max-height="380px"-->
        <el-table-column  type="selection" width="55" align="center"/>
        <el-table-column
          prop="courseName"
          label="课程名称"
          width="180"
        />
        <el-table-column
          prop="courseStatus"
          label="状态"
          align="center"
          width="180"
        >
        <template #default="scope">
          <el-switch v-model="scope.row.courseStatus"
                     :active-value="1"
                     :inactive-value="0" @change="handleStatusChange(scope.row)"></el-switch>
        </template>
        </el-table-column>
        <el-table-column
          prop="course"
          label="课程类型"
          align="center"
        >
          <template #default="scope">
            <span>{{scope.row.courseType == 1 ? '普通课程' : '实训课程'}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="courseSort"
          label="排序"
          align="center"
        />
        <el-table-column
          label="操作"
          align="center"
        >
          <template #default="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <el-button type="text" :icon="Edit" style="color: #999999" @click="handleEdit(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="添加章节" placement="top">
              <el-button type="text" :icon="FolderAdd" style="color: #999999" @click="handleAddTask(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button type="text" :icon="Delete" style="color: #999999" @click="handleDel(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="course-pagination">
      <el-pagination
        v-model:currentPage="listQuery.no"
        v-model:page-size="listQuery.size"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="getPageList"
        @current-change="getPageList"
      />
    </div>
    <CourseDialog ref="courseDialogRef" :course-obj="courseObj" :edit-flag="editFlag" @refreshList="getPageList"/>
  </div>
</template>

<script setup name="course">
import {Search,Refresh,Plus,Delete,Edit,FolderAdd} from "@element-plus/icons-vue";
import CourseDialog from "@/views/course/components/course-dialog.vue";
import {getCourseByPage, removeByIds, updateById} from "@/api/course";
import {ElMessage, ElMessageBox} from "element-plus";
import {useRouter} from 'vue-router';

const router = useRouter()
//组件绑定
const searchFormRef = ref(null)
const courseDialogRef = ref(null)
//数据总数
const total = ref(0)
//课程列表
const courseList = ref([])
//选中列表
const selectionList = ref([])
//搜索条件
const listQuery =  reactive({
  courseName:'',
  courseStatus:'',
  courseType:'',
  no:1,
  size:2
})

const editFlag = ref(false)

const courseObj = ref({})

const getPageList = ()=>{
  console.log(listQuery);
  getCourseByPage(listQuery).then((res)=>{
    courseList.value = res.records
    total.value = res.total
  })
}
// 添加按钮钩子
const handleCourseAdd = () => {
  editFlag.value= false
  nextTick(()=>{
    courseDialogRef.value.openDialog()
  })
}
// 修改按钮钩子
const handleEdit = (row) => {
  editFlag.value= true
  courseObj.value = row
  nextTick(()=>{
    courseDialogRef.value.openDialog()
  })
}
const handleAddTask = (row) => {
  router.push({name:'Task',params:{courseId: row.courseId}})
}
const handleDel = (row) => {
  ElMessageBox.confirm(
    '是否删除该课程?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      removeByIds([row.courseId]).then(()=>{
        ElMessage.success('删除成功')
        getPageList()
      })
    })
}

const handleReset = () => {
  searchFormRef.value.resetFields()
}

const handleStatusChange = (row) =>{
  updateById(row).then(()=>{
    getPageList()
  })
}

const handleSelectionChange = (selection) =>{
  // selection.forEach(v=> {
  //   if (selectionList.filter(e=> e===v.courseId).length===0) {
  //     selectionList.push(v.courseId)
  //   }
  // })
  selectionList.value=selection.map(v => v.courseId)
}

const handleBatchDel = () => {
  removeByIds(selectionList.value).then(()=>{
    ElMessage.success('删除成功')
    getPageList()
  })
}

getPageList()
</script>

<style scoped lang="scss">
.course-search{
  display: flex;
  justify-content: space-between;
}
.course-table{
  margin-top: 20px;
}
.course-pagination{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
