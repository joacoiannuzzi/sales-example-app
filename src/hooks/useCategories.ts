import { useEffect, useState } from "react";
import { getCategories } from "src/api";

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setCategories([]);
      setLoading(true);

      const data = await getCategories();
      setCategories(data);

      setLoading(false);
    };

    fetchData();
  }, []);
  return { categories, loading };
};
