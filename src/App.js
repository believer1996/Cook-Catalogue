import React, {  useEffect, useState } from 'react';
import './App.css';
export function App() {

  const[result,setResult]=useState([]);

  async function fetchData(){
    const data= await fetch('https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes');
    const response=await data.json();
    return response;
  }

  useEffect(()=>{
    fetchData().then((result)=>{
      setResult(result);
    });
  },[])

  return (
    <div className="app">
     
    {result && result.map((item)=>{
    return   <div className="image-container" key={item.id}> 
        <p>{item.title}</p> 
        <img src={item.image} />
        </div>
      })}
    </div>

  );
  }
