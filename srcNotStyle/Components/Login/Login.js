import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {getAllUsers} from "../../services/users.service"
import {setUsers} from "../../redux/actions/users.actions"
import { useNavigate } from "react-router-dom";
export const Login = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    useEffect(() => {
        if (!users)
        getAllUsers().then(data => {
                dispatch(setUsers(data.data.users));
                console.log(data.data)
            })
    }, [])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        console.log("firstName", firstName)
        console.log("lastName", lastName)
        console.log("password", password)
        let user = users?.find(u=>u.firstName==firstName && u.lastName==lastName )
        if(!user)
           {console.log("navigate")
            navigate(`/register`)}
        else{
            if(user.password!=password)
                alert("worng password")
        }
        

    }
    return (<form>
        {console.log("users",users)}
        <input id="firstName" type={"text"} placeholder="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
        <input id="lastName" type={"text"} placeholder="lastName" onChange={(e) => setLastName(e.target.value)}></input>
        <input type={"password"} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={(e) => { handleSubmit(e) }}>Login</button>
        
    </form>)





}