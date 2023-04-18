import { useDispatch, useSelector } from "react-redux";
import { removeProdInCart, setCart, setNewProdInCart } from '../../redux/actions/cart.actions'


import Button from '@mui/material/Button';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./ViewCart.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const ViewCart = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);


  
  function addToCart(singleProduct) {
    // console.log("useEffectcart", cart)
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
        dispatch(setCart([...cart]));
        console.log("cart", cart)

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
        dispatch(setCart([...cart]));
    }
    console.log("cart", cart)

}

  return (
    <div id="cart">
      {console.log("cartView", cart)}

      <TableContainer component={Paper} id="myTable">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Gift Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Num Of Tickets</TableCell>
              <TableCell align="right">NIS Per Ticket</TableCell>
              <TableCell align="right">Total Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.map((value, index) => (
              <TableRow key={value.product.singleProduct.title}>
                <TableCell component="th" scope="row">
                  {value.product.singleProduct.title}
                </TableCell>
                <TableCell align="right">
                  <img
                    src={value.product.singleProduct?.images[0]}
                    width="15%"
                  ></img>
                </TableCell>
                <TableCell align="right">
                <Button size="small" onClick={() => { addToCart(value.product.singleProduct); }}>+</Button>
                    <p>{value.product.count}</p>
                    <Button size="small" onClick={() => { lessFromCart(value.product.singleProduct); }}>-</Button>
                </TableCell>
                <TableCell align="right">
                  {value.product.singleProduct.price}
                </TableCell>
                <TableCell align="right">
                  {value.product.singleProduct.price * value.product.count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
