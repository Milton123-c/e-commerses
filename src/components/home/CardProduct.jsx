import { useNavigate } from "react-router-dom";
import "./styles/CardProduct.css";
import UseCrudCart from "../../hooks/UseCrudCart";
import alertify from "alertifyjs";
import { useEffect, useState } from "react";
import Loading from "../Load/Loading";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const { addProductToCart, error, setError } = UseCrudCart();
  const [showError, setShowError] = useState(false)

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  };

  const handleBtnClick = (e) => {
    e.stopPropagation();
    const data = {
      quantity: 1,
      productId: product.id,
    };
    addProductToCart(data);
    setShowError(true)
  };

  useEffect(() => {
    if (error == false) {
      alertify.alert("Exelent", "new product to shopping cart");
      setShowError(false)
      setError();
    } else if (error == true) {
      alertify.alert("Error", "product not added");
      setShowError(false)
      setError();
    }

  }, [error]);

  const price = parseFloat(product.price) + 100;

  return (
    <article onClick={handleSelectProduct} className="product">
      {
        showError == false ? 
        '':
        <div className="containerLoad">
            <div className="load__container">
            <Loading />
            </div>
           
          </div>
      }
      <a href="#home"></a>
      <header className="product__header">
        <img className="product__img-1" src={product.images[0].url} alt="" />
        <img className="product__img-2" src={product.images[1].url} alt="" />
      </header>
      <div className="product__body">
        <section className="product__section">
          <h4 className="product__subtitle">{product.brand}</h4>
          <h3 className="product__title">{product.title}</h3>
        </section>

        <div className="product__price">
          <span className="product__price-label">${price.toFixed(2)}</span>
          <span className="product__price-value">${product.price}</span>
        </div>
        <div className="product__btn-container">
          <button
            onClick={handleBtnClick}
            className={`product__btn p${product.id}`}
          >
            <i className="bx bxs-cart product__btn-icon"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProduct;
