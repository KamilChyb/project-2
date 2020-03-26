import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Product page</div>
      <Product id={match.params.id} />
      <Link to="/products">Go back to products list</Link>
    </>
  );
};

export default ProductPage;
