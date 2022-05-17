import React, { useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "../firebase-config";

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerUser, setRegisterUser] = useState("");

    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const register = async () => {
        if(registerEmail == "" || registerPassword == "" || registerUser){
            alert("Please enter all the information")
        }
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword,
            registerUser
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
    

    const paperStyle = { padding: 20, width: 335, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'rgb(151, 76, 255)' }
    const marginTop = { marginTop: 5 }
    const btnstyle={margin:'8px 0', marginTop: '30px', backgroundColor: 'rgb(151, 76, 255)'}
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 >Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" onChange={(event) => {
          setRegisterUser(event.target.value);
          }}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" onChange={(event) => {
          setRegisterEmail(event.target.value);}}/>
                    <TextField fullWidth label='Password' placeholder="Enter your password" onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}/>
                    <Button onClick={register} color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;