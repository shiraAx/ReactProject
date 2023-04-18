import { useState , useEffect } from "react"
import { useDispatch ,useSelector } from "react-redux"
import {getAllUsers} from "../../services/users.service"
import {setNewUser, setUsers} from "../../redux/actions/users.actions"
import { addUser } from "../../services/users.service"
import { SET_PRODUCTS } from "../../redux/actions/products.actions"
import swal from 'sweetalert';

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Register=()=>{
    const classes = useStyles();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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
        setFirstNameError("");
        setLastNameError("");
        setPasswordError("");
        setEmailError("");
        setPhoneError("");
        let isValid = true;
        if (!firstName.trim()) {
          setFirstNameError("First name is required");
          isValid = false;
        }
        if (!lastName.trim()) {
          setLastNameError("Last name is required");
          isValid = false;
        }
        if (!password.trim()) {
          setPasswordError("Password is required");
          isValid = false;
        }
        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
          }
          if (!phone.trim()) {
            setPhone("Phone is required");
            isValid = false;
          }
        if (!isValid) {
          return;
        }
    
        let myUser={
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone,
            password:password
        }
        addUser(myUser).then((R)=>{dispatch(setNewUser(myUser));console.log(R)})
        swal("You registered succesfully!", "good luck!");
        document.getElementById("registerForm").reset()

        console.log("user2", users)

    }


    return(<>
        {console.log("user1", users)}
        
    <form id="registerForm" className={classes.root} noValidate autoComplete="off" style={{margin:"5%"}}>
        <TextField
          id="firstName"
          type={"text"}
          label="firstName"
          color="secondary"
          onChange={(e) => setFirstName(e.target.value)}
          error={!!firstNameError}
          helperText={firstNameError}
        />
        <TextField
          id="lastName"
          type={"text"}
          label="lastName"
          color="secondary"
          onChange={(e) => setLastName(e.target.value)}
          error={!!lastNameError}
          helperText={lastNameError}
        />
        <TextField
          id="password"
          type={"password"}
          label="password"
          color="secondary"
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
        />
           <TextField
          id="email"
          type={"email"}
          label="email"
          color="secondary"
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
        />
           <TextField
          id="phone"
          type={"text"}
          label="phone"
          color="secondary"
          onChange={(e) => setPhone(e.target.value)}
          error={!!phoneError}
          helperText={phoneError}
        />
      </form>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Register
      </Button>
    </>)
   
}