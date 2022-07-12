<template>
  <div class="department">
    <div class="department-search">
      <el-form ref="searchFormRef" :model="listQuery" inline label-position="left" label-width="90px">
        <el-form-item label="赛项名称：" prop="departmentName">
          <el-input v-model="listQuery.departmentName" placeholder="请输入赛项名称"></el-input>
        </el-form-item>
        <el-form-item label="状态：" prop="departmentStatus" label-width="60px">
          <el-select v-model="listQuery.departmentStatus" placeholder="全部状态">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="停用" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" :icon="Search" @click="getDepartmentList">搜索</el-button>
        <el-button :icon="Refresh" @click="handleReset">重置</el-button>
      </div>
    </div>
    <div class="course-setting">
      <el-button type="success" plain :icon="Plus" @click="handleDepartmentAdd"></el-button>
    </div>
    <div class="department-table">
      <el-table
        :data="departmentList"
        style="width: 100%"
        border
        stripe
        row-key="departmentId"
        :tree-props="{children:'children'}"
      >
        <!--        max-height="380px"-->
        <el-table-column
          prop="departmentName"
          label="赛项名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="departmentSort"
          label="排序"
          align="center"
        />
        <el-table-column
          prop="departmentStatus"
          label="状态"
          align="center"
        >
          <template #default="scope">
            <span>{{scope.row.departmentStatus == 1 ? '正常' : '停用'}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop= "createTime"
          label="创建时间"
          width="180"
        >
          <template #default="scope">
            {{dateFormat(scope.row.createTime)}}
          </template>
        </el-table-column>>
        <el-table-column
          label="操作"
          align="center"
        >
          <template #default="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top">
              <el-button type="text" :icon="Edit" style="color: #999999" @click="handleEdit(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="新增" placement="top">
              <el-button type="text" :icon="FolderAdd" style="color: #999999" @click="handleDepartmentAdd2(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button type="text" :icon="Delete" style="color: #999999" @click="handleDel(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <DepartmentDialog ref="departmentDialogRef" :edit-flag="editFlag" :department-obj="departmentObj" :department-obj2="departmentObj2" :department-list="departmentList" @refreshList="getDepartmentList"/>
  </div>
</template>

<script setup name="department">
import {Search,Refresh,Plus,Delete,Edit,FolderAdd} from "@element-plus/icons-vue";
import DepartmentDialog from "@/views/department/components/department-dialog.vue"
import {getDepartment,removeById} from "@/api/department";
import {ElMessage, ElMessageBox} from "element-plus";

//组件绑定
const searchFormRef = ref(null)
const departmentDialogRef = ref(null)

//搜索条件
const listQuery =  reactive({
  departmentName:'',
  departmentStatus:'',
})

const editFlag = ref(false)

const departmentObj = ref({})
const departmentObj2 = ref({})
//赛项列表
const departmentList = ref([])

//添加赛项钩子
const handleDepartmentAdd = () => {
  editFlag.value = false
  nextTick(()=>{
    departmentDialogRef.value.openDepartmentDialog()
  })
}
const handleDepartmentAdd2 = (row) => {
  editFlag.value= false
  departmentObj2.value.pid = row.departmentId
  nextTick(()=>{
    departmentDialogRef.value.openDepartmentDialog()
  })
}
//修改赛项钩子
const handleEdit = (row) => {
  editFlag.value= true
  departmentObj.value = row
  nextTick(()=>{
    departmentDialogRef.value.openDepartmentDialog()
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
      removeById(row.departmentId).then(()=>{
        ElMessage.success('删除成功')
        getDepartmentList()
      })
    })
}

const getDepartmentList = ()=>{
  getDepartment(listQuery).then((res)=>{
    departmentList.value = arrToTree(res)
  })
}

const handleReset = () => {
  searchFormRef.value.resetFields()
}

function arrToTree(arr, pid = 0) {
  const res = [];
  arr.forEach(item => {
    if (item.pid === pid.toString()) {

      // 这样每次都需要遍历整个数组，因此时间复杂度为 n*n
      // const children = arrToTree(arr, item.id)

      // 往下递归时，每次数组的大小都在减小，每次都筛选掉父代元素，最终的时间复杂度为 n*logn
      const children = arrToTree(arr.filter(v => v.pid !== pid), item.departmentId);
      if (children.length) {
        res.push({ ...item, children })
      } else {
        res.push({ ...item })
      }
    }
  });
  return res;
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

getDepartmentList()
</script>

<style scoped>
.department-search{
  display: flex;
  justify-content: space-between;
}
.department-table{
  margin-top: 20px;
}
</style>
