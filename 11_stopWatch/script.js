let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let miliSecond = document.getElementById("miliseconds");
let startBtn = document.getElementById("start");
let intervalID;
let isRunning = false;
let isStarted = false;
let resetBtn = document.getElementById("reset");
resetBtn.disabled = true;
let lapDiv = document.querySelector(".laps");
let lapArr = [];
let lapBtn = document.getElementById("lap");

let hrs = 0,
  mins = 0,
  sec = 0,
  milisec = 0;

function startStop() {
  isStarted = true
  if (isRunning) {
    //age chal rha to bandh kro
    clearInterval(intervalID);
    isRunning = false;
    startBtn.innerText = "START";
    startBtn.id = "start";
  } else {
    // startBtn.removeAttribute("start");
    startBtn.id = "end";
    startBtn.innerText = "STOP ";
    isRunning = true;
    resetBtn.disabled = false;

    intervalID = setInterval(() => {
      milisec++;
      if (milisec === 100) {
        milisec = 0;
        sec++;
      }

      if (sec === 60) {
        sec = 0;
        mins++;
      }

      if (mins === 60) {
        mins = 0;
        hrs++;
      }

      miliSecond.innerText = milisec < 10 ? `0${milisec}` : milisec;
      second.innerText = sec < 10 ? `0${sec}` : sec;
      minute.innerText = mins < 10 ? `0${mins}` : mins;
      hour.innerText = hrs < 10 ? `0${hrs}` : hrs;
    }, 10);
  }
}

function resetSW() {
  console.log("Reset button clicked");
  clearInterval(intervalID);
  isRunning = false;
  startBtn.innerText = "START";
  startBtn.id = "start";
  resetBtn.disabled = true;
  lapDiv.innerHTML = "";
  lapArr = [];
  isStarted = false;

  hrs = 0;
  mins = 0;
  sec = 0;
  milisec = 0;

  hour.innerText = "00";
  minute.innerText = "00";
  second.innerText = "00";
  miliSecond.innerText = "00";
}

function addLaps() {
  if (isStarted) {

    let obj = {
      ghanta: hrs,
      min: mins,
      secs: sec,
      milisecs: milisec,
    };

    lapArr.push(obj);
    lapDiv.innerHTML = "";

    lapArr.forEach((ele, idx) => {
      let lapCard = `
        <div class = "card">
            <span class = "index">${idx + 1}</span>
            <div class = "lap-time">
                <span>${ele.ghanta}</span> : 
                <span>${ele.min}</span> : 
                <span>${ele.secs}</span> : 
                <span>${ele.milisecs}</span> 
            </div>
        </div>
    `;
      lapDiv.innerHTML += lapCard;
    });
  }
}

startBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", resetSW);
lapBtn.addEventListener("click", addLaps);
