import React from 'react'
import { useState } from 'react'
import axios from "axios";

const Form = () => {
const [formData, setFormData] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: ""
})

function handleSubmit(event) {
    event.preventDefault()
    axios
      .post("http://127.0.0.1:3000/foods", {food: formData});
}

  return (
      <form onSubmit={handleSubmit}>
        <input onChange={(event)=> {console.log(event.target.checked)}} type="checkbox" />
        <label htmlFor="name">Name:</label>
        <input onChange={(event)=> {
            setFormData({...formData, name:event.target.value})
        }} id='name' type="text" value={formData.name} />
        <label htmlFor="calories">Calories:</label>
        <input onChange={(event)=> {
            setFormData({...formData, calories:event.target.value})
        }}
         id='calories' type="text" value={formData.calories} />
        <label htmlFor="protein">Proteins:</label>
        <input onChange={(event)=> {
            setFormData({...formData, protein:event.target.value})
        }} id="protein" type="text" name="" value={formData.protein} />
        <label htmlFor="carbs">Carbs:</label>
        <input onChange={(event)=> {
            setFormData({...formData, carbs:event.target.value})
        }} type="text" name="" id="carbs"  value={formData.carbs}/>
        <button type='submit' className='w-20 h-8 bg-[#323232] text-white'>Send</button>
      </form>
  )
}

export default Form
