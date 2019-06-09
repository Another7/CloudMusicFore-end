<template>
  <div id="container">
    <div id="left">
      <span class="circle"></span>
      <span class="title">热门推荐</span>
      <ul>
        <li>华语</li>
        <span>|</span>
        <li>流行</li>
        <span>|</span>
        <li>摇滚</li>
        <span>|</span>
        <li>民谣</li>
        <span>|</span>
        <li>电子</li>
      </ul>
    </div>
    <div id="right">
      <div>更多</div>
      <div class="arrow">&rarr;</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubTitle"
  }
</script>

<style scoped>
  #container {
    background-color: #ffffff;
    height: 50px;
    display: flex;
    border-bottom: 2px solid #C10D0C;
  }

  #left {
    display: flex;
    align-items: center;
    width: 50%;
  }

  #right {
    width: 50%;
  }

  .circle {
    display: block;
    width: 10px;
    height: 10px;
    margin-left: 20px;
    border-radius: 10px;
    border: 5px solid #c10d0c;
  }

  .title {
    margin-left: 10px;
    font-size: 20px;
  }

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    margin-left: 20px;
  }

  ul li {
    font-size: 15px;
    margin: 0 10px;
  }

  #right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .arrow {
    color: red;
    margin-left: 10px;
    margin-right: 20px;
    font-size: 20px;
  }
</style>
