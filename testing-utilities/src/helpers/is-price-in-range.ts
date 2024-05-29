export function isPriceInRange(price: number, min: number, max: number) {
  return price >= min && price <= max;
}
