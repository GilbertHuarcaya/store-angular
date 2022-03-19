export interface Product {
  id: string;
  productId: string;
  name: string;
  price: number;
  description: string;
  categoryId: string;
  stock: number;
  status: string;
  createdAt: Date;
  category: string;
  qty: number;
}
