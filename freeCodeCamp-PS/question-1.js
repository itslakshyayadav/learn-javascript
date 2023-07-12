const shopShelf = ["Oil", "Atta", "Bread", "Tea", "Atta"];
// // function replaceAProduct(currentProduct, newProduct)
// // console.log(replaceAllProduct('oil', 'besan'))

// // Q1. write a function to replace the first occurance of 'Atta' with 'Besan'
function replaceAllProduct(currentProduct, newProduct) {
  const index = shopShelf.indexOf(currentProduct);
  shopShelf.splice(index, 1, newProduct);
  return shopShelf;
}
console.log(replaceAllProduct("Atta", "Besan"));

// Q2. write a function to replace all the occurenaces of 'Atta' with 'Besan'

const newShopShelf = ["Oil", "Atta", "Bread", "Tea", "Atta"];
// console.log(replaceAllProducts('oil', 'besan'))
function replaceAllProducts(productReplace, newProduct) {
  const newArray = newShopShelf.map((product) => {
    if (product === productReplace) {
      return newProduct;
    } else {
      return product;
    }
  });
  return newArray;
}
console.log(replaceAllProducts("Atta", "Besan"));
