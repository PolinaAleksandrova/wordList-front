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
  
    const deleteWord = (id) => {
      if(window.confirm("Are you sure that you want to delete this word ?")){
        const token = "Bearer " + document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1];  
          axios.delete(`http://localhost:8080/words/${id}`,{
            headers: {
              'Authorization':token
            },
            responseType: "json",
          });
    
          setTimeout(() => loadData(), 500);
      }
    }

    return (
        
        <div class="sidebar">
            {/* <center>
                <img src="1.png" class="profile_image" alt="">
            <h4>Jessica</h4>
            </center> */}
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

        
    )
}

export default Sidebar
