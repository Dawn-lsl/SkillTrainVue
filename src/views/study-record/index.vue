<template>
  <div class="study-record">
    <div class="study-record-search">
      <el-form ref="searchFormRef" :model="listQuery" inline label-position="left" label-width="90px">
        <el-form-item label="课程名：" prop="courseName">
          <el-input v-model="listQuery.courseName" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="章节名：" prop="chapterName">
          <el-input v-model="listQuery.chapterName" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="课时名：" prop="missionTitle">
          <el-input v-model="listQuery.missionTitle" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名：" prop="realName ">
          <el-input v-model="listQuery.realName " placeholder="请输入课程名称"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" :icon="Search" @click="getPageList">搜索</el-button>
        <el-button :icon="Refresh" @click="handleReset">重置</el-button>
      </div>
    </div>
    <div class="study-record-table">
      <el-table
        :data="studyRecordList"
        style="width: 100%"
        border
        stripe
      >
        <!--        max-height="380px"-->
        <el-table-column
          prop="courseName"
          label="课程名"
          width="180"
        />
        <el-table-column
          prop="chapterName"
          label="章节名"
          width="180"
        />
        <el-table-column
          prop="missionTitle"
          label="课时名"
          width="180"
        />
        <el-table-column
          prop="realName"
          label="学生姓名"
          width="180"
        />
        <el-table-column
          prop="studyState"
          label="完成情况"
          align="center"
        >
          <template #default="scope">
            <span>{{scope.row.studyState == 1 ? '已完成' : '开始'}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="studyStartTime"
          label="开始时间"
          align="center"
        />
        <el-table-column
          prop="studyEndTime"
          label="完成时间"
          align="center"
        />
        <el-table-column
          prop="studyState"
          label="状态"
          align="center"
        >
          <template #default="scope">
            <span>{{scope.row.studyState == 1 ? '已完成' : '开始'}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="study-record-pagination">
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
  </div>
</template>

<script setup name="study-record">
import {Search,Refresh} from "@element-plus/icons-vue";
import {getStudyRecordByPage} from "@/api/studyrecord";

//学习记录列表
const studyRecordList = ref([])
//数据总数
const total = ref(0)
//搜索条件
const listQuery =  reactive({
  courseName:'',
  chapterName:'',
  missionTitle:'',
  realName:'',
  no:1,
  size:1
})

const getPageList = () => {
  getStudyRecordByPage(listQuery).then((res)=>{
    studyRecordList.value = res.studyRecordQueryList
    total.value = res.total
  })
}


getPageList()
</script>

<style scoped>
.study-record-search{
  display: flex;
  justify-content: space-between;
}
.study-record-table{
  margin-top: 20px;
}
.study-record-pagination{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
