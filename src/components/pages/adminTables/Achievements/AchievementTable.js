import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../AdminPage.css';




const AchievementTable = () => {
  const [data, setData] = useState([]);

  const loadData = async() => {
    const token = "Bearer " + document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).data.split('=')[1];
    console.log(token)
    const response = await axios.get("http://localhost:8080/achievements",{
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      responseType: "json",
    })
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  }, []);

  const deleteAchievement = (id) => {
    if(window.confirm("Are you sure that you want to delete this achievement ?")){
      const token = "Bearer " + document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1];  
        axios.delete(`http://localhost:8080/achievements/${id}`,{
          headers: {
            'Authorization':token
          },
          responseType: "json",
        });
  
        setTimeout(() => loadData(), 500);
    }
  }
  return (
    <div style ={{marginTop: "150px"}}>
      <Link to="/addAchievement">
       <button className ="btn btn-contact">Add Achievement</button> 
      </Link>
      
      <table className="styled-table">
        <thead>
          <tr>
            <th style ={{textAlign: "center"}}>Id</th>
            <th style ={{textAlign: "center"}}>achievementName</th>
            <th style ={{textAlign: "center"}}>achievementType</th>
            <th style ={{textAlign: "center"}}>bricks</th>
            <th style ={{textAlign: "center"}}>description</th>
            <th style ={{textAlign: "center"}}>requirement</th>
            <th style ={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key ={item.id}>
                <th scope ="row">{index+1}</th>
                <td>{item.achievementName}</td>
                <td>{item.achievementType}</td>
                <td>{item.bricks}</td>
                <td>{item.description}</td>
                <td>{item.requirement}</td>
                
                <td>
                  <Link to={`/achievement/update/${item.id}`}>
                  <button className ="btn btn-edit">Edit</button>
                  </Link>
                  <button className ="btn btn-delete" onClick ={() => deleteAchievement(item.id)}>Delete</button>
                  <Link to={`/achievement/view/${item.id}`}>
                  <button className ="btn btn-view">View</button>
                  </Link>
                  </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  
    
  );
  
};

export default AchievementTable;