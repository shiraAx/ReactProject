import React from "react";
import { ProductItem } from "./ProductItem"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "../../redux/actions/products.actions";
import { getAllProducts } from "../../services/products.service";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";     


export const ProductList = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    useEffect(() => {
        if (!products)
            getAllProducts().then(data => {
                dispatch(setProducts(data.data));
            })
    }, [])
    // const [cart, setCart] = useState([])
    // const { cart } = useSelector(state => state.cart);
    return (
        <>
            <ul>
                {console.log("ProductList", products)}
                {/* {console.log("cart", cart)} */}
                {products?.products?.map((singleProduct, index) => {
                    return <div key={index}>
                        <ProductItem product={singleProduct} 
                        // cart={cart} 
                        // setCart={setCart}
                        />
                    </div>
                })}
            </ul>
        </>

    )
}
