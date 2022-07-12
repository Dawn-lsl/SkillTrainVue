<template>
  <div class="department-dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="600px"
      :destroy-on-close="true"
      @close="handleClose"
    >
      <el-scrollbar max-height="400px">
        <el-form ref="departmentFormRef" :rules="rules" :model="data" label-width="120px">

          <el-form-item label="选择上级：" prop="pid">
            <el-tree-select
              v-model="data.pid"
              :data="departmentList"
              check-strictly
              :render-after-expand="false"
              :props="defaultProps"
            >
            </el-tree-select>
          </el-form-item>
          <el-form-item label="赛项名称：" prop="departmentName">
            <el-input v-model="data.departmentName" placeholder="请输入赛项名称"></el-input>
          </el-form-item>

          <el-form-item label="显示排序：" prop="departmentSort">
            <el-input v-model="data.departmentSort" placeholder="请输入排序" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="负责人：" prop="departmentCharge">
            <el-input v-model="data.departmentCharge" placeholder="请输入负责人" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="departmentMobile">
            <el-input v-model="data.departmentMobile" placeholder="请输入联系电话" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="departmentMail">
            <el-input v-model="data.departmentMail" placeholder="请输入邮箱" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="部门状态" prop="departmentStatus">
            <el-radio-group v-model="data.departmentStatus">
              <el-radio :label="1" size="large">正常</el-radio>
              <el-radio :label="0" size="large">停用</el-radio>
            </el-radio-group>
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

<script setup name="DepartmentDialog">
import {ElMessage} from "element-plus";
import {saveDepartment,updateById} from "@/api/department";

const dialogVisible = ref(false)

const defaultProps = {
  children: 'children',
  label: 'departmentName',
  value:'departmentId'
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
  departmentObj:{
    type:Object,
    default:()=>{
      return{}
    }
  },
  departmentList:{
  },
  departmentObj2:{}
})


const title = ref('添加课程信息')

const departmentFormRef = ref(null)

const departmentForm = reactive({
  data:{
    pid:'',
    departmentName:'',
    departmentSort:'',
    departmentCharge:'',
    departmentMobile:'',
    departmentMail:'',
    departmentStatus:'',
    createTime:''
  },
  rules:{
    departmentName:[
      {required:true,message:'请输入赛程名称',trigger:'blur'}
    ],
    departmentSort:[
      {required:true,message:'请输入排序',trigger:'blur'}
    ],
  }
})
const emits = defineEmits(['refreshList'])

const {data,rules} = toRefs(departmentForm)

const handleSubmit = () => {
  departmentFormRef.value.validate((valid)=>{
    if(valid){
      if (!props.editFlag){
        if(data.value.pid==null || data.value.pid == ''){
          data.value.pid=0
        }
        data.value.createTime=dateFormat(new Date());
        saveDepartment(data.value).then((res)=>{
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

const openDepartmentDialog = () =>{
  if(props.editFlag){
    title.value = "修改赛项"
    Object.assign(departmentForm.data,props.departmentObj)
  }else{
    title.value = "添加赛项"
    Object.assign(departmentForm.data,props.departmentObj2)
  }
  dialogVisible.value = true
}

const handleClose = () => {
  departmentForm.data={
    pid:'',
    departmentName:'',
    departmentSort:'',
    departmentCharge:'',
    departmentMobile:'',
    departmentMail:'',
    departmentStatus:'',
    createTime:''
  }
  nextTick(()=>{
    departmentFormRef.value.clearValidate()
  })
}

defineExpose({openDepartmentDialog})
</script>

<style scoped>

</style>
