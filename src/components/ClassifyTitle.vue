<template>
  <div id="container">
    <div class="left">
      <span class="circle"></span>
      <p class="title">{{title}}</p>
    </div>
    <div class="right" v-show="showMore">
      <div class="more">更多</div>
      <div class="arrow">&rarr;</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClassifyTitle",
    props: ["showMore", "title"],
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #C10D0C;
    background-color: #ffffff;
  }

  #container > div {
    display: flex;
    align-items: center;
    height: 50px;
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
    margin-left: 20px;
    font-size: 20px;
  }

  .arrow {
    color: red;
    margin-left: 10px;
    margin-right: 20px;
    font-size: 20px;
    align-items: flex-end;
  }
</style>
