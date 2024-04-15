import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';


const App = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/foods")
      .then(function (response) {
        setFoods(response.data)
      });
  }, []);
  console.log(foods);
  return (
    <div className=" bg-[#]">
      {foods.map((food)=> <div><h1 className=" bg-[#626262]">{food.name}</h1> {food.calories}</div> )}
      
    </div>
  )
}

export default App
  