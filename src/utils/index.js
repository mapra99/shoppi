export function totalPrice(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

export function filterItemsByTitle(items, title) {
  return items?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
}

export function filterItemsByCategory(items, title) {
  return items?.filter(item => item.category.name.toLowerCase().includes(title.toLowerCase()));
}
