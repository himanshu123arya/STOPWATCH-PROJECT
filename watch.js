let timer;
let isRunning = false;
let  elapsedTime = 0;
let laps = [];


function startTimer(){
    if(!isRunning){
        isRunning = true;
        timer = setInterval(() =>{
            elapsedTime +=10;
            updateDisplay();
        },10);
    }

}

function pauseTimer(){
    clearInterval(timer);
    isRunnning= false;
}

function resetTimer(){

    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    laps =[];
    updateDisplay();
    document.getElementById('laps').innerHTML = '';


}
function lapTime() {
    let lapTime = formatTime(elapsedTime);
    laps.push(lapTime);
    let lapElement = document.createElement('li');
    lapElement.textContent = `Lap ${laps.length}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapElement);
}

function updateDisplay() {
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    let date = new Date(time);
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTime);

