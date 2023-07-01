import React from 'react'
import Layout from '../components/layout/Layout';
import { Box , Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,
      padding:3,
        textAlign:"center",
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize: "2rem",
        },
        "& p":{
          textAlign:"justify",
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:'1.5rem'
          }
        }
        }}>
        <Typography variant='h4'>
          Welcome to Cake Heaven
        </Typography>
        <p>
        Quis ipsum eu ea adipisicing aute ea eiusmod quis 
        dolor Lorem nulla. In culpa fugiat qui ea qui tempor
         irure dolore non nostrud duis cillum duis. 
         Occaecat enim irure fugiat dolor eu reprehenderit 
         velit aute esse amet. Quis duis id est aute sunt 
         commodo reprehenderit occaecat ipsum. Dolore commodo
         consequat non ut non minim Lorem eu qui magna culpa
         nulla cupidatat amet. Exercitation irure aute officia
         cupidatat officia ad.Quis ipsum eu ea adipisicing aute ea eiusmod quis 
         dolor Lorem nulla. In culpa fugiat qui ea qui tempor
         irure dolore non nostrud duis cillum duis. 
         Occaecat enim irure fugiat dolor eu reprehenderit 
         velit aute esse amet. Quis duis id est aute sunt 
         commodo reprehenderit occaecat ipsum. Dolore commodo
         consequat non ut non minim Lorem eu qui magna culpa
         nulla cupidatat amet. Exercitation irure aute officia
         cupidatat officia ad.
        </p>
        <br /> 
        <p>
        Exercitation irure aute officia
         cupidatat officia ad.Quis ipsum eu ea adipisicing aute ea eiusmod quis 
         dolor Lorem nulla. In culpa fugiat qui ea qui tempor
         irure dolore non nostrud duis cillum duis. 
         Occaecat enim irure fugiat dolor eu reprehenderit 
         velit aute esse amet. Quis duis id est aute sunt 
         commodo reprehenderit occaecat ipsum. Dolore commodo
         consequat non ut non minim Lorem eu qui magna culpa
         nulla cupidatat amet. Exercitation irure aute officia
         cupidatat officia ad.  
        </p>
      </Box>
    </Layout>
  );
};

export default About;