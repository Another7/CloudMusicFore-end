<template>
  <div id="container">
    <div class="cover">
      <img src="../assets/girl.png">
      <div>
        <p>飙升榜</p>
      </div>
    </div>
    <table>
      <tr v-for="(music, index) in content.musicList">
        <td class="order">{{index + 1}}</td>
        <td class="musicName">
          <router-link :to="'/demo/' + music.musicId">{{music.musicName}}</router-link>
        </td>
      </tr>
    </table>
    <div>
    </div>
  </div>
</template>

<script>
  import image1 from "@/assets/girl.png";

  export default {
    name: "SimpleMusicList",

    data() {
      return {
        content: {
          header: {
            image: image1,
            title: "日韩",
          },
          musicList: [
            {
              musicId: "1234556",
              musicName: "你能听到我的心吗"
            },
            {
              musicId: "1234556",
              musicName: "你能听到我的心吗"
            },
            {
              musicId: "1234556",
              musicName: "你能听到我的心吗"
            },
            {
              musicId: "1234556",
              musicName: "你能听到我的心吗"
            },
            {
              musicId: "1234556",
              musicName: "你能听到我的心吗"
            },
            {
              musicId: "1234556",
              musicName: "你能听到我的心吗"
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

  #container {
    width: 300px;
  }

  .cover {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cover > div {
    width: 150px;
    height: 100px;
  }

  div > img {
    height: 100px;
    width: 100px;
    margin: 10px
  }

  table {
    table-layout: fixed;
    border-collapse: collapse;
    text-align: center;
    width: 300px;
  }

  table td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 40px;
    font-family: Arial, Helvetica, sans-serif;;
  }

  .order {
    width: 20%;
  }

  .musicName {
    width: 80%;
  }

  table tr:nth-child(even) {
    background-color: lightgray;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>
