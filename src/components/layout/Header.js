import React,{useState} from 'react';
import Logo from '../../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';  




const Header = () => {
  const [mobileOpen, setMobileOpen]= useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();


  //handle menu click
  const handleDrawerToggle =() => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center', width:200,}}>
        <Typography color={'gold'} variant='h6' component='div' sx={{ flexGrow: 1, my:2}}>
        <img src={Logo} alt="logo" height={"40"} width="180" padding={'10'} />
              </Typography>
              <Divider />
              <ul className="mobile-navigation">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
                 </Box>
   

  );
  return (
    <>
        <Box>
          <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
            <IconButton 
                color="inherit"
                aria-label="open drawer"
                edge="start"  onClick={handleDrawerToggle} >
                  <MenuIcon />
            </IconButton>
              <Typography fontWeight={'bold'} fontSize={'1.5rem'} color={'#f44336'} variant='h6' component='div' sx={{ flexGrow: 1}}>
                  <img src={Logo} alt="logo" height={"40"} width="250" 
                  style={{ marginTop: "1%", display: "inline-block;" }}/>
              </Typography>
                <Box sx={{ display:{xs:"none" ,sm:"block"}}}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink activeClassName="active" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  
                  {isAuthenticated && (
                   <li>
                       <p> {user.name} </p>
                    </li>
                   )}

                  {isAuthenticated ? (

                    <li>
                    <Button variant="contained"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                      Log Out
                    </Button>
                    </li>
                    ): (
                    <li>
                      <Button  variant="contained" onClick={() => loginWithRedirect()}>Log In</Button>
                    </li>
                  
                  )}
              </ul>
                 </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav" width={240} >
             <Drawer variant="temporary" open={mobileOpen} 
             onClose={handleDrawerToggle} 
             >
              {drawer}
             </Drawer>
          </Box>
            <Box>
              <Toolbar />
           </Box>
         </Box>
    </>
  );
};

export default Header;