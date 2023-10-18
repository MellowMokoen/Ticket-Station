// Function to update the ticket price based on the selected number of people
function updatePrice(selectElement, priceElement, basePrice) {
  let priceUnit = priceElement.querySelector('.price-unit').textContent;

  selectElement.addEventListener('change', function () {
    let selectedValue = parseInt(selectElement.value);
    let price = selectedValue * basePrice;
    priceElement.textContent = `${priceUnit}${price}`;
  });
}

// Add event listeners to each select element using forEach loop
let selectElements = document.querySelectorAll('.pricing-persons select');
let priceElements = document.querySelectorAll('.pricing-price');
let basePrices = [450, 280, 600];

selectElements.forEach((selectElement, index) => {
  updatePrice(selectElement, priceElements[index], basePrices[index]);
});




//Cart program
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
 
let products = [
  {
      id: 1,
      name: 'Conference & Seminar',
     
      price: 0
  },
  {
      id: 2,
      name: 'Product Launch',
      
      price: 450
  },
  {
      id: 3,
      name: 'Team Building',
      price: 280
  },
  
  {
      id: 4,
      name: 'Trade Shows & Exhibitions',
      
      price: 600
  },
];


function addToCart(key){
    if(lisCards[key] == null){
        lisCards[key] = JSON.parse(JSON.stringify(products[key]));
        lisCards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard(){
  listCart.innerHTML = '';
  const selectedValue = parseInt(selectElement.value);
  const priceUnit = priceElement.querySelector('.price-unit').textContent;
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
      count = count + selectedValue.quantity;
   totalPrice = totalPrice + value.price;
     
      if(value != null){
          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              
              <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>
          `;
          listCart.appendChild(newDiv);
      }
  })
  total.innerText = 'R ' +totalPrice.toLocaleString()+'.00';
  quantity.innerText = count;
}

function changeQuantity(key, quantity){
  if(quantity == 0){
      delete lisCards[key];
  }else{
      lisCards[key].quantity = quantity;
      lisCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}