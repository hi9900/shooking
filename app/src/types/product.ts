export type Product = {
  id: number | string;
  productImg?: string;
  brand: string;
  name: string;
  price: number;
};

export interface CartItem extends Product {
  quantity: number;
}
