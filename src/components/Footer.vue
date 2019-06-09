<template>
  <div id="container">
    <div class="left">
      <div>
        <ol>
          <li><a href="#">关于网易</a></li>
          <li>|</li>
          <li><a href="#">客户服务</a></li>
          <li>|</li>
          <li><a href="#">服务条款</a></li>
          <li>|</li>
          <li><a href="#">隐私政策</a></li>
          <li>|</li>
          <li><a href="#">版权投诉指引</a></li>
          <li>|</li>
          <li><a href="#">意见反馈</a></li>
        </ol>
      </div>
      <div>
        <p> 网易公司版权所有©1997-2019杭州乐读科技有限公司运营：浙网文[2018]3506-263号 </p>
      </div>
      <div>
        <p> 违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com </p>
      </div>
    </div>
    <div class="right">
      <div>
        <img alt="" src="../assets/girl.png">
        <p>demo</p>
      </div>
      <div>
        <img alt="" src="../assets/TIM5.jpg">
        <p>demo</p>
      </div>
      <div>
        <img alt="" src="../assets/TIM3.jpg">
        <p>demo</p>
      </div>
      <div>
        <img alt="" src="../assets/TIM4.jpg">
        <p>demo</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  #container {
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #f2f2f2;
    font-size: 12px;
  }

  #container > div {
    width: 50%;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }

  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .left > div {
    margin: 10px 40px;
  }

  ol {
    list-style: none;
    padding: 0;
    display: flex;
  }

  ol > li {
    margin-right: 5px;
    font-family: Arial, Helvetica, sans-serif;
    color: #cbc2cb;
  }

  ol > li > a {
    text-decoration: none;
    color: #afa1bd;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  /* 和img标签相邻的p标签内容居中显示 */
  img + p {
    text-align: center;
  }
</style>
