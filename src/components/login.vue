<template>
  <div id="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <!-- 用户名 -->
      <el-form-item prop="admin">
        <el-input prefix-icon="el-icon-user-solid" v-model="ruleForm.admin" maxlength="5" clearable class="userint"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="psw">
        <el-input prefix-icon="el-icon-lock" v-model="ruleForm.psw" maxlength="14" show-password clearable class="pswint"></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="lgbtn">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        ruleForm:{
          admin:'',
          psw:''
        },
        rules:{
          admin: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          psw: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');// 这里放处理登录请求的代码
            const _t = this;
            _t.$ajax({
              url:'/dianli/back/login/login.v1',
              data:{'account':_t.ruleForm.admin,'password':_t.ruleForm.psw}
            })
            .then(res=>{
              console.log(res);
              if(res.data.code == 0){
                _t.$message({
                  message:'您好，'+res.data.data.account+' 。欢迎登录！',
                  type:'success'
                });
                _t.$router.replace({path:'/index'});
              }else{
                _t.$message({
                  message:res.data.msg,
                  type:'error'
                });
              };
            })
            .catch(err=>{
              console.log(err);
              return;
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  #login {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/img/login-back.jpg') no-repeat;
    background-size: 100% 100%;
    .demo-ruleForm {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 30px;
      padding-bottom: 8px;
      border-radius: 10px;
      overflow: hidden;
      transform: scale(0);
      animation: panel 1s linear forwards;
    }
    >>> .el-input__inner {
      border-width: 0 0 1px;
      background: transparent;
      width: 250px;
      border-radius: 5px;
      color: #fff;
    }
    >>> .el-button {
      width: 100%;
    }
    .userint ,.pswint ,.lgbtn {
      transform: translateY(-70px) scale(0);
      opacity: 0;
      animation: userint .7s .4s forwards;
    }
    /*密码*/
    .pswint {
      animation-delay: .7s;
    }
    /*登录*/
    .lgbtn {
      animation-delay: 1s;
    }
  }
  @keyframes panel {/*面板*/
    100% {
      transform: scale(1);
    }
  }
  @keyframes userint {/*用户名 密码 登录*/
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
</style>
