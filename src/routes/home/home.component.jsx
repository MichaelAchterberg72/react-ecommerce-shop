
import React from "react";
import { Outlet } from 'react-router-dom';
import Directory from "../../components/directory/directory.component";


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageurl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageurl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageurl: 'https://i.ibb.co/GCCdy8t/womans.png'
    },
    {
      id: 5,
      title: 'Mens',
      imageurl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];
  
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>);
};


export default Home;