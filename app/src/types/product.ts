export type Product = {
  id: number | string;
  brand: string;
  name: string;
  price: number;
  productImg?: string;
};

export interface CartItem extends Product {
  quantity: number;
}
