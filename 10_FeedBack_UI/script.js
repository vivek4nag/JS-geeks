let container = document.querySelector(".container")
let container2 = document.querySelector(".container-2")

let submitBtn = document.getElementById("submit")
let anotherBtn = document.getElementById("another-feedback")

let firstEmoji = document.getElementById("first")
let secondEmoji = document.getElementById("second")
let thirdEmoji = document.getElementById("third")
let fourthEmoji = document.getElementById("fourth")

let response = '';

// container.style.display = "block"
// container2.style.display = "none"

firstEmoji.addEventListener("click", () => {
    firstEmoji.style.backgroundColor = "#b3e3e8";
    secondEmoji.style.backgroundColor = ""
    thirdEmoji.style.backgroundColor = ""
    fourthEmoji.style.backgroundColor = ""
    response = firstEmoji.querySelector("p").innerText;
    // console.log(response);
    
})

secondEmoji.addEventListener("click", () => {
    secondEmoji.style.backgroundColor = "#b3e3e8";
    firstEmoji.style.backgroundColor = ""
    thirdEmoji.style.backgroundColor = ""
    fourthEmoji.style.backgroundColor = ""
    response = secondEmoji.querySelector("p").innerText;
})

thirdEmoji.addEventListener("click", () => {
    thirdEmoji.style.backgroundColor = "#b3e3e8";
    firstEmoji.style.backgroundColor = ""
    secondEmoji.style.backgroundColor = ""
    fourthEmoji.style.backgroundColor = ""
    response = thirdEmoji.querySelector("p").innerText
})

fourthEmoji.addEventListener("click", () => {
    fourthEmoji.style.backgroundColor = "#b3e3e8";
    firstEmoji.style.backgroundColor = ""
    secondEmoji.style.backgroundColor = ""
    thirdEmoji.style.backgroundColor = ""
    response = fourthEmoji.querySelector("p").innerText;
})


submitBtn.addEventListener("click", ()=> {

    if( firstEmoji.style.backgroundColor === "rgb(179, 227, 232)" ||
        secondEmoji.style.backgroundColor === "rgb(179, 227, 232)" ||
        thirdEmoji.style.backgroundColor === "rgb(179, 227, 232)" ||
        fourthEmoji.style.backgroundColor === "rgb(179, 227, 232)"){
        container.style.display = "none";
        container2.style.display = "block"
        document.getElementById("feedbak-chosen").innerText = response;
    }else{
        alert("please choose a feedback")
    }
    
})

anotherBtn.addEventListener("click", ()=>{
    container2.style.display = "none";
    container.style.display = "block"
    firstEmoji.style.backgroundColor = ""
    secondEmoji.style.backgroundColor = ""
    thirdEmoji.style.backgroundColor = ""
    fourthEmoji.style.backgroundColor = ""

})