function checkout() {
  if(cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const name = document.getElementById('customerName').value;
  const email = document.getElementById('customerEmail').value;
  const phone = document.getElementById('customerPhone').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const cardExpiry = document.getElementById('cardExpiry').value;
  const cardCVC = document.getElementById('cardCVC').value;

  if(!name || !email || !phone || !cardNumber || !cardExpiry || !cardCVC) {
    alert('Please fill in all customer and payment details!');
    return;
  }

  let message = `Customer Info:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nOrder Details:\n`;
  cart.forEach(item => {
    message += `${item.name} - $${item.price.toFixed(2)}\n`;
  });
  message += `\nTotal: $${cart.reduce((a,b)=>a+b.price,0).toFixed(2)}`;
  message += `\n\nPayment Info:\nCard Number: ${cardNumber}\nExpiry: ${cardExpiry}\nCVC: ${cardCVC}`;

  // Open default email client
  window.location.href = `mailto:charlesobengsiaw@gmail.com?subject=New Order&body=${encodeURIComponent(message)}`;

  cart = [];
  displayCart();
}