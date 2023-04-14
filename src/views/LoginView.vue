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
            if (res.code === 200) {
              setToken(res.token)
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
  background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-ruleForm {
  width: 500px;
  height: 200px;
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  padding: 40px;
  border-radius: 20px;
}

.loginbtn {
  width: 48%;
}

h2 {
  margin: 0 0 10px;
}
</style>
