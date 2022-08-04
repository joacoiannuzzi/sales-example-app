import { useEffect, useState } from "react";
import { getData } from "src/api";
import { Data } from "types";

export const useFetchData = (
  category: string,
  product: string,
  brand: string
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      setLoading(true);

      const data = await getData(category, product, brand);
      setData(data);

      setLoading(false);
    };

    if (category && product && brand) {
      fetchData();
    }
  }, [category, product, brand]);
  return { loading, data };
};
