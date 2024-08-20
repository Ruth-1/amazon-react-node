import { useState, useEffect } from "react";
import { ProductType } from "../types/amazonTypes";
export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isloading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3000/products";
      console.log("Fetching data from:", url);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { products, isloading, error };
};
