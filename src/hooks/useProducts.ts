import { useEffect, useState } from "react";
import { getProducts } from "src/api";

export const useProducts = (category: string) => {
  const [products, setProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setProducts([]);
      setLoading(true);

      const data = await getProducts(category);
      setProducts(data);

      setLoading(false);
    };

    if (category) {
      fetchData();
    }
  }, [category]);
  return { products, loading };
};
