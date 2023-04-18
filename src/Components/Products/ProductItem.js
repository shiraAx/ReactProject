import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProdInCart,
  setCart,
  setNewProdInCart,
} from "../../redux/actions/cart.actions";
import { getAllProducts } from "../../services/products.service";
import { setProducts } from "../../redux/actions/products.actions";
//////////
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
/////////////////

export const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [numOfCards, setNumOfCards] = useState(0);
  useEffect(() => {
    dispatch(setCart([]));
  }, []);
  function changeNavigate() {
    navigate(`/products/${props.product.id}`);
  }

  function addToCart(singleProduct) {
    //console.log("useEffectcart", cart)
    const prod = cart?.find(
      (p) => p.product.singleProduct.id == singleProduct.id
    );
    //console.log("prod", prod)
    const index = cart?.findIndex(
      (p) => p.product.singleProduct.id == singleProduct.id
    );
    //   console.log("index", index)
    if (!prod) {
      dispatch(setNewProdInCart({ singleProduct, count: 1 }));
      console.log("setNewProdInCart cart", cart);
    } else {
      let count = prod.product.count + 1;
      cart[index].product.count = count;
      // console.log("cart[index]", cart[index])
      // console.log("cart", cart)
      dispatch(setCart([...cart]));
    }
  }
  function lessFromCart(singleProduct) {
    const prod = cart?.find(
      (p) => p.product.singleProduct.id == singleProduct.id
    );
    console.log("prod", prod);
    const index = cart?.findIndex(
      (p) => p.product.singleProduct.id == singleProduct.id
    );
    console.log("index", index);
    console.log("proddd", prod);
    if (prod.product.count == 1) dispatch(removeProdInCart(singleProduct));
    else {
      let count = prod.product.count - 1;
      cart[index].product.count = count;
      dispatch(setCart([...cart]));
    }
    console.log("cart", cart);
  }

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "row",
        //   '& > :not(style)': {
        //     m: 1,
        //     width: 128,
        //     height: 128,
        //   },
      }}
    >
      <Card sx={{ width: 250, height: 300, padding: 3, margin: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.product.images[0]}
          title={props.product.title}
          onClick={changeNavigate}
        />
        <CardContent onClick={changeNavigate}>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.price} NIS
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              addToCart(props.product);
              setNumOfCards(numOfCards + 1);
            }}
          >
            +
          </Button>
          <p>{numOfCards}</p>
          <Button
            size="small"
            onClick={() => {
              lessFromCart(props.product);
              setNumOfCards(numOfCards - 1);
            }}
          >
            -
          </Button>
        </CardActions>
      </Card>

      {/* 
            <li>
                <div >
                    <img src={props.product.images[0]} onClick={changeNavigate}></img>
                    <h1 onClick={changeNavigate}>{props.product.title}</h1>
                    <h3 onClick={changeNavigate}>{props.product.price}</h3>
                    <button onClick={() => { addToCart(props.product); setNumOfCards(numOfCards + 1) }} >+</button>
                    <p>{numOfCards}</p>
                    <button onClick={() => { lessFromCart(props.product); setNumOfCards(numOfCards - 1) }} >-</button>
                </div>
            </li> */}
    </div>
  );
};
