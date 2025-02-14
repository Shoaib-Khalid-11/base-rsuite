export interface Rating {
  count: number;
  rate: number;
}
export interface Product {
  id: number;
  catogory: string;
  description: string;
  price: number;
  image: string;
  title: string;
  rating: Rating;
}
