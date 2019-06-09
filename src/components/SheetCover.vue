<template>
  <div id="container">
    <div :sheetId="sheet.id" @click="handle(sheet.id)" v-for="sheet in sheets">
      <img :src="sheet.img" alt="">
      <div class="shadow">
        <i class="el-icon-headset"></i>
        <span>67万</span>
      </div>
      <router-link class="title" to="">{{sheet.title}}</router-link>
    </div>
  </div>
</template>

<script>
  import image1 from "@/assets/girl.png";
  import image2 from "@/assets/TIM1.jpg";
  import image3 from "@/assets/TIM2.jpg";
  import image4 from "@/assets/TIM3.jpg";
  import image5 from "@/assets/TIM4.jpg";
  import image6 from "@/assets/TIM5.jpg";
  import image7 from "@/assets/TIM6.jpg";
  import image8 from "@/assets/TIM7.jpg";

  export default {
    name: "Sheet",
    prop: [],
    data() {
      return {
        sheets: [
          {"id": 123, "img": image1, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image2, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image3, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image4, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image5, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image6, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image7, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
          {"id": 123, "img": image8, "title": "demo", "playNumber": 0, "creator": "another", "creatorId": 0},
        ]
      }
    },
    created() {

    },
    methods: {
      handle(sheetId) {
        this.$router.push({
          name: "sheetDetail",
          params: {
            id: sheetId
          }
        })
      }
    }
  }
</script>

<style scoped>
  #container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    height: 400px;
    flex-wrap: wrap;
    margin: 0 auto;
    background-color: #ffffff;
  }

  #container > div {
    position: relative;
    width: 140px;
    height: 180px;
    margin: 10px 15px;
    text-align: left;
  }

  .title {
    text-align: left;
  }

  img {
    width: inherit;
    height: 140px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .shadow {
    position: absolute;
    bottom: 40px;
    width: 100%;
    background-color: rgba(52, 52, 52, .5);
  }

  .shadow > span {
    color: #ccc;
  }

  .el-icon-headset {
    margin-left: 10px;
    color: #ccc;
  }
</style>
