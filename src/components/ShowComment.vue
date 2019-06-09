<template>
  <div id="container">
    <img src="../assets/TIM5.jpg"/>
    <div>
      <div class="comment">
        <a href="">因为了解</a>：欠你的、、、
      </div>
      <div class="little-pie">
          <span class="left">
            <span>5月28日 22:36</span>
          </span>
        <span class="right">
            <span>点赞</span>
            |
            <span>回复</span>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShowComment"
  }
</script>

<style scoped>
  #container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px dotted #ccc;
    margin-top: 10px;
  }

  #container > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
  }

  .little-pie {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-right: 10px;
  }
</style>
