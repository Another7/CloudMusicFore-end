<template>
  <div id="app">
    <!--<p>{{$store.state.content.name}}</p>-->
    <OneLevelMenu></OneLevelMenu>
    <router-view/>
    <Footer></Footer>
    <MusicPlayBar></MusicPlayBar>
  </div>
</template>

<script>
  import OneLevelMenu from "@/components/OneLevelMenu";
  import Footer from "@/components/Footer";
  import MusicPlayBar from "./components/MusicPlayBar";

  export default {
    name: 'App',
    components: {MusicPlayBar, Footer, OneLevelMenu},
    created() {
      // this.axios.get("").then(response => {
      //   console.log(response);
      // })
    },
    mounted() {
      console.log("mounted");
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
