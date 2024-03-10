export interface ProductType {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: { count: number; rate: number };
  count?: number;
}