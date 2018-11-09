<template>
  <div class="container">
    <div class="header">
      <div class="hide">
        <img src="./assets/hide.png" @click="handleHideClick">
      </div>
      <div class="close">
        <img src="./assets/close.png" @click="handleCloseClick">
      </div>
    </div>
    
    <custom-clock :changePomodoroCount="this.changePomodoroCount" />

    <div class="tools-list">
      <div class="menu">
        <img src="./assets/menu.png">
      </div>
      <div class="record">
        <span>Today {{pomodoroCount}} / 10</span>
      </div>
      <div class="setting">
        <img src="./assets/setting.png">
      </div>
    </div>
  </div>
</template>

<script>
import CustomClock from './components/CustomClock.vue'
import { remote } from 'electron'
import { notifyUser } from './util/util.js'

export default {
  name: 'app',
  components: {
    CustomClock
  },
  data() {
    return {
      pomodoroCount: 0
    }
  },
  methods: {
    handleHideClick() {
      remote.BrowserWindow.getFocusedWindow().minimize()
    },
    handleCloseClick() {
      remote.BrowserWindow.getFocusedWindow().close()
    },
    changePomodoroCount(count) {
      this.pomodoroCount += count

      if (this.pomodoroCount === 10) {
        notifyUser('info', {
          title: "inished today's goal~",
          body: 'Congratulations'
        })
      }
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 430px;
  user-select:none;

}

.header {
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  -ms-overflow-style: scrollbar;
  -webkit-app-region:drag;
}
.header > * {
  width: 20px;
  height: 20px;
  margin:10px;
}
.header img {
  margin-top: 10px;
  width: 20px;
  height: 20px;
}

.tools-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  margin-top: 30px;
  
}

.tools-list .record {
  font-family: sans-serif;
  font-size: 21px;
  color: #898989;
}

.tools-list img {
  height: 30px;
  width: 30px;
  margin: 10px;
}
</style>
