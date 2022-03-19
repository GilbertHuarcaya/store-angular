export interface Details {
  productId: string;
  productName: string;
  quantity: number;
}

export interface Order {
  name: string;
  shippingAddress: string;
  city: string;
  date: Date;
  isDelivery: boolean;
  orderId: string;
  id: string;
}

export interface DetailsOrder {
  details: Details[];
  orderId: string;
}
