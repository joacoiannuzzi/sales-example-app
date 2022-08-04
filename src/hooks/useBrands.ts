import { useEffect, useState } from "react";
import { getBrands } from "src/api";

export const useBrands = (category: string, product: string) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setBrands([]);
      setLoading(true);

      const data = await getBrands(category, product);
      setBrands(data);

      setLoading(false);
    };

    if (category && product) {
      fetchData();
    }
  }, [category, product]);
  return { brands, loading };
};
