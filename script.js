const cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
  document.getElementById('cart-count').textContent = cart.length;
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <div>${item.name} (${item.size}/${item.width})</div>
        <div>$${item.price.toFixed(2)}</div>
      </div>`;
  });
}

function addToCart() {
  const size = document.getElementById('size').value;
  const width = document.getElementById('width').value;
  const product = {
    name: "New Balance MCY996v3",
    price: 119.95,
    size,
    width
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  document.getElementById('cart-popup').style.display = 'block';
}

function toggleCart() {
  const popup = document.getElementById('cart-popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

updateCartDisplay();
