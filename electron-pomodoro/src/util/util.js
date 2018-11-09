/* eslint no-console: 0*/
function checkOutput(number) {
    if (number <= 9) {
        return `0${number}`
    } else {
        return number
    }
}

export function timeProcesser (timeStr) {
    let timeArr = timeStr.split(':')

    let minute = Number(timeArr[0])
    let second = Number(timeArr[1])

    if (second === 0) {
        second = 59
        minute--
    } else {
        second--
    }

    console.log(minute, second)

    return `${checkOutput(minute)}:${checkOutput(second)}`
}

export function notifyUser (type, payload) {
    let startNotification = {
        title: 'Pomodoro is start~',
        body: 'Enjoy your own 25 minutes'
    }

    let endNotification = {
        title: 'Pomodoro is in an end~',
        body: 'Relax now'
    }

    let notificationObj = type === 'start'
                            ? startNotification
                            : type === 'end'
                                ? endNotification
                                : payload
                       
    new Notification(notificationObj.title, notificationObj)
    
    if (type === 'start') {
        console.log('notify start')
    } else if (type === 'end') {
        console.log('notify end')
    } 
}

export function degProcesser(timeStr) {
    let timeArr = timeStr.split(':')

    let minute = Number(timeArr[0])
    let second = Number(timeArr[1])

    let timeLeftNum = minute * 60 + second
    let totalTime = 25 * 60 

    let rotateDeg = 360 * (totalTime - timeLeftNum) / totalTime

    console.log(rotateDeg)

    return rotateDeg
}