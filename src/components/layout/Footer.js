import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:3}}>
            <Box sx={{my: 3, "& svg" :{
                fontSize:"60px",
                cursor:'pointer',
                mr:2,},
                "& svg:hover":{
                    color:'gold',
                    transform:'translate(5px)',
                    transition:'all 400ms',
                }
                }}>
                {/*Icons */}
                <InstagramIcon/>
                <TwitterIcon/>
                <GitHubIcon/>
                <YouTubeIcon/>
            </Box>
            <Typography varaint= "h3" sx={{"@media (max-width:600px)":{fontSize:"1rem"}}}>
                All Right Reserved &copy; cakeheaven.com
            </Typography>
        </Box>
    </>
  )
}

export default Footer;
