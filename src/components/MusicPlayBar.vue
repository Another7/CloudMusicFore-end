<template>
  <div id="playBar">
    <div @mouseover="showElement()" class="line"></div>
    <div id="lock">
      <div class="left"></div>
      <div @click="lock()" class="center">
        <i class="el-icon-unlock"></i>
      </div>
      <div class="right"></div>
    </div>
    <div id="content">
      <div class="play-button">
        <span>
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#iconicon-1"></use>
          </svg>
        </span>
        <!--播放按钮-->
        <span>
          <svg @click="play()" aria-hidden="true" class="icon" id="play">
            <use xlink:href="#iconicon-"></use>
          </svg>
        </span>
        <span>
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#iconicon-3"></use>
          </svg>
        </span>
      </div>
      <div class="play-progress">
        <img :src="currentMusic.image" alt="">
        <audio :src="currentMusic.url">
          Your browser does not support the audio element.
        </audio>
        <div class="info">
          <div>
            <span>{{currentMusic.name}}<a>{{currentMusic.musicId}}</a></span>
            <span>{{currentMusic.singer}}</span>
            <span><i class="el-icon-link"></i></span>
          </div>
          <div>
            <el-progress :percentage="100"></el-progress>
            <span>00:00</span>
            <span>/</span>
            <span>{{currentMusic.duration}}</span>
          </div>
        </div>
      </div>
      <div class="little-pie">
        <div>
          <span>
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icontianjia"></use>
            </svg>
          </span>
          <span>
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#iconfenxiang"></use>
            </svg>
          </span>
          <span>
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#iconicon-test1"></use>
            </svg>
          </span>
          <span>
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#iconicon-8"></use>
            </svg>
          </span>
          <span>
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#iconicon-10"></use>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入阿里图标样式所需js
  import {icon} from '../icon/iconfont'
  import image4 from "@/assets/TIM3.jpg";

  export default {
    name: "MusicPlayBar",
    data() {
      return {
        isLock: false,
        show: true,
        // 正在播放的音乐
        currentMusic: {
          musicId: "123",
          image: image4,
          name: "Another",
          url: "//m10.music.126.net/20190608190022/99fd01784ca433c7bd036457f46f4b01/ymusic/a024/09a7/c4c3/fc0d416790bc729172c636e2d2d1109a.mp3",
          singer: "G.E.M",
          duration: "03:12"
        },
        // 正在播放音乐所属的音乐列表 上一曲，下一曲
        musicList: [
          {
            musicId: "123",
            image: image4,
            name: "Another",
            url: "",
            singer: "G.E.M",
            duration: "03:12"
          }
        ]
      }
    },
    methods: {
      // 控制音乐播放栏是否隐藏
      showElement() {
        let container = document.getElementById("playBar");
        if (!this.isLock) {
          if (this.show) {
            container.style.bottom = "0px";
            this.show = !this.show;
          } else {
            container.style.bottom = "-50px";
            this.show = !this.show;
          }
        }
      },
      // 控制音乐播放栏是否锁定
      lock() {
        let lockIcon = document.getElementById("lock")
          .getElementsByClassName("center")[0].children[0];
        console.log(lockIcon);
        if (this.isLock) {
          lockIcon.classList.remove("el-icon-lock");
          lockIcon.classList.add("el-icon-unlock");
        } else {
          lockIcon.classList.remove("el-icon-unlock");
          lockIcon.classList.add("el-icon-lock");
        }
        this.isLock = !this.isLock;
      },
      // 播放按钮，控制音乐暂停播放
      play() {
        let audio = document.getElementsByTagName("audio")[0];
        let playButton = document.getElementById("play").firstElementChild;
        if (audio.paused) {
          audio.play();
          audio.volume = 0.5;
          // $(this)[0].setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', "#VKnife_Close");
          //第二种方法 // $(this)[0].href.baseVal = "#unlocked";
          // use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#iconicon-2")
          playButton.href.baseVal = "#iconicon-2";
        } else {
          audio.pause();
          playButton.href.baseVal = "#iconicon-";
        }
      }
    }
  }
</script>

<style scoped>
  @import "../icon/iconfont.css";

  * {
    margin: 0;
    padding: 0;
  }

  audio {

  }

  #playBar {
    width: 100%;
    position: fixed;
    bottom: -50px;
    transition: bottom 1s;
  }

  #lock {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
  }

  .line {
    width: 100%;
    height: 10px;
    /* background-color: red; */
  }

  #content {
    width: 100%;
    height: 90%;
    background-color: #2b2b2b;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .play-button {
    width: 20%;
    height: 80%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-button > i {
    font-size: 30px;
  }

  .play-progress {
    width: 50%;
    display: flex;
  }

  .little-pie {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .play-progress > img {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 14px;
    margin-right: 10px;
    color: white;
  }

  .info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
  }

  .el-progress__text {
    display: none;
  }

  .el-progress-bar {
    width: 110%;
  }

  .el-progress.el-progress--line {
    width: 100%;
  }

  .el-progress-bar__inner {
    background-color: #c70c0c;
  }

  .info > div {
    display: flex;
  }

  .left {
    width: 0;
    height: 0;

    border-top: 10px solid rgba(0, 0, 0, 0);
    border-right: 10px solid #2b2b2b;
    border-bottom: 10px solid #2b2b2b;
    border-left: 10px solid rgba(0, 0, 0, 0);
  }

  #lock .center {
    width: 20px;
    height: 20px;
    background-color: #2b2b2b;
  }

  #play {
    font-size: 40px;
  }

  .right {
    width: 0;
    height: 0;

    border-top: 10px solid rgba(0, 0, 0, 0);
    border-right: 10px solid rgba(0, 0, 0, 0);
    border-bottom: 10px solid #2b2b2b;
    border-left: 10px solid #2b2b2b;
    margin-right: 60px;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  svg {
    font-size: 30px;
    color: white;
  }

  #lock .center i {
    color: white;
  }
</style>
