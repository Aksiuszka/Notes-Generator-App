import { makeStyles } from '@material-ui/core';
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@material-ui/core/Typography';
import { FaNewspaper, FaPencilAlt } from "react-icons/fa";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useHistory, useLocation} from 'react-router-dom';
import  './Layout.css'
import Logo from './logo.png'
import Kitty from './kitt.png'
import Books from './books.svg'



const drawerWidth = 240;
const useStyles= makeStyles({
    page:{
        background:'#DBD7D2',
        width:'100%',
        padding: 20
    },
    drawer:{
        width: drawerWidth
        
    },
    root:{
        display:'flex',
        marginTop:10
    },
    active:{
        background:'#FFFFFF'
    },
    appbar:{
        width: `calc(100% - ${drawerWidth}px)`,
        background:'white'
    },
    logo:{
        height:80
    }
})
function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text:"Moje notatki",
            icon: <FaNewspaper/>,
            path:'/'
        },
        {
            text:"Wygeneruj notatkę",
            icon: <FaPencilAlt/>,
            path:'/singlenote'
        }
    ]
    return (
   <div>
       <div className="logo-container">
        <img id="logo" src={Logo} alt="logo"/>
        <img id="kitty" src={Kitty} alt="logo"/>
        <img id="books" src={Books} alt="logo"/>
        </div>
    <div className={classes.root}>
          
          
      
  <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
          <div><Typography
          variant="h6">
              Notatki dla 3 semestru informatyki SWPW
      </Typography>
      </div>
      <List>
          {menuItems.map(item=>(
              <ListItem 
              button
              key={item.text}
              onClick={()=>history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}>
                  
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  </ListItem>
          )
          )}
      </List>
    
           </Drawer>
           <div className={classes.logo}></div>
        <div className={classes.page}>
            {children}
        </div>
        </div>
        </div>
       
    )
}

export default Layout
