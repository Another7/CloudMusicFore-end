<template>
  <div id="container">
    <div class="panel">
      <p @click="demo()" id="title">Login for NetEase's cloud music</p>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="email">
          <el-input placeholder="Account(Email)" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="Password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item id="button">
          <el-button @click="demo" id="login" type="primary">
            Login
          </el-button>
          <el-button @click="register()" id="register">
            Register
          </el-button>
        </el-form-item>
      </el-form>
      <el-dialog :visible.sync="dialogVisible" title="提示" width="100%">
        <span>这是一段信息</span>
        <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="dialogVisible = false" type="primary">确 定</el-button>
      </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        dialogVisible: false,
        form: {
          email: '',
          password: ''
        },
        rules: {
          email: [
            {
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur', 'change']
            }
          ]
        }
      }
    },
    methods: {
      demo() {
        // this.dialogVisible = true;
        //登录逻辑处理
        this.axios.get('/data')
          .then((response) => {
            this.form = response.data;
            if (this.form.email === response.data.email) {
              console.log("push、、、")
            } else {
              console.log("failed")
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      register() {
        this.$router.push({
          path: '/register',
          query: {
            email: this.form.email
          }
        });
      }
    }
  }
</script>

<style scoped>
  #container {
    width: 70%;
    height: 700px;
    margin: 0 auto;
  }

  .panel {
    width: 60%;
    margin: 0 auto;
  }

  #title {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xx-large;
  }

  /*TODO 解决按钮样式问题*/
  /*本想让登录注册按钮居中，发现覆盖无效*/
  .el-form-item__content {
    display: flex;
    justify-content: space-around;
  }

  #button > div {
    display: flex;
    justify-content: space-between;
  }

  #login {
    margin-left: 140px;
  }

  #register {
    margin-left: 100px;
  }

  p {
    text-align: center;
    font-family: simsun, serif;
    font-size: 20px;
    word-spacing: 3px;
  }

  .el-dialog__wrapper {
    margin: 0 auto;
    width: 40%;
  }
</style>
