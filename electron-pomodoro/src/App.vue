<template>
  <div class="container">
    <div class="header">
      <div class="hide">
        <img src="./assets/hide.png">
      </div>
      <div class="close">
        <img src="./assets/close.png">
      </div>
    </div>
    
    <custom-clock />

    <div class="tools-list">
      <div class="menu">
        <img src="./assets/menu.png">
      </div>
      <div class="record">
        <span>Today 0 / 10</span>
      </div>
      <div class="setting">
        <img src="./assets/setting.png">
      </div>
    </div>
  </div>
</template>

<script>
import CustomClock from './components/CustomClock.vue'

export default {
  name: 'app',
  components: {
    CustomClock
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
  height: 45px;
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
