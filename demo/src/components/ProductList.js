import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "../styles.css";

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [page, setPage] = useState(1); 
  const productsPerPage = 12;
  const totalProducts = 48;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products?page=${page}&limit=${productsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [page]);

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default ProductList;