export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  active: boolean;
}

export function isProductAvailable(product: Product): boolean 
{
  return product.active && product.stock > 0;
}

export function calculateInventoryValue(products: Product[]): number 
{
  return products.reduce(
    (total, product) =>
      total + product.price * product.stock,
    0
  );
}

