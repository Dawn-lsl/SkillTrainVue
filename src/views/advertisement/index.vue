<template>
  <div class="advertisement">
    <div class="advertisement-setting">
      <el-button type="success" plain :icon="Plus" @click="handleAdvertisementAdd"></el-button>
      <el-button type="danger" plain :icon="Delete" :disabled="!selectionList.length > 0" @click="handleBatchDel"></el-button>
    </div>
    <div class="advertisement-table">
      <el-table
        :data="advertisementList"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
        <el-table-column  type="selection" width="55" align="center"/>
        <el-table-column
          prop="advertisementNumber"
          label="编号"
          width="220"
          align="center"
        />
        <el-table-column
          prop="advertisementSort"
          label="排序"
          width="220"
          align="center"
        />
        <el-table-column
          prop="advertisementName"
          label="标题"
        />
        <el-table-column
          label="操作"
          align="center"
          width="220"
        >
          <template #default="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <el-button type="text" :icon="Edit" style="color: #999999" @click="handleEdit(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button type="text" :icon="Delete" style="color: #999999" @click="handleDel(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="advertisement-pagination">
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
    <AdvertisementDialog ref="advertisementDialogRef" :advertisement-obj="advertisementObj" :edit-flag="editFlag" @refreshList="getPageList"/>
  </div>
</template>

<script setup name="advertisement">
import {Plus,Delete,Edit} from "@element-plus/icons-vue";
import AdvertisementDialog from "@/views/advertisement/components/advertisement-dialog.vue"
import {getAdvertisementByPage,removeByIds} from "@/api/advertisement";
import {ElMessage, ElMessageBox} from "element-plus";

const advertisementDialogRef = ref(null)
//数据总数
const total = ref(0)
//信息列表
const advertisementList = ref([])
//选中列表
const selectionList = ref([])
//页数条件
const listQuery = reactive({
  no:1,
  size:2
})

const editFlag = ref(false)

const advertisementObj = ref({})

const getPageList = () => {
  getAdvertisementByPage(listQuery).then((res)=>{
    advertisementList.value = res.records
    total.value = res.total
  })
}
//添加按钮钩子
const handleAdvertisementAdd = () => {
  editFlag.value= false
  nextTick(()=>{
    advertisementDialogRef.value.openDialog()
  })
}
// 修改按钮钩子
const handleEdit = (row) => {
  editFlag.value= true
  advertisementObj.value = row
  nextTick(()=>{
    advertisementDialogRef.value.openDialog()
  })
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
      removeByIds([row.advertisementId]).then(()=>{
        ElMessage.success('删除成功')
        getPageList()
      })
    })
}

const handleSelectionChange = (selection) =>{
  selectionList.value=selection.map(v => v.advertisementId)
}

const handleBatchDel = () => {
  removeByIds(selectionList.value).then(()=>{
    ElMessage.success('删除成功')
    getPageList()
  })
}

getPageList()
</script>

<style scoped>
.advertisement-table{
  margin-top: 20px;
}
.advertisement-pagination{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
