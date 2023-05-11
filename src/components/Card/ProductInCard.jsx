import { useSelector } from "react-redux";
import UseCrudCart from "../../hooks/UseCrudCart";

const ProductInCard = ({ prodCart }) => {

  const { deleteProductFromCard } = UseCrudCart();



  const handleDeleteCart = () => {
    deleteProductFromCard(prodCart.id);
  };

  return (

    <article className="article__cart">

        <article className="article__cart-head">

            <article className="article__img">
                <img src={prodCart.product.images[0].url} alt="" />
            </article>

            <article className="article__info">
                <span>{prodCart.product.title}</span>
                <div className="article__btn">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </article>

        </article>

        <article className="article__cart-footer">
               <p>{prodCart.quantity}</p>
                <p><span>Price:</span> ${prodCart.quantity * prodCart.product.price}</p>
            
            <button onClick={handleDeleteCart} className="btn__cart-delete" ><i className='bx bx-trash'></i></button>
        </article>

    </article>

  );
};

export default ProductInCard;
