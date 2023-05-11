import React, { useState } from "react";
import UseCrudCart from "../../hooks/UseCrudCart";

const ProductIdInfo = ({ product }) => {
  const [queantity, setQueantity] = useState(1);
  const handleMas = () => {
    setQueantity(queantity + 1);
  };
  const handleMinus = () => {
    if (queantity - 1 >= 1) {
      setQueantity(queantity - 1);
    }
  };

  const { addProductToCart } = UseCrudCart();

  const handleAddToCart = () => {
    const data = {
      quantity: queantity,
      productId: product.id,
    };
    addProductToCart(data);
  };

  

  return (
    <section className="product__info">
      <h3 className="product__info-brand">{product?.brand}</h3>
      <h2 className="product__info-title">{product?.title}</h2>
      <p className="product__info-description">{product?.description}</p>
      <footer className="product__footer">
        <div className="product__footer-price">
          <span className="product__price-label">${parseFloat(product?.price ) + 100}</span>
          <span className="product__price"> ${product?.price}</span>
        </div>
        <div className="product__footer-quantity">
          <span>Quentity</span>
          <div className="product__footer-button">
            <button  onClick={handleMinus}>-</button>
            <div>{queantity}</div>
            <button onClick={handleMas}>+</button>
          </div>
        </div>

        <div className="product__footer-buy">
        <button  onClick={handleAddToCart}>
            Add To Cart <i className="bx bx-cart"></i>
          </button>
            <div className={`tolkit`}>
            <span>Buy Naw</span>
            <span></span>
            </div>
          
        </div>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
