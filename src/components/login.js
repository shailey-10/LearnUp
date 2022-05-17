import React, { useState } from 'react'
import {

    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "../firebase-config";
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useNavigate} from 'react-router-dom'

const Login=({handleChange})=>{
   let history = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  

    const login = async () => {
        if(loginEmail == "" || loginPassword == ""){
            alert("Please enter email and password")
        }
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
        history.push('/')
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const logout = async () => {
      await signOut(auth);
    };
    const paperStyle={padding :20 ,width:335, margin:"0 auto"}
    const avatarStyle={backgroundColor:'rgb(151, 76, 255)'}
    const btnstyle={margin:'8px 0', marginTop: '30px', backgroundColor: 'rgb(151, 76, 255)'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter username' fullWidth required  onChange={(event) => {
              setLoginEmail(event.target.value);
            }}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required  onChange={(event) => {
              setLoginPassword(event.target.value);
            }}/>
                
                <Button  onClick={login} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
              
            </Paper>
        </Grid>
    )
}

export default Login
