<template>
  <div id="container">
    <div class="title">
      <div class="menu">
        <ol>
          <li>
            <router-link to="/recommend">推荐</router-link>
          </li>
          <li><a href="">排行榜</a></li>
          <li><a href="">歌单</a></li>
          <li><a href="">主播电台</a></li>
          <li><a href="">歌手</a></li>
          <li><a href="">新歌上架</a></li>
        </ol>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Footer from "./Footer";

  export default {
    name: "TwoLevelMenu",
    components: {Footer}
  }
</script>

<style scoped>
  #container {
    background-color: #ffffff;
  }

  .title {
    background-color: #c20c0c;
  }

  .menu {
    background-color: #c20c0c;
    height: 35px;
    width: 70%;
    margin: 0 auto;
  }

  ol {
    height: 100%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 70%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
    width: 50%;
    text-align: center;
    border-radius: 30px;
  }

  li {
    display: flex;
    align-items: center;
    height: 100%;
    width: 150px;
  }

  a:hover {
    background-color: #9b0909;
  }

  .content {
    margin: 0 auto;
    background-color: #f5f5f5;
  }
</style>
