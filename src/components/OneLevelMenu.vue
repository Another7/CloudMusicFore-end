<template>
  <div id="container">
    <el-dialog :visible.sync="dialogVisible" title="Login" width="50%">
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
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="dialogVisible = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <div id="first_child">
      <img src="../assets/girl.png"/>
      <p>网易云音乐</p>
    </div>
    <div id="second_child">
      <ul>
        <li>
          <router-link to="/">发现音乐</router-link>
        </li>
        <li>
          <router-link to="/">我的音乐</router-link>
        </li>
        <li>
          <router-link to="/">朋友</router-link>
        </li>
        <li>
          <router-link to="/">音乐人</router-link>
        </li>
      </ul>
    </div>
    <div id="third_child">
      <input/>
      <p>创作者中心</p>
      <img @click="demo" alt="" src="../assets/girl.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "OneLevelMenu",
    data() {
      return {
        dialogVisible: false,
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
    methods: {
      demo() {
        console.log("demo");
        this.dialogVisible = true;
      }
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    width: 100%;
    height: 75px;
    background-color: #242424;
  }

  #first_child {
    display: flex;
    width: 20%;
    justify-content: flex-end;
    align-items: center;
  }

  #first_child > img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 20px;
  }

  #first_child > p {
    font-size: large;
    color: white;
  }

  #second_child {
    width: 50%;
    display: flex;
  }

  #second_child ul {
    display: flex;
    list-style-type: none;
    height: 100%;
    width: 100%;
  }

  #second_child ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
  }

  #second_child ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #c7c7c7;
    text-decoration: none;
  }

  #second_child ul li :hover {
    background-color: black;
  }

  #third_child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
  }

  #third_child p {
    font-size: large;
    margin-left: 20px;
    margin-right: 20px;
    color: white;
  }

  #third_child input {
    height: 30px;
    border-radius: 30px;
    outline: none;
  }

  #third_child img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 20px;
  }

  input::-webkit-input-placeholder {
    color: lightcoral;
  }
</style>
