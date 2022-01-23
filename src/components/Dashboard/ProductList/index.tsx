import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const ProductListComponent: React.FC = () => {
  const allProducts = [
    { name: "Samsung product", price: "500 AZN" },
    { name: "IPhone product", price: "700 AZN" },
    { name: "Samsung product", price: "500 AZN" },
    { name: "Samsung product", price: "500 AZN" },
    { name: "Redmi product", price: "420 AZN" },
    { name: "IPhone product", price: "700 AZN" },
    { name: "Samsung product", price: "500 AZN" },
    { name: "Redmi product", price: "420 AZN" },
  ];

  return (
    <div className="products">
      <div className="container">
        {Object.keys(allProducts).length === 0 ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="row">
            {allProducts.map((product: any) => {
              return (
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="card product">
                    <div className="product__content">
                      <div className="product__content__name">{product.name}</div>
                      <div className="product__content__subname">
                        {product.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListComponent;
