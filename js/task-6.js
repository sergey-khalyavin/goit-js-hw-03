const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProducts, productName) {
  let array;
  let element;
  let totalPrice;
  for (let i = 0; i < allProducts.length; i += 1) {
    array = allProducts[i];

    // eslint-disable-next-line
    for (element in array) {
      element = Object.values(array);
      if (element.includes(productName)) {
        totalPrice = array.price * array.quantity;
      }
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
