/// <reference types="react-scripts" />
export type City = {
  id: number;
  name: string;
};

export type Country = {
  name: string;
  cities: City[];
};

export type Trip = {
  product_url: string;
  image: string;
  id: number;
  title: string;
  price: number;
  discount_percentage: number;
  summary: string;
  city_id: number;
  available_dates: string[];
};
