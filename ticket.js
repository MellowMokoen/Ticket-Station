class TicketUpdater {
    constructor(selectElement, priceElement, basePrice) {
        this.selectElement = selectElement;
        this.priceElement = priceElement;
        this.basePrice = basePrice;
        this.priceUnit = priceElement.querySelector('.price-unit').textContent;

        this.selectElement.addEventListener('change', this.updatePrice.bind(this));
    }

    updatePrice() {
        const selectedValue = parseInt(this.selectElement.value);
        const price = selectedValue * this.basePrice;
        this.priceElement.textContent = `${this.priceUnit}${price}`;
    }
}

class ShoppingCart {
    constructor(openShopping, closeShopping, listCart, body, total, quantity) {
        this.openShopping = openShopping;
        this.closeShopping = closeShopping;
        this.listCart = listCart;
        this.body = body;
        this.total = total;
        this.quantity = quantity;
        this.cartItems = [];

        this.openShopping.addEventListener('click', () => this.body.classList.add('active'));
        this.closeShopping.addEventListener('click', () => this.body.classList.remove('active'));
    }

    addToCart(event, priceElement, selectElement) {
        event.preventDefault();
        const pricingBox = event.target.closest('.pricing-box');
        const eventName = pricingBox.querySelector('.pricing-title h3').textContent;
        const price = parseFloat(pricingBox.querySelector('.pricing-price span.price-unit').textContent + pricingBox.querySelector('.pricing-price').textContent.trim());
        const quantity = parseInt(selectElement.value);

        const cartItem = `${eventName} - ${quantity} x ${price}`;
        this.cartItems.push(cartItem);

        this.updateCart();
        this.quantity.textContent = parseInt(this.quantity.textContent) + quantity;
    }

    updateCart() {
        this.listCart.innerHTML = '';
        this.cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = item;
            this.listCart.appendChild(cartItem);
        });

        this.updateTotal();
    }

    updateTotal() {
        let totalAmount = 0;

        this.cartItems.forEach(item => {
            const parts = item.split(' x ');
            const itemPrice = parseFloat(parts[1]);
            const itemQuantity = parseInt(parts[0].split(' - ')[1]);
            totalAmount += itemPrice * itemQuantity;
        });

        this.total.innerText = `Total: R${totalAmount.toFixed(2)}`;
    }
}

// Initialize ticket updates
const selectElements = document.querySelectorAll('.pricing-persons select');
const priceElements = document.querySelectorAll('.pricing-price');
const basePrices = [450, 280, 600];

let ticketUpdaters = Array.from(selectElements).map((selectElement, index) => new TicketUpdater(selectElement, priceElements[index], basePrices[index]));


// Initialize the shopping cart
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

let shoppingCart = new ShoppingCart(openShopping, closeShopping, listCart, body, total, quantity);

// Add event listeners to ticket buttons
let ticketButtons = document.querySelectorAll('.pricing-action a.button');
ticketButtons.forEach(button => {
    button.addEventListener('click', (event) => shoppingCart.addToCart(event, priceElements[0], selectElements[0]));
});
