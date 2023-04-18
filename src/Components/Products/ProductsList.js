import React from "react";
import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/products.actions";
import { getAllProducts } from "../../services/products.service";
import "./Products.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const ProductList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    if (!products)
      getAllProducts().then((data) => {
        dispatch(setProducts(data.data));
      });
  }, []);
  return (
    <div className={classes.root} id="mainDiv">
    <Grid container spacing={10}>
      {/* {console.log("ProductList", products)} */}
      {products?.products?.map((singleProduct, index) => {
        return (
          <div key={index}>
            <Grid item xs={8} sm={10}>
                {" "}
                <ProductItem class="card" product={singleProduct} />
            </Grid>
          </div>
          
        );
      })}
       </Grid>
    </div>
      
    //   <div className={classes.root}>
    //   <Grid container spacing={10}>
    //     <Grid item xs={3} sm={3}>
    //       <Paper className={classes.paper}>xs=6 sm=6</Paper>
    //     </Grid>
        
    //   </Grid>
    // </div>
    // </div>
  );
};
