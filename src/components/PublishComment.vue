<template>
  <div id="container">
    <div class="comment-number">
      <span>评论</span>
      <span>1234</span>
    </div>
    <div class="comment-area">
      <div class="comment-input">
        <img src="../assets/TIM5.jpg"/>
        <textarea placeholder="评论"></textarea>
      </div>
    </div>
    <div class="comment-limit">
      <span>1234</span>
      <span class="comment-button">
          评论
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PublishComment"
  }
</script>

<style scoped>
  #container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 150px;
  }

  #container > div {
    /*margin: 0 auto;*/
  }

  .comment-number {
    border-bottom: 2px solid #c20c0c;
  }

  .comment-number > span:first-child {
    font-size: larger;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .comment-area {
  }

  .comment-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .comment-input > img {
    width: 50px;
    height: 50px;
  }

  textarea {
    height: 60px;
    width: 80%;

  }

  .comment-limit {
    text-align: right;
  }

  .comment-button {
    background-color: #2d7dca;
    color: white;
    padding: 2px 10px;
    cursor: pointer;
    margin-left: 10px;
  }
</style>
