function StartTimer(){
    model.interval=setInterval(CountSeconds,1000)
    model.minutesInterval=setInterval(CountMinutes,60000)
    model.hoursInterval=setInterval(CountHours,3 600 000)
}

function CountMilli(){
    model.milliseconds++
    updateView()
}

function CountSeconds(){
    model.seconds++
    updateView()
}

function CountMinutes(){
    model.minutes++
    updateView()
}

function CountHours(){
    model.hours++
    updateView()
}


function StopTimer(){
    clearInterval(model.interval)
    clearInterval(model.minutesInterval)
}

function ClearTimer(){
    model.milliInterval=0
    model.seconds=0
    model.minutes=0
    model.hours=0
    model.roundsdata=''
    model.rounds=1
    updateView()
}
