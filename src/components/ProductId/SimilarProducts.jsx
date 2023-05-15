import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch';
import CardProduct from '../home/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsCartThunk } from '../../store/slices/cart.slice';

const SimilarProducts = ({product}) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
    const [ filterProducts, getProductByCategory ] = UseFetch(url)

    const {cartGlobal} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if(product ){
         getProductByCategory()
        }
    }, [product])

    useEffect(()=>{
        dispatch(getAllProductsCartThunk())
    }, [])

  return (
    <section className='similar__product'>
        <h2>discover similar products</h2>
        <div className='similar__container'>
             {
                filterProducts?.map(prod=>{
                    if(prod.id!== product.id){
                        return  <CardProduct 
                        key={prod.id}
                        product={prod}
                        cartGlobal={cartGlobal}
                        />                                                   
                    }
                })
            }
        </div>
    </section>
  )
}

export default SimilarProducts