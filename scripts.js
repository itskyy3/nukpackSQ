// Simulazione del carrello
let cart = [];

// Funzione per aggiungere un prodotto al carrello
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} è stato aggiunto al carrello!`);
    updateCart();
}

// Funzione per aggiornare il carrello
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalContainer = document.getElementById('total');
    
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `<p>${item.name} - €${item.price.toFixed(2)}</p>`;
        cartItemsContainer.appendChild(itemElement);
       
    }
  )
}