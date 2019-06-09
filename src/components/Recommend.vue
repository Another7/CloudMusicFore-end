<template>
  <div id="container">
    <div>
      <Carousel></Carousel>
    </div>
    <div class="item">
      <SubTitle></SubTitle>
    </div>
    <div class="item">
      <SheetCover></SheetCover>
    </div>
    <div class="item">
      <ClassifyTitle showMore="true" title="个性化推荐"></ClassifyTitle>
    </div>
    <div class="item">
      <SheetCover></SheetCover>
    </div>
    <div class="item">
      <ClassifyTitle show-more="true" title="新碟上架"></ClassifyTitle>
    </div>
    <div class="item">
      <SheetCover></SheetCover>
    </div>
    <div class="item">
      <ClassifyTitle show-more="true" title="榜单"></ClassifyTitle>
    </div>
    <div class="musicList">
      <div>
        <SimpleMusicList></SimpleMusicList>
        <SimpleMusicList></SimpleMusicList>
        <SimpleMusicList></SimpleMusicList>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from "@/components/Carousel";
  import SubTitle from "@/components/SubTitle";
  import SheetCover from "@/components/SheetCover";
  import ClassifyTitle from "@/components/ClassifyTitle";
  import SimpleMusicList from "@/components/SimpleMusicList";

  export default {
    name: "Recommend",
    components: {SimpleMusicList, ClassifyTitle, SheetCover, SubTitle, Carousel}
  }
</script>

<style scoped>
  #container {
    background-color: #f5f5f5;
  }

  .item {
    background-color: #ffffff;
    width: 70%;
    margin: 0 auto;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }

  .musicList {
    width: 70%;
    margin: 0 auto;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }

  .musicList > div {
    width: 900px;
    display: flex;
    margin: 0 auto;
  }

  .musicList > div > div:first-child {
    border-left: 1px solid darkgray;
  }

  .musicList > div > div {
    border-right: 1px solid darkgray;
  }
</style>
