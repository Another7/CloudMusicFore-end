<template>
  <div id="container">
    <table>
      <tr>
        <th></th>
        <th>歌曲标题</th>
        <th>时长</th>
        <th>歌手</th>
        <th>专辑</th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "MusicList",
    data() {
      return {}
    },
    mounted: function () {
      this.initTable();
      this.render();
    },
    updated: function () {

    },
    methods: {
      initTable() {
        let table = document.getElementsByTagName("table")[0];
        for (let i = 0; i < 10; i++) {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");
          td1.innerText = "Demo";
          td2.innerText = "Demo";
          td3.innerText = "Demo";
          td4.innerText = "Demo";
          td5.innerText = "Demo";
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          table.appendChild(tr);
        }
      },
      render() {
        let tr = document.getElementsByTagName("table")[0].getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
          if (i % 2 === 0) {
            tr[i].style.backgroundColor = "#f7f7f7";
          }
        }
      }
    }
  }
</script>

<style scoped>
  #container {
    margin: 20px auto;
    width: 100%;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #d9d9d9;
    margin: 0 auto;
  }

  th {
    text-align: left;
    border-top: 2px solid red;
  }

  tr:nth-child(even) {
    background-color: #f7f7f7;
  }
</style>
