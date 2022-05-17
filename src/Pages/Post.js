import React, {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, FormControl,InputLabel, Select, MenuItem } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { getDocs, getFirestore, collection, query, where, addDoc } from 'firebase/firestore';
import { auth as user } from '../firebase-config';



function Post(auth) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [subject, setSubject] = useState("");
    const [standard, setStandard] = useState("");
    const db = getFirestore()
    const colRef = collection(db, 'resources');
    

    const addResource = () => {
        if(title == "" || description == "" || link == "" || subject == "" || standard == ""){
           return alert("Please enter all information");
        }
        addDoc(colRef,{
            title,
            description,
            link,
            subject,
            standard,
            email: user.currentUser.email
        })
        .then(() => {
        const add = document.querySelector('.add')
        add.reset()}
    )
    }
 
    console.log(auth.authorized.currentUser)
    // if(auth.currentUser == undefined){

    // }
  if(auth.authorized.currentUser != null){
    if(auth.authorized.currentUser.email != null){
        const paperStyle={padding :20 ,width:335, margin:"0 auto"}
    const avatarStyle={backgroundColor:'rgb(151, 76, 255)'}
    const btnstyle={margin:'8px 0', marginTop: '30px', backgroundColor: 'rgb(151, 76, 255)'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Add Resource</h2>
                </Grid>
                <form className='Add'>
                <TextField label='Title' placeholder='Enter Title' fullWidth required  onChange={(event) => {
              setTitle(event.target.value);
            }}/>
            <TextField label='Description' placeholder='Enter Description' fullWidth required  onChange={(event) => {
              setDescription(event.target.value);
            }}/>
                <TextField label='Resource' placeholder='Enter resource link' fullWidth required  onChange={(event) => {
              setLink(event.target.value);
            }}/>
                <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-label">Standard</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                value={standard}
                    label="Standard"
                    onChange={(event) => {setStandard(event.target.value);}}
                        
                >
                    <MenuItem value={"class10"}>ClassX</MenuItem>
                    <MenuItem value={"class12"}>ClassXII</MenuItem>
                    <MenuItem value={"cse"}>CSE</MenuItem>
                    <MenuItem value={"it"}>IT</MenuItem>
                    <MenuItem value={"cce"}>CCE</MenuItem>
                </Select>
                </FormControl>
                <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subject}
                    label="Subject"
                    onChange={(event) => {setSubject(event.target.value);}}
                                    >
                    <MenuItem value={"Science"}>Science</MenuItem>
                    <MenuItem value={"English"}>English</MenuItem>
                    <MenuItem value={"OS"}>OS</MenuItem>
                    <MenuItem value={"RDBMS"}>RDBMS</MenuItem>
                    <MenuItem value={"CN"}>CN</MenuItem>
                    <MenuItem value={"DSML"}>DSML</MenuItem>
                    <MenuItem value={"ISS"}>ISS</MenuItem>
                    <MenuItem value={"DSA"}>DSA</MenuItem>
                    <MenuItem value={"OOPS"}>OOPS</MenuItem>
                    <MenuItem value={"DAA"}>DAA</MenuItem>
                    <MenuItem value={"WEB"}>WEB</MenuItem>
                </Select>
                </FormControl>
                <Button  color='primary' variant="contained" style={btnstyle} fullWidth onClick={addResource}>Add Resource</Button>
                </form>
            </Paper>
        </Grid>
    )
     } 
  }else{ 
    return <Navigate to = "/" />
  }
}

export default Post