class TicketUpdater {
    constructor(selectElement, priceElement) {
        this.selectElement = selectElement;
        this.priceElement = priceElement;
        this.priceUnit = priceElement.querySelector('.price-unit').textContent;

        this.selectElement.addEventListener('change', this.updatePrice.bind(this));
    }

    updatePrice() {
        let selectedValue = parseInt(this.selectElement.value);
        let basePrice = parseFloat(this.priceElement.textContent.replace(this.priceUnit, ''));
        let price = selectedValue * basePrice;
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

    addToCart(event, pricingBox) {
        event.preventDefault();
        const eventName = pricingBox.querySelector('.pricing-title h3').textContent;
        const priceElement = pricingBox.querySelector('.pricing-price');
        const selectElement = pricingBox.querySelector('select');
        const price = parseFloat(priceElement.textContent.replace(priceElement.querySelector('.price-unit').textContent, ''));
        const quantity = parseInt(selectElement.value);

        const cartItem = `${eventName} - ${quantity} x ${price}`;
        this.cartItems.push(cartItem);

        this.updateCart();
        this.quantity.textContent = parseInt(this.quantity.textContent) + quantity;
        this.updateTotal();
    }

    updateCart() {
        this.listCart.innerHTML = '';

        this.cartItems.forEach(item => {
            let newDiv = document.createElement('li');
            newDiv.textContent = item;
            this.listCart.appendChild(newDiv);
        });
    }

    updateTotal() {
        let totalAmount = 0;

        this.cartItems.forEach(item => {
            const parts = item.split(' x ');
            const itemPrice = parseFloat(parts[1]);
            const itemQuantity = parseInt(parts[0].split(' - ')[1]);
            totalAmount += itemPrice * itemQuantity;
        });

        this.total.textContent = `Total: R${totalAmount.toFixed(2)}`;
    }
}

// Initialize the ticket prices and cart
const selectElements = document.querySelectorAll('.pricing-persons select');
const priceElements = document.querySelectorAll('.pricing-price');

selectElements.forEach((selectElement, index) => {
    new TicketUpdater(selectElement, priceElements[index]);
});

const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const listCart = document.querySelector('.listCart');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

const shoppingCart = new ShoppingCart(openShopping, closeShopping, listCart, body, total, quantity);

const ticketButtons = document.querySelectorAll('.pricing-action a.button');
ticketButtons.forEach(button => {
    button.addEventListener('click', event => shoppingCart.addToCart(event, button.closest('.pricing-box')));
});

const totalButton = document.querySelector('.total');

totalButton.addEventListener('click', function() {
    window.location.href = 'checkout.html'; // Replace '/your-local-path' with the actual path you want to redirect to.
});

