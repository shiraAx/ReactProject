import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../services/users.service";
import { setUsers } from "../../redux/actions/users.actions";
import { useNavigate } from "react-router-dom";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    if (!users)
      getAllUsers().then((data) => {
        dispatch(setUsers(data.data.users));
        console.log(data.data);
      });
  }, []);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    setFirstNameError("");
    setLastNameError("");
    setPasswordError("");
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
    if (!isValid) {
      return;
    }

    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("password", password);
    let user = users?.find(
      (u) => u.firstName == firstName && u.lastName == lastName
    );
    if (!user) {
      console.log("navigate");
      swal("You are not registered", "Please try register!");
      navigate(`/register`);
    } else {
      if (user.password != password) {
        swal("Worong password!", "Please try again!");
      } else {
        swal({
          title: "Are you sure?",
          text: "Do you want to buy these tickets?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("You succeded!!!", {
              icon: "success",
            });
          } else {
            swal("We are sorry!");
          }
        });
        document.getElementById("loginForm").reset();
      }
    }
  }
  return (
    <div>
      {console.log("users", users)}

      <form
        id="loginForm"
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ margin: "5%" }}
      >
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
      </form>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Login
      </Button>
    </div>
  );
};

