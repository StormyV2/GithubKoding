updateView();

function updateView(){
    model.timer.innerHTML=/*HTML*/`

    <button onclick="StartTimer()">Start</button>
    <button onclick="TakeRound()">Round</button>
    <button onclick="StopTimer()">Stop</button>
    <button onclick="ClearTimer()">Clear</button>
    
    <div> ${model.hours} : ${model.minutes} : ${model.seconds} : ${model.milliseconds} :</div>
    <div>${model.roundsdata}</div>
    `
}

function TakeRound(){
    model.roundsdata+=/*HTML*/
    `
    <div> Round ${model.rounds}: ${model.hours} : ${model.minutes} : ${model.seconds} : ${model.milliseconds} : </div>
    <br>
    `
    Rounds++
}