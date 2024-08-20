import React from "react";
import Product from "./Product";
import { useProducts } from "../hooks/useProducts";
import { JSX } from "react/jsx-runtime";
import { ProductType } from "../types/amazonTypes";
import { useCart } from "../context/cartContext";

const ProductsGrid: React.FC = () => {
  const { products, isloading, error } = useProducts();
  const { addToCart } = useCart();

  if (isloading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error loading products: {error}</p>;
  }

  return (
    <div className="products-grid">
      {products.map((product: JSX.IntrinsicAttributes & ProductType) => (
        <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsGrid;
