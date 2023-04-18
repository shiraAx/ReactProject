import './ProductItem.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeProdInCart, setCart, setNewProdInCart } from '../../redux/actions/cart.actions'
import { getAllProducts } from '../../services/products.service'
import { setProducts } from '../../redux/actions/products.actions'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";     


export const ProductItem = (props) => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { cart } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [numOfCards, setNumOfCards] = useState(0)
    useEffect(() => {
        dispatch(setCart([]));
    }, [])
    function changeNavigate() {
        navigate(`/products/${props.product.id}`)
    }

    function addToCart(singleProduct) {
        //console.log("useEffectcart", cart)
        const prod = cart?.find(p => p.product.singleProduct.id == singleProduct.id)
        //console.log("prod", prod)
        const index = cart?.findIndex(p => p.product.singleProduct.id == singleProduct.id)
     //   console.log("index", index)
        if (!prod) {
            dispatch(setNewProdInCart({ singleProduct, count: 1 }))
            console.log("setNewProdInCart cart", cart)
        }
        else {
            let count = prod.product.count + 1
            cart[index].product.count = count
           // console.log("cart[index]", cart[index])
           // console.log("cart", cart)

        }

    }
    function lessFromCart(singleProduct) {

        const prod = cart?.find(p => p.product.singleProduct.id == singleProduct.id)
        console.log("prod", prod)
        const index = cart?.findIndex(p => p.product.singleProduct.id == singleProduct.id)
        console.log("index", index)
        console.log("proddd", prod)
        if (prod.product.count == 1)
            dispatch(removeProdInCart(singleProduct))
        else {
            let count = prod.product.count - 1
            cart[index].product.count = count
        }
        console.log("cart", cart)

    }


    return (
        <li>
            <div >
                <img src={props.product.images[0]} onClick={changeNavigate}></img>
                <h1 onClick={changeNavigate}>{props.product.title}</h1>
                <h3 onClick={changeNavigate}>{props.product.price}</h3>
                <button onClick={() => { addToCart(props.product); setNumOfCards(numOfCards + 1) }} >+</button>
                <p>{numOfCards}</p>
                <button onClick={() => { lessFromCart(props.product); setNumOfCards(numOfCards - 1) }} >-</button>
            </div>
        </li>
    )

}

// <div className="col-12">
// <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
//     <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
//     <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
//         <div className="flex flex-column align-items-center sm:align-items-start gap-3">
//             <div className="text-2xl font-bold text-900">{product.name}</div>
//             <Rating value={product.rating} readOnly cancel={false}></Rating>
//             <div className="flex align-items-center gap-3">
//                 <span className="flex align-items-center gap-2">
//                     <i className="pi pi-tag"></i>
//                     <span className="font-semibold">{product.category}</span>
//                 </span>
//                 <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
//             </div>
//         </div>
//         <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
//             <span className="text-2xl font-semibold">${product.price}</span>
//             <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
//         </div>
//     </div>
// </div>
// </div>





