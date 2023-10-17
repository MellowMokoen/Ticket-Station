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




