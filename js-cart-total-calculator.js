function calculateSubtotal(items){
  return subtotal
}

function calculateDiscount(subtotal, discountPercent) {
  const discountPercent = subtotal * (discountPercent/100);
  const amountAfterDiscount = subtotal - discountPercent;
  return discountPercent;
}

function calculateTax(amountAfterDiscount, taxPercent) {
  const amountAfterDiscount = price - discountPercent;
}

function createCartSummary(items, discountPercent, taxPercent) {
  
}

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));

// variables
subtotal = 
discount = calculateDiscount(subtotal, discountPercent)
tax = calculateTax(amountAfterDiscount, taxPercent)

//Expected output:
{ subtotal: 60, discount: 6, tax: 2.7, total: 56.7 }
60
{ subtotal: 50, discount: 0, tax: 5, total: 55 }
