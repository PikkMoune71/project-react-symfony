import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/app.css'

function Post() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const token = window.localStorage.getItem("authToken")
    const fetchData = async () => {
      const res = await axios('http://localhost:8000/api/posts', {
          headers: {
              'Authorization': `Bearer ${token}` 
            }
      });

      setData(res.data)
    };

    fetchData();
  })

  return (
    <div>
      <Link to="/add-post"><button className='add-post'>Ajouter un Post</button></Link>
      <div className='container_card'>
            {data.map(item => (
              <div key={item.id} className="card">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <span>{item.user}</span>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Post