
const h1 = document.querySelector("h1");
const code = document.querySelector("h4")


addEventListener("keydown", (e) => {
    // console.log(e);
    // console.log(e.keyCode);
    // if(e.code === "Space"){
    //     h1.innerText = `You have pressed Space`;
    // }else{

    //     h1.innerText =  `You have pressed ${e.key.toUpperCase()}`
    // }

    e.code ==="Space" ? h1.innerText = `You have pressed Space` : h1.innerText =  `You have pressed ${e.key.toUpperCase()}`

    code.innerText = `${e.keyCode}`
    
    
})