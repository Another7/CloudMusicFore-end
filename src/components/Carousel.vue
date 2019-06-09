<template>
  <div class="block">
    <el-carousel height="300px" style="text-align: center">
      <el-carousel-item :key="index" v-for="(image, index) in images">
        <img :src="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        images: [
          require("@/assets/girl.png"),
          require("@/assets/girl.png"),
          require("@/assets/girl.png"),
          require("@/assets/girl.png"),
          require("@/assets/girl.png"),
        ]
      }
    },
    created() {

    },
    method: {}
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  img {
    width: 80%;
    height: 300px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
