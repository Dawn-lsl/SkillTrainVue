<template>
  <div class="user-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="600px"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <el-scrollbar max-height="400px">
        <el-form ref="userFormRef" :rules="rules" :model="data" label-width="120px">
          <el-form-item label="用户姓名：" prop="realName">
            <el-input v-model="data.realName" placeholder="请输入用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="归属赛项：" prop="departmentId">
            <el-tree-select
              v-model="data.departmentId"
              :data="departmentList"
              check-strictly
              :render-after-expand="false"
              :props="defaultProps"
            >
            </el-tree-select>
          </el-form-item>
          <el-form-item label="手机号码：" prop="mobile">
            <el-input v-model="data.mobile" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="data.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="用户名称：" prop="userName">
            <el-input v-model="data.userName" placeholder="请输入用户名称"></el-input>
          </el-form-item>
          <el-form-item label="用户密码：" prop="password">
            <el-input v-model="data.password" placeholder="请输入用户密码"></el-input>
          </el-form-item>
          <el-form-item label="用户性别：" prop="sex">
            <el-select v-model="data.sex" placeholder="请选择课程类型">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="角色：" prop="typeId">
            <el-select v-model="data.typeId" placeholder="请选择课程类型">
              <el-option label="学生" :value="1"></el-option>
              <el-option label="教师" :value="2"></el-option>
            </el-select>
          </el-form-item>
<!--          <el-form-item label="排序：" prop="courseSort">-->
<!--            <el-input v-model="data.courseSort" placeholder="请输入排序" style="width: 300px"></el-input>-->
<!--          </el-form-item>-->

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

<script setup name="UserDialog">
import {ElMessage} from "element-plus";
import {saveUser,updateById} from "@/api/uuser"

const props = defineProps({
  /**
   * true 修改
   * false 新增
   */
  editFlag:{
    type:Boolean,
    required:true
  },
  userObj:{
    type:Object,
    default:()=>{
      return{}
    }
  },
  departmentList:{
  },
})

const defaultProps = {
  children: 'children',
  label: 'departmentName',
  value:'departmentId'
}

const dialogVisible = ref(false)

const title = ref('添加课程信息')
const userFormRef = ref(null)

const userForm = reactive({
  data:{
    realName:'',
    departmentId:'',
    mobile:'',
    email:'',
    userName:'',
    password:'',
    sex:'',
    typeId:'',
    description:'',
    createTime:''
  },
  rules:{
    realName:[
      {required:true,message:'请输入用户姓名',trigger:'blur'}
    ],
  }
})
const emits = defineEmits(['refreshList'])

const {data,rules} = toRefs(userForm)

const openUserDialog = () =>{
  if(props.editFlag){
    title.value = "修改用户"
    Object.assign(userForm.data,props.userObj)
  }else{
    title.value = "添加用户"
  }
  dialogVisible.value = true
}

const handleSubmit = () => {
  userFormRef.value.validate((valid)=>{
    if(valid){
      if (!props.editFlag){
        data.value.createTime=dateFormat(new Date());
        saveUser(data.value).then((res)=>{
          ElMessage.success('提交成功')
          dialogVisible.value = false
          emits('refreshList')
        })
      }else{
        data.value.createTime=dateFormat(new Date());
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

const handleClose = () => {
  userForm.data={
    realName:'',
    departmentId:'',
    mobile:'',
    email:'',
    userName:'',
    password:'',
    sex:'',
    typeId:'',
    description:''
  }
  nextTick(()=>{
    userFormRef.value.clearValidate()
  })
}

defineExpose({openUserDialog})
</script>

<style scoped>

</style>
