 // Function to update the ticket price based on the selected number of people
  function updatePrice(selectElement, priceElement, basePrice) {
    const selectedValue = parseInt(selectElement.value);
    const priceUnit = priceElement.querySelector('.price-unit').textContent;
    
    // Update the price element with the new price
    if (selectedValue === 1) {
      priceElement.textContent = `${priceUnit}${basePrice}`;
    } else if (selectedValue >= 2) {
      // Calculate the new price by multiplying the base price by the selected number of people
      const price = selectedValue * basePrice;
      priceElement.textContent = `${priceUnit}${price}`;
    } 
    
  }

  // Add event listeners to each select element
  const selectElements = document.querySelectorAll('.pricing-persons select');
  const priceElements = document.querySelectorAll('.pricing-price');
  const basePrices = [0, 450, 280, 600];
  
  for (let i = 0; i < selectElements.length; i++) {
    selectElements[i].addEventListener('change', () => {
      updatePrice(selectElements[i], priceElements[i], basePrices[i]);
    });
  }

