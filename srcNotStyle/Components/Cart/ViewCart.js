import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/actions/cart.actions";

export const ViewCart = () => {



    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    // useEffect(() => {
    //     dispatch(setCart(data.data.users));
    //     console.log(data.data)

    // }, [])
    function a() {

    }
    return (<div>
        {console.log("cartView", cart)}
        <h1>carttttttttttttt</h1>
        <ul>
        {cart?.map((value, index) => {
           return <li key={index}>{value.product.singleProduct.title} , {value.product.count}</li>
        })}
        </ul>
    </div>)
}