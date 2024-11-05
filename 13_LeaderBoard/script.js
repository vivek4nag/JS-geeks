let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let country = document.getElementById("country");
let score = document.getElementById("score");
let addBtn = document.querySelector("#add-btn");
let leaderboardDiv = document.querySelector(".leaderboard-div");
let emptyMsg = document.querySelector(".empty-msg")

let dataArr = [];

function defaultValue() {
  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";
}

function addData() {
  if (
    fname.value === "" ||
    lname.value === "" ||
    country.value === "" ||
    score.value === ""
  ) {
    alert("Please provide valid inputs ");
  } else {
    leaderObj = {
      FName: fname.value,
      LName: lname.value,
      country: country.value,
      score: +score.value,
    };

    dataArr.push(leaderObj);
    defaultValue();
    dataArr.sort((a, b) => b.score - a.score);
    console.log(dataArr);

    render();
  }
}

function render() {
    leaderboardDiv.innerHTML = "";

  if (dataArr.length === 0) {
    emptyMsg.style.display = "block"
    return;
  } else {
    emptyMsg.style.display = "none"
    let leaderCard = document.createElement("div");
    leaderCard.className = "leader-card";
    
    dataArr.forEach((player) => {
        let playerDiv = `
          <div class="player-item">
            <div class="player-name">
              <span>${player.FName}</span>
              <span>${player.LName}</span>
            </div>
            <span>${player.country}</span>
            <span>${player.score}</span>
            <div class="a-s-d">
              <button class="plus5">+5</button>
              <button class="del">❌</button>
              <button class="minus5">-5</button>
            </div>
          </div>
        `;
        leaderCard.innerHTML += playerDiv;
      });
    leaderboardDiv.appendChild(leaderCard);
    ASDbuttons()
  }
}

function ASDbuttons(){
    document.querySelectorAll(".a-s-d").forEach((ele, idx) =>{
        ele.addEventListener('click', (e) => {
            if(e.target.innerText === "+5" && dataArr[idx].score > 0) dataArr[idx].score +=5
            else if(e.target.innerText === "-5" && dataArr[idx].score >= 5) dataArr[idx].score -=5
            else {
                dataArr.splice(idx, 1);
            }

            if(dataArr.length === 0) emptyMsg.style.display = "block"
            dataArr.sort((a, b) => b.score - a.score);
            console.log(dataArr);
            render()
        })
    })
}

addBtn.addEventListener("click", addData);
