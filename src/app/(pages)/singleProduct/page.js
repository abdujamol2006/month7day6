"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SingleProduct() {
  const { productId } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        ); // Fetch from API based on ID
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]); // Only fetch when productId changes

  if (isLoading) {
    return <div>Loading product...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}$</p>
      {/* ... (add other details) ... */}
    </div>
  );
}
