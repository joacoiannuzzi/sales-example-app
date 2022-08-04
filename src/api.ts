import { Data } from "types";

const URL = "http://localhost:3000";

export const getCategories = async () => {
  const response = await fetch(`${URL}/categories`);
  const data = await response.json();

  return data as string[];
};

export const getProducts = async (category: string) => {
  const response = await fetch(`${URL}/products/${category}`);
  const data = await response.json();

  return data as string[];
};

export const getBrands = async (category: string, product: string) => {
  const response = await fetch(`${URL}/brands/${category}/${product}`);
  const data = await response.json();

  return data as string[];
};

export const getData = async (
  category: string,
  product: string,
  brand: string
) => {
  const response = await fetch(`${URL}/data/${category}/${product}/${brand}`);
  const data = await response.json();

  return data as Data[];
};
