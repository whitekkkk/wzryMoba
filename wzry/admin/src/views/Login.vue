<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      model: {

      }
    }
  },
  methods: {
    async login(){
      const res = await this.$http.post('login', this.model)//请求接口，发送this.model，传递username和password
      sessionStorage.token = res.data.token //浏览器关闭后token消失
      localStorage.token = res.data.token //保存token 
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  },
}
</script>


<style>
.login-card{
  width: 25rem;
  margin: 10rem auto;
}

</style>