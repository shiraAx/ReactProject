import { useState , useEffect } from "react"
import { useDispatch ,useSelector } from "react-redux"
import {getAllUsers} from "../../services/users.service"
import {setNewUser, setUsers} from "../../redux/actions/users.actions"
import { addUser } from "../../services/users.service"
import { SET_PRODUCTS } from "../../redux/actions/products.actions"

export const Register=()=>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    // const [myUser, setMyUser]=useState({
    //     firstName:firstName,
    //     lastName:lastName,
    //     email:email,
    //     phone:phone,
    //     password:password
    // })
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    useEffect(() => {
        if (!users)
        getAllUsers().then(data => {
                dispatch(setUsers(data.data.users));
                console.log(data.data)
            })
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        let myUser={
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone,
            password:password
        }
        addUser(myUser).then((R)=>{dispatch(setNewUser(myUser));console.log(R)})
        
        console.log("user2", users)
        // setUsers().then(t=>console.log(t))
      //  await getAllUsers().then(console.log("user2", users))

    }


    return(<>
    <form>
        {console.log("user1", users)}
        <input id="firstName" type={"text"} placeholder="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
        <input id="lastName" type={"text"} placeholder="lastName" onChange={(e) => setLastName(e.target.value)}></input>
        <input id="email" type={"email"} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input id="phone" type={"text"} placeholder="phone" onChange={(e) => setPhone(e.target.value)}></input>
        <input type={"password"} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={(e) => { handleSubmit(e) }}>Login</button>
        
    </form>

    </>)
   
}