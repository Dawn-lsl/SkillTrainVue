<template>
  <div class="user">
    <el-container>
      <el-aside width="300px">
        <div class="demo-input-suffix">
            <el-input
              v-model="departmentQuery.departmentName"
              class="w-50 m-2"
              size="large"
              placeholder="请输入赛项名称"
              :prefix-icon="Search"
              style="width: 12.5rem;"
            />
        </div>
        <div>
          <el-tree :data="departmentList" :props="defaultProps" />
        </div>
      </el-aside>
      <el-main>
        <div class="user-main">
          <div class="user-search">
            <el-form ref="searchFormRef" :model="listQuery" inline label-position="left" label-width="90px">
              <el-form-item label="用户名称：" prop="userName">
                <el-input v-model="listQuery.userName" placeholder="请输入用户名称"></el-input>
              </el-form-item>
              <el-form-item label="手机号码：" prop="mobile">
                <el-input v-model="listQuery.mobile" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item label="用户状态：" prop="state" label-width="100px">
                <el-select v-model="listQuery.state" placeholder="请选择状态">
                  <el-option label="用户状态" value=""></el-option>
                  <el-option label="正常" value="1"></el-option>
                  <el-option label="停用" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div >
              <el-button type="primary" :icon="Search" @click="getUserList" >搜索</el-button>
              <el-button :icon="Refresh" @click="handleReset">重置</el-button>
            </div>
          </div>
          <div class="user-setting">
            <el-button type="success" plain :icon="Plus" @click="handleUserAdd"></el-button>
            <el-button type="danger" plain :icon="Delete" :disabled="!selectionList.length > 0" @click="handleBatchDel"></el-button>
            <el-button type="primary" plain :icon="Upload" @click="handleUpload" />
            <el-button type="primary" plain :icon="Download" @click="handleDownload" />
          </div>
          <div class="user-table">
            <el-table
              :data="userList"
              style="width: 100%"
              border
              stripe
              @selection-change="handleSelectionChange"
            >
              <!--        max-height="380px"-->
              <el-table-column  type="selection" width="55" align="center"/>
              <el-table-column
                prop="userNumber"
                label="用户编号"
                align="center"
              />
              <el-table-column
                prop="userName"
                label="用户名称"
                width="100"
              />
              <el-table-column
                prop="realName"
                label="用户姓名"
                width="100"
              />
              <el-table-column
                prop="typeId"
                label="角色"
                align="center"
              >
                <template #default="scope">
                  <span>{{scope.row.typeId == 1 ? '学生' : scope.row.typeId == 2?'教师':'超级管理员'}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="departmentName"
                label="赛项"
                width="100"
              />
              <el-table-column
                prop="mobile"
                label="手机号码"
                width="180"
              />
              <el-table-column
                prop="courseStatus"
                label="状态"
                align="center"
                width="100"
              >
                <template #default="scope">
                  <el-switch v-model="scope.row.state"
                             :active-value="1"
                             :inactive-value="0" @change="handleStatusChange(scope.row)"></el-switch>
                </template>
              </el-table-column>
              <el-table-column
                prop="createTime"
                label="创建时间"
                width="180"
              >
                <template #default="scope">
                  <span>{{dateFormat(scope.row.createTime)}}</span>
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
                  <el-tooltip class="item" effect="dark" content="删除" placement="top">
                    <el-button type="text" :icon="Delete" style="color: #999999" @click="handleDel(scope.row)"></el-button>
                  </el-tooltip>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="user-pagination">
            <el-pagination
              v-model:currentPage="listQuery.no"
              v-model:page-size="listQuery.size"
              :page-sizes="[10, 20, 50, 100]"
              background
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="getUserList"
              @current-change="getUserList"
            />
          </div>
        </div>
      </el-main>
    </el-container>
    <UserDialog ref="userDialogRef" :user-obj="userObj" :edit-flag="editFlag" :department-list="departmentList" @refreshList="getUserList"/>
    <UserImport ref="userImportRef" @refreshList="getUserList"/>
  </div>
</template>

<script setup name="user">
import { Search,Plus,Delete,FolderAdd,Edit,Refresh,Upload,Download } from '@element-plus/icons-vue'
import {getDepartment} from "@/api/department";
import {getUserByPage,updateById,removeByIds} from "@/api/uuser"
import UserDialog from "@/views/user/components/user-dialog.vue"
import UserImport from "@/views/user/components/user-import.vue"
import {ElMessage, ElMessageBox} from "element-plus";
import {exportExcel} from "@/api/comman";
//组件绑定
const searchFormRef = ref(null)
const userDialogRef = ref(null)
const userImportRef = ref(null)
//数据总数
const total = ref(0)
//赛项列表
const departmentList = ref([])
const userList = ref([])
//选中列表
const selectionList = ref([])

const handleReset = () => {
  searchFormRef.value.resetFields()
}

const handleUpload = () => {
  userImportRef.value.openDialog()
}

const handleDownload = () => {
  exportExcel().then((res)=>{
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
    aLink.setAttribute('download', '导出用户信息.xlsx' )
    document.body.appendChild(aLink)

    // 模拟点击下载
    aLink.click()

    // 移除改下载标签
    document.body.removeChild(aLink);
  })
}

const handleStatusChange = (row) => {
  updateById(row).then(()=>{
    getUserList()
  })
}

const handleSelectionChange = (selection) =>{
  selectionList.value=selection.map(v => v.userId)
}

const handleBatchDel = () => {
  removeByIds(selectionList.value).then(()=>{
    ElMessage.success('删除成功')
    getUserList()
  })
}

const editFlag = ref(false)

const userObj = ref({})

// 添加按钮钩子
const handleUserAdd = () => {
  editFlag.value= false
  nextTick(()=>{
    userDialogRef.value.openUserDialog()
  })
}
// 修改按钮钩子
const handleEdit = (row) => {
  editFlag.value= true
  userObj.value = row
  nextTick(()=>{
    userDialogRef.value.openUserDialog()
  })
}

const defaultProps = {
  children: 'children',
  label: 'departmentName',
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
      removeByIds([row.userId]).then(()=>{
        ElMessage.success('删除成功')
        getUserList()
      })
    })
}

const getDepartmentList = ()=>{
  getDepartment(departmentQuery).then((res)=>{
    departmentList.value = arrToTree(res)
  })
}
const getUserList = () =>{
  getUserByPage(listQuery).then((res)=>{
    userList.value = res.userQueryList
    total.value = res.total
  })
}
const departmentQuery = reactive({
  departmentName:''
})
const listQuery =  reactive({
  userName:'',
  mobile:'',
  state:'',
  no:1,
  size:2
})

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
getUserList()
</script>

<style scoped>
.user-search{
  display: flex;
  justify-content: space-between;
}
.user-table{
  margin-top: 20px;
}
.user-pagination{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
