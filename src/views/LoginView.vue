<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
      <h2>后台管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button class="loginbtn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button class="loginbtn" @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref } from "vue";
import { LoginData } from "../type/login";
import type { FormInstance } from "element-plus";
import { login } from '../request/api'
import { useRouter } from 'vue-router'
import { setToken } from '@/utils/storage'
import { ElMessage } from 'element-plus'
export default {
  name: "todo-item",
  setup() {
    const ruleFormRef = ref<FormInstance>();
    const router = useRouter()
    const data = reactive(new LoginData());
    const rules = {
      username: [
        {
          required: true,
          message: "请输入您的账号",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "账号的长度再 3 到 10",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入您的密码",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "密码的长度再 3 到 10",
          trigger: "blur",
        },
      ],
    };

    const submitForm = (formEl: FormInstance | undefined) => {
      console.log(formEl);

      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm).then((res) => {
            console.log(res);
            
            if (res.status === 200) {
              setToken(res.token)
              // localStorage.setItem('token',res.data.token)
              router.push("/dashboard")
            } else {
              ElMessage.error(res.message)
            }
          })

        } else {
          console.log("error submit!");
          return false;
        }
      });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    return {
      ...toRefs(data),
      rules,
      ruleFormRef,
      submitForm,
      resetForm
    };
  },
};
</script>
<style scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: rgb(44, 15, 91);
  padding: 1px;
  text-align: center;
}

.demo-ruleForm {
  width: 500px;
  margin: 200px auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 20px;
}

.loginbtn {
  width: 48%;
}

h2 {
  margin-bottom: 10px;
}
</style>
