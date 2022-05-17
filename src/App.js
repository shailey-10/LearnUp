import './App.css';
import './Nav.css'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home';
import ClassX from './Pages/ClassX';
import ClassXII from './Pages/ClassXII';
import Cse from './Pages/Cse';
import It from './Pages/It';
import Cce from './Pages/Cce';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Button } from '@material-ui/core';
import Login from './Pages/Login'
import { auth } from './firebase-config';
import { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { makeStyles } from "@material-ui/core/styles";
import Post from './Pages/Post';


const drawerWidth = 240;


function App() {

  const logout = async () => {
    await signOut(auth);
  };

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    paper: {
      backgroundColor : "rgb(151, 76, 255, 0.3) !important;"
    }
  });
  
  const classes = useStyles();

  return (<>

      <Router>
      <div className="navbar">
        <div className="logo">
          LearnUp
        </div>
        <div className="nav-contents">
        <Link to = "/"  class = "nav-item"> Home </Link>
        <Link to = "/class10" class = "nav-item"> Class 10 </Link>
        <Link to = "/class12" class = "nav-item"> Class 12 </Link>
        <Link to = "/cse" class = "nav-item"> CSE </Link>
        <Link to = "/it" class = "nav-item"> IT </Link>
        <Link to = "/cce" class = "nav-item"> CCE </Link>
        {user ? <Link to = "/post" class = "nav-item"> Add Post </Link>: null}
        </div>
        <div className="nav-button">
        {!user ? <Link to = "/join" class = "button-white">Join Us</Link> : <Button onClick={logout} class = "button-white">Logout</Button> }
        </div>
    
    </div>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer classes={{ paper: classes.paper }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Link to = "/"  class = "drawer-item"> Home </Link>
        <Link to = "/class10" class = "drawer-item"> Class 10 </Link>
        <Link to = "/class12" class = "drawer-item"> Class 12 </Link>
        <Link to = "/cse" class = "drawer-item"> CSE </Link>
        <Link to = "/it" class = "drawer-item"> IT </Link>
        <Link to = "/cce" class = "drawer-item"> CCE </Link>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/class10" element={<ClassX />}/>
          <Route path = "/class12" element={<ClassXII />}/>
          <Route path = "/cse" element={<Cse />}/>
          <Route path = "/it" element={<It />}/>
          <Route path = "/cce" element={<Cce />}/>
          <Route path = "/join" element={<Login authorized = {user}/>}/>
          <Route path = "/post" element={<Post authorized = {auth}/>}/>
        </Routes>
      </Box>
    </Box>
        
        </Router>
        </>
  );
}

export default App;
