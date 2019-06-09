<template>
  <div id="container">
    <div class="panel">
      <p id="title">Register for NetEase's cloud music</p>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="email">
          <el-input placeholder="Account(Email)" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="Password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item id="button">
          <el-button @click="demo" id="back">
            Back Login
          </el-button>
          <el-button @click="register()" id="register" type="primary">
            Register
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        rules: {
          email: [{
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
    created() {
      this.form.email = this.$route.query.email;
    },
    methods: {
      demo() {
        this.$router.push('/login');
      },
      register() {
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

  #button > div {
    display: flex;
    justify-content: space-around;
  }

  p {
    text-align: center;
    font-family: simsun, serif;
    font-size: 20px;
    word-spacing: 3px;
  }

  #back {
    margin-left: 140px;
  }

  #register {
    margin-left: 100px;
  }
</style>
