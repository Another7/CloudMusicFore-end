<template>
  <div id="container">
    <div class="sheet-info">
      <img class="sheet-info cover" src="../assets/TIM5.jpg"/>
      <div class="sheet-info right">
        <div class="sheet-name">
          <span>歌单</span>
          <span>歌单名称</span>
        </div>
        <div class="sheet-creator">
          <img class="creator-image" src="../assets/girl.png"/>
          <a>创建者</a>
          <span>创建日期</span>
        </div>
        <div class="operator">
          <ol>
            <li>播放</li>
            <li>收藏</li>
            <li>分享</li>
            <li>下载</li>
            <li>评论</li>
          </ol>
        </div>
        <div class="target">
          <span>标签：</span>
          <span>华语</span>
          <span>华语</span>
          <span>华语</span>
        </div>
        <div class="introduce">
          <span>介绍：</span>
          <p style="display: inline;">为了她，创建了一张专辑</p>
        </div>
      </div>
    </div>
    <div class="music-list">

    </div>
    <div class="comment-list">

    </div>
  </div>
</template>

<script>
  export default {
    name: "SheetCoverInfo"
  }
</script>

<style scoped>
  #container {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  #container > div {
    width: 100%;
    margin: auto auto;
  }

  .sheet-info {
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: space-around;
  }

  .sheet-info .cover {
    width: 200px;
    height: 200px;
    align-self: center;
  }

  .sheet-info .right {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sheet-creator {
    display: flex;
    align-items: center;
  }

  .creator-image {
    width: 30px;
    height: 30px;
  }

  ol {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
</style>
