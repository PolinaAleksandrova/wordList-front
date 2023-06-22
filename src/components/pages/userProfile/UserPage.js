import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import '../userProfile/UserPage.css'
import  {useState, useEffect} from 'react';

const Sidebar = () => {

    const [data, setData] = useState([]);
    
    
    const loadData = async() => {
      const token = "Bearer " + document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1]; 
      console.log(token)
      const response = await axios.get("http://localhost:8080/users/byToken",{
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        responseType: "json",
      })
      setData(response.data);
      console.log(response.data)
    };
  
    useEffect(() =>{
      loadData();
    }, []);
  

    return (
        <div>
        <div class="sidebar">
            
            <Link to="/note">
                <i class="fas fa-list-ol"></i>
                <span>Todo List</span>
            </Link>
            
            <Link to="/availableTests">
                <i class="fas fa-border-style"></i>
                <span>Sessions</span>
            </Link>
            <a href="/calendar">
                <i class="fas fa-desktop"></i>
                <span>Dashboard</span>
            </a>
            <a href="/meet">
                <i class="fas fa-th"></i>
                <span>Meeting</span>
            </a>
        </div>
        <center>
        <fieldset className="userInfo">
          {data.firstName && <p>Hello, {data.firstName}</p>}
          {data.lastName && <p>{data.lastName}</p>}
          {data.email && <p>Email {data.email}</p>}
          {data.bricks && <p>bricks: {data.bricks}</p>}
        </fieldset>
      </center>
</div>
        
    )
}

export default Sidebar
