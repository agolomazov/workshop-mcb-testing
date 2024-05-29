export interface Product {
  name: string;
  price: number;
}

export function createProduct(product: Product) {
  if (!product.name) {
    return {
      success: false,
      error: { code: 'invalid_name', message: 'Name is missing' },
    };
  }

  if (product.price <= 0) {
    return {
      success: false,
      error: { code: 'invalid_price', message: 'Price is missing' },
    };
  }

  return { success: true, message: 'Product was successfully published' };
}
