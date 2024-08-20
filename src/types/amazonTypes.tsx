export type ProductType = {
  id: string;
  name: string;
  image: string;
  rating: {
    stars: number;
    count: number;
  };
  priceCents: number;
  addToCart: (productId: string, quantity: number) => void;
};

export type CartItem = {
  productId: string;
  quantity: number;
  deliveryOptionId: string;
};
