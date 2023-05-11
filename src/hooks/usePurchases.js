import axios from "axios";
import getConfiToken from "../utils/getConfiToken";
import { getAllProductsCartThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";


const usePurchases = () => {

    

    const dispatch = useDispatch()
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    
    const [purchases, setPurchases] = useState()

    const [errorBuy, setErrorBuy] = useState()
    
    const buyThisCart = () =>{

        
        axios.post(url,{}, getConfiToken())
        .then( ()=> {
            setErrorBuy(false)
            dispatch(getAllProductsCartThunk())
           
        })
        .catch(()=>  setErrorBuy(true))
    }

    const getAllProductPurchased = () => {
        
        axios.get(url, getConfiToken())
        .then(res => setPurchases(res.data))
        .catch(error => console.log(error))
    }

    return {buyThisCart, getAllProductPurchased, purchases, errorBuy}
}

export default usePurchases;