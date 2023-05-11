import React from "react";

export const ProductPurchase = ({ prodPuchase }) => {
  const fecha = new Date(prodPuchase.createdAt);

  const fechaShort = fecha.toLocaleDateString(fecha);

  return (
    <section className="purchases__cart">
      <div className="purchases__img">
        <img src={prodPuchase.product.images[0].url} alt="" />
      </div>
      <div className="purchases__cart-footer">
        <h3>{prodPuchase.product.title}</h3>

        <div className="date">
          <span>{prodPuchase.quantity}</span>
          <span>{fechaShort}</span>
        </div>
        <p>
            <span>Price unit: </span>
            <span>${prodPuchase.product.price}</span>
       
        </p>

        <p>
            <span>Sub total: </span>
            <span>${prodPuchase.quantity * prodPuchase.product.price}</span>

        </p>
      </div>
    </section>
  );
};
