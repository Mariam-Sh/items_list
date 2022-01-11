import React, { useState, useEffect } from 'react';
import './App.css';
const  App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => setData(json));
  },[]);

  // console.log(data)
  return data.map( (d,index) => (
    <div className='card' key={index}>
      <p disabled><span className='des'>Name:</span> {d.name} </p>
      <p><span className='des'>Username:</span> {d.username}</p>
      <p><span className='des'>Email:</span> {d.email}</p>
      <p><span className='des'>City:</span> {d.address.city}</p>
    </div>
  ) ) 
}

export default App
