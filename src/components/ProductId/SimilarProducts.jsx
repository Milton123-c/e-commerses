import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch';
import CardProduct from '../home/CardProduct';

const SimilarProducts = ({product}) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
    const [ filterProducts, getProductByCategory ] = UseFetch(url)
    useEffect(() => {
        if(product ){
         getProductByCategory()
        }
    }, [product])

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
                        />                                                   
                    }
                })
            }
        </div>
    </section>
  )
}

export default SimilarProducts