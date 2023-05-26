//func calculation of all products in the cart
export function countAllCart(products) {
  const countProducts = products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);
  return countProducts;
}