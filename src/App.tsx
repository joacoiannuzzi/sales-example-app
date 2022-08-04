import Nav from "src/components/Nav";
import Chart from "src/components/Chart";
import { useFetchData } from "src/hooks/useFetchData";
import { useEffect, useState } from "react";
import { useCategories } from "src/hooks/useCategories";
import { useProducts } from "src/hooks/useProducts";
import { useBrands } from "src/hooks/useBrands";
import Select from "src/components/Select";

const App = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");

  const { categories } = useCategories();
  const { products } = useProducts(category);
  const { brands } = useBrands(category, product);

  const { data } = useFetchData(category, product, brand);

  useEffect(() => {
    if (categories.length > 0 && category === "") {
      setCategory(categories[0]);
    }
  }, [categories]);

  useEffect(() => {
    if (products.length > 0 && product === "") {
      setProduct(products[0]);
    }
  }, [products]);

  useEffect(() => {
    if (brands.length > 0 && brand === "") {
      setBrand(brands[0]);
    }
  }, [brands]);

  return (
    <div className="grid grid-rows-[auto,1fr] h-screen">
      <Nav />

      <div className="mt-7 grid grid-rows-[auto,auto,1fr] gap-3">
        <div className="flex justify-evenly">
          <Select
            name="category"
            value={category}
            onChange={(value) => {
              setProduct("");
              setBrand("");
              setCategory(value);
            }}
            items={categories}
          />

          <Select
            name="product"
            value={product}
            onChange={(value) => {
              setBrand("");
              setProduct(value);
            }}
            items={products}
          />

          <Select
            name="brand"
            value={brand}
            onChange={setBrand}
            items={brands}
          />
        </div>

        <h3 className="text-center text-xl">Sales by Month for:</h3>

        <div className="p-14">
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
};

export default App;
