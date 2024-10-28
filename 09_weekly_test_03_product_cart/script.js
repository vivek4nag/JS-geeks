let prodName = document.getElementById("product");
let prodPrice = document.getElementById("price");
let addBtn = document.getElementById("add-product");
let clearBtn = document.getElementById("clear-cart");

let selectedProdContainer = document.querySelector(".selected-prod");
let cartList = document.querySelector(".cart-list");

let totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

let emptyMessage = document.querySelector("h3");

function addProduct() {
  let product = prodName.value;
  let price = Number(prodPrice.value);

  if (!product || !price || Number(product)) {
    alert("Please enter a valid product name and price.");
    prodName.value = "";
    prodPrice.value = "";
    return;
  }

  let quantity = 1;
  let quantityDisplay = document.createElement("span");
  quantityDisplay.innerText = quantity;

  // increase & decrease button to change quantity
  let increaseBtn = document.createElement("button");
  increaseBtn.innerText = "+";
  let decreaseBtn = document.createElement("button");
  decreaseBtn.innerText = "-";
  let btns = document.createElement("div");
  btns.append(decreaseBtn, quantityDisplay, increaseBtn);

  // ek particular item ke liye div bnao & usem sabko chipka do
  let itemDiv = document.createElement("div");
  itemDiv.append(product);
  itemDiv.append(` - Rs:${price} `);
  itemDiv.append(btns);
  selectedProdContainer.appendChild(itemDiv);

  // same for cart section - div bnao & chipka do
  let cartDiv = document.createElement("div");
  cartDiv.innerText = `${product} `;
  let amountDiv = document.createElement("div");
  amountDiv.innerText = `${quantity} x Rs:${price}`;
  cartDiv.append(amountDiv);
  cartList.appendChild(cartDiv);

  // price calulation
  totalPrice += price;
  totalPriceElement.innerText = `Total Price: Rs:${totalPrice}`;

  // increase button functionality
  increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityDisplay.innerText = quantity;
    amountDiv.innerText = `${quantity} x Rs:${price}`;
    totalPrice += price;
    totalPriceElement.innerText = `Total Price: Rs:${totalPrice}`;
  });

  // decrease button functionality
  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.innerText = quantity;
      amountDiv.innerText = amountDiv.innerText = `${quantity} x Rs:${price}`;
      totalPrice -= price;
      totalPriceElement.innerText = `Total Price: Rs:${totalPrice}`;
    } else if (quantity === 1) {
      cartList.removeChild(cartDiv);
      selectedProdContainer.removeChild(itemDiv);
      totalPrice -= price;
      totalPriceElement.innerText = `Total Price: Rs:${totalPrice}`;
    }
    if (totalPrice === 0 && selectedProdContainer.childElementCount === 0)
      emptyMessage.style.display = "block";
  });

  emptyMessage.style.display = "none";
  prodName.value = "";
  prodPrice.value = "";

  if (totalPrice === 0) emptyMessage.style.display = "block";

  
}
clearBtn.addEventListener("click", () => {
    if (selectedProdContainer.childElementCount !== 0) {
        selectedProdContainer.innerHTML = "";
        cartList.innerHTML = ""; 
      totalPrice = 0;
      totalPriceElement.innerText = `Total Price: Rs:${totalPrice}`;
      emptyMessage.style.display = "block";
    } else if (selectedProdContainer.childElementCount === 0) {
      alert("abbey khali hi to hai Cart");
      return;
    }
  });

addBtn.addEventListener("click", addProduct);
