let imageContainer = document.querySelector(".container");
let searchArea = document.getElementById("search-img");
let searchBtn = document.getElementById("search-btn");
let moreBtn = document.getElementById("more");

let IMG_SEARCH_URL = `https://api.unsplash.com/search/photos/?client_id=`
let KEY = "puXbNMC-XSqzxWvpIeFJrcK4tGd7ZGLc3cBCyoyI6qs";
var query = "space";
var currPage = 1;


//view more wala Btn dikhane ya chupane ke liye
// if ((imageContainer.innerHTML = "")) {
//     moreBtn.style.display = "none";
// } else {
//     moreBtn.style.display = "block";
// }



let loadMore = () => {
    currPage = currPage + 1;
    fetchImage(currPage, query)
}



let searchImage = () => {
    query = searchArea.value.toLowerCase().trim();
    console.log(query);
    if ((query === "")) {
        alert("DHANG KA KUCH SEARCH KAR LE MERE BHAI 💀");
    } else {
        currPage = 1;
        imageContainer.innerHTML = "";
        fetchImage(currPage, query);
    }
};


// pehle mai sirf image ke niche description me image ka link daal rha tha using anchor tag
// let renderOnPage = (data) => {
//     let imgArray = data.results;
//     // console.log(imgArray);
//     imgArray.forEach((image) => {
//         let card = document.createElement("div");
//         card.className = "card";

//         let img = document.createElement("img");
//         img.className = "picture";
//         img.src = image.urls.regular;

//         // let description = document.createElement("p");
//         // description.innerText = image.alt_description;

//         let imgLink = document.createElement('a');
//         imgLink.href = image.links.html
//         imgLink.textContent = image.alt_description;

//         card.appendChild(img);
//         // card.appendChild(description);
//         card.appendChild(imgLink)
//         imageContainer.appendChild(card);
//     });
// };


// yahn mai pure card ko hi anchor tag me wrap kr rha so that kahi bhi click kro u will be redirected to the image page
let renderOnPage = (data) => {
    let imgArray = data.results;
    console.log(imgArray);
    imgArray.forEach((image) => {
        let cardLink = document.createElement("a");
        cardLink.href = image.links.html;
        cardLink.target = "_blank"; // naya tab me khulega link
        cardLink.className = "card";

        let img = document.createElement("img");
        img.className = "picture";
        img.src = image.urls.regular;

        let description = document.createElement("p");
        description.textContent = image.alt_description;

        cardLink.appendChild(img);
        cardLink.appendChild(description);

        imageContainer.appendChild(cardLink);
    });
};


async function fetchImage(currPage, query) {
    // console.log(`${IMG_SEARCH_URL}${KEY}&query=${query}&page=${currPage}&per_page=12`);

    try {
        let response = await fetch(
            `${IMG_SEARCH_URL}${KEY}&query=${query}&page=${currPage}&per_page=12`
        );

        let data = await response.json();
        console.log(data);

        renderOnPage(data);
    } catch (error) {
        console.error();
        imageContainer.innerHTML = "<h4>Failed to load images. Please try again Later.</h4>"
        moreBtn.style.display = "none";

    }

}



fetchImage(currPage, query);
searchBtn.addEventListener("click", searchImage);
moreBtn.addEventListener("click", loadMore)

