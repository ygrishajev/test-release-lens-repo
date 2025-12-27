// Feature functions
export function greet(name) {
  return `Hello, ${name}!`;
}

export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
