const container = document.querySelector(".img-container")
const URL = `https://api.unsplash.com/photos/random/?client_id=nOZ8-oQTkpz_oTsDbhOoNSsuzj0drJWYzfM2Ej20DfU&count=16`



function displayImage(data) {
    data.forEach(item => {
        let imgDiv = document.createElement("div");
        let code = `
            <div class="card">
                <img src= "${item.urls.regular}" alt="">
            </div>
        `
        imgDiv.innerHTML = code;
        container.appendChild(imgDiv);
    });
}

async function fetchPics() {
    let response = await fetch(`${URL}`);
    let data = await response.json();
    console.log(data); // data ek array hai 

    displayImage(data);
}

window.addEventListener("load", async () => {

    fetchPics()
})


window.addEventListener('scroll', () => {
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight){
        fetchPics()
    }
})



// let start = new Date().getTime();
// let end = 0;
// while( end < start + 6000){
//     end = new Date().getTime()
// }

// async function executeWithDelayInLoop() {
//     for (let i = 0; i < 10; i++) {
//         console.log(`Iteration ${i + 1}`);
//         await delay(1000); // Pause for 5 seconds
//     }
//     console.log("Loop completed");
// }
// executeWithDelayInLoop();

