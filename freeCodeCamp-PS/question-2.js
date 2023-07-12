const shopAllShelves = [
  ["Oil", "Oil", "Bread", "Bread"],
  ["Bread", "Atta", "Atta", "Juice"],
  ["Juice", "Tea", "Tea", "Tea"],
];
// function restockWithNewProduct(existingProduct, newProduct)

// Write a function to replace all the occurenacec of a product with a new product
// restockWithNewProduct('Oil', 'Salt')

//
const restockWithNewProduct = (existingProduct, newProduct) => {
  return shopAllShelves.map((shelf) => {
    return shelf.map((product, index) => {
      if (product === existingProduct) {
        return newProduct;
      }
      return product;
    });
  });
};
const newProducts = restockWithNewProduct("Bread", "Salt");
console.log(newProducts);
// console.log(restockWithNewProduct("Atta", "Pakodi"));
// console.log(restockWithNewProduct("Tea", "Coffee"));
