import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Banner from  '../images/Banner.jpg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className='headerContainer'>
            <h1>Delicious Cakes</h1>
            <p>Divinely Delicious, Every Time</p>
            <Link to='/menu'>
              <button>
                ORDER  NOW
              </button>
            </Link>
           </div>
        </div>
    </Layout>
  );
};

export default Home;