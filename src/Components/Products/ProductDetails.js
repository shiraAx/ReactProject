import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/products.actions";
import { getAllProducts, getProductById } from "../../services/products.service";
import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import { appStore } from "../../redux/reducers/allReducers";
import React from "react";
export const ProductDetails = () => {


    let { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const pro = products?.products?.find((p) => p.id == id)

    function a() {
        if (products != null) {
            console.log(id)
            pro = products?.products?.find((p) => p.id == id)
            console.log("pro", pro)
        }
    }
    return (
        <>
            <img src={pro?.images[0]}></img>
            <h1>{pro?.title}</h1>
            <h3>{pro?.price}</h3>
            <p>{pro?.description}</p>
        </>
    )
}



