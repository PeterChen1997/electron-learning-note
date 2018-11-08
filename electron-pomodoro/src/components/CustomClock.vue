<template>
    <div class="clock">
        <div class="pointer"></div>

        <div class="time">{{time}}</div>

        <div class="clock-control" @click="handleClick">
            <img src="../assets/play.png" v-if="!isTicking">
            <img src="../assets/stop.png" v-else>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isTicking: false,
            time: '25:00'
        }
    },
    methods: {
        handleClick() {
            this.isTicking = !this.isTicking

            if (this.isTicking) {
                console.log('isTicking')
            } else {
                console.log('is stoped')
            }
        }
    }
}
</script>

<style>
.clock {
    margin-top: 20px;
    width: 220px;
    height: 220px;
    border: 6px solid #e3988d;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.clock-control > img {
    height: 60px;
    width: 60px;
}

.pointer {
    position: absolute;
    background-color: white;
    margin-top: -113px;
    margin-left: -3px;
    height: 20px;
    width: 20px;
    transform: rotate(0deg);
    transform-origin: 15px 126px;
    border: 3px solid #e3988d;
    border-radius: 50%;
}

.time {
    margin-top: 50px;
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 65px;
    font-family: monospace;
    color: #e3988d;
}

.clock-control {
    margin-top: 20px;
}
</style>
