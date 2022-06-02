import axios from 'axios';
import React, { useEffect, useState } from 'react'
import URL_POST from '../../config'

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
      <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.title}
              <p>{item.content}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Post