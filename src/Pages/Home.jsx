import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import "../Styles/home.css";
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

const Home = () => {

  const [list,setList]=useState([]);

  useEffect(()=>{
     fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json").then((res)=>{
        return res.json();
     }).then((res)=>{
        setList(res)
     })
  },[])

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="filter">
          <div>
            <p>Color</p>
            [""]
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div className="prodlist">
           {
           list.length>0?list.map((el)=>{
               return <Product key={el.id} el={el}/>
            }):  <Spinner animation="border" variant="success" />
           }
        </div>
      </div>
    </>
  );
};

export default Home;
