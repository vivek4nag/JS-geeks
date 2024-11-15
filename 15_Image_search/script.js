let imageContainer = document.querySelector(".container")
let searchArea = document.getElementById("search-img")
let searchBtn = document.getElementById("search-btn")

let IMG_SEARCH_URL = `https://api.unsplash.com/search/photos/?client_id=`
let KEY = "puXbNMC-XSqzxWvpIeFJrcK4tGd7ZGLc3cBCyoyI6qs"
let query = "space"
let currPage = 1


let renderOnPage = (data) => {
    let imgArray = data.results
    // console.log(imgArray);
    imgArray.forEach(image => {
        let card = document.createElement('div')
        card.className = "card"

        let img = document.createElement('img')
        img.className = "picture"
        img.src = image.urls.regular

        let description = document.createElement('p');
        description.innerText = image.alt_description

        card.appendChild(img)
        card.appendChild(description)
        imageContainer.appendChild(card)
    });
    
}


async function fetchImage() {
    let response = await fetch(`${IMG_SEARCH_URL}${KEY}&query=${query}&page=${currPage}&per_page=12`)

    let data = await response.json()
    console.log(data);

    renderOnPage(data)
    

}

fetchImage()