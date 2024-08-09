const getData = async () => {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();
  return { data };
};

async function Home() {
  const { data } = await getData();

  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      {data.products.map((prod) => {
        return (
          <div className="">
            <div className=" p-4 py-4 grid md:grid-cols-3 gap-4">
              <div key={prod.id} className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">{prod.title}</p>
                  <p className="px-2">{prod.description.slice(0, 20)}</p>
                  <p className="px-3">Price: {prod.price}$</p>

                  <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4">
                    Buy
                  </button>
                </div>
                <img
                  className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
                  src={prod.thumbnail}
                  alt="img"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
/*"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const req = await fetch("https://dummyjson.com/products");
        const data = await req.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  const handleClick = (productId) => {
    router.push(`/singleProduct/${productId}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      {products.map((prod) => (
        <div
          key={prod.id}
          className="rounded-xl relative"
          onClick={() => handleClick(prod.id)}
        >
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{prod.title}</p>
            <p className="px-2">{prod.description.slice(0, 20)}</p>
            <p className="px-3">Price: {prod.price}$</p>

            <button className="border rounded-xl px-5 py-1 border-white bg-white text-black hover:bg-black/50 hover:text-white border-none mx-2 absolute bottom-4">
              Buy
            </button>
          </div>
          <img
            className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl"
            src={prod.thumbnail}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
}

export default Home;*/
