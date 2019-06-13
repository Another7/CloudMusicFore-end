<template>
  <div id="container">
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
      <el-dropdown @command="handleCommand" placement="bottom">
        <span class="el-dropdown-link">
          <i @click="login()" class="">
            <img alt="" src="../assets/girl.png" v-if="userStatus.isLogin">
            <p v-else>登录</p>
          </i>
        </span>
        <el-dropdown-menu slot="dropdown" v-if="userStatus.isLogin">
          <el-dropdown-item :command="item.key" :key="item.key" v-for="item in dropItem">{{item.value}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OneLevelMenu",
    data() {
      return {
        userStatus: {
          isLogin: false
        },
        dropItem: [
          {
            key: "myHome",
            value: "我的主页"
          },
          {
            key: "myMessage",
            value: "我的消息"
          },
          {
            key: "personalSetting",
            value: "个人设置"
          },
          {
            key: "logout",
            value: "退出"
          }
        ]
      }
    },
    methods: {
      handleCommand(command) {
        switch (command) {
          case "myHome":
            console.log(command);
            break;
          case "myMessage":
            break;
          case "personalSetting":
            break;
          case "logout":
            break;
          default:
            break;
        }
      },
      login() {
        this.$router.push({
          name: "login"
        })
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
