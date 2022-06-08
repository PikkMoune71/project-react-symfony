import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/app.css'

function Post() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState();
  
  useEffect(() => {
    const token = window.localStorage.getItem("authToken")
    const fetchData = async () => {
      const res = await axios('http://localhost:8000/api/posts', {
          headers: {
              'Authorization': `Bearer ${token}` 
            },
      });
      setData(res.data)
      setCount(res.data.length)
    };

    fetchData();
  })

  return (
    <div>
      <Link to="/add-post"><button className='add-post'>Ajouter un Post</button></Link>
      <h4 className='count'>Nombre de posts : {count}</h4>
      <div className='container_card'>
            {data.map(item => (
              <div key={item.id} className="card">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                {/* <span>De : {item.user}</span> */} 
              </div>
              
            ))}
      </div>
    </div>
  )
}

export default Post