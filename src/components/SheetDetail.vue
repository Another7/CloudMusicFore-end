<template>
  <div id="container">
    <div class="item">
      <SheetCoverInfo></SheetCoverInfo>
    </div>
    <div class="item">
      <MusicList></MusicList>
    </div>
    <div class="item">
      <PublishComment></PublishComment>
    </div>
    <div class="item-last">
      <p>评论列表</p>
      <ShowComment :key="i" v-for="i in 10"></ShowComment>
      <el-pagination
        :total="100"
        @current-change="demo"
        background
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import SheetCoverInfo from "./SheetCoverInfo";
  import MusicList from "./MusicList";
  import PublishComment from "./PublishComment";
  import ShowComment from "./ShowComment";

  export default {
    name: "SheetDetail",
    prop: ["sheetId"],
    components: {ShowComment, PublishComment, MusicList, SheetCoverInfo},
    data() {
      return {}
    },
    methods: {
      demo(number) {
        console.log(number)
      }
    }
  }
</script>

<style scoped>
  #container {
    width: 70%;
    margin: 0 auto;
    background-color: #ffffff;
  }

  .item {
    width: 90%;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
  }

  .item-last {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .el-pagination.is-background {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
</style>
