export function totalPrice(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
