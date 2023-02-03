import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../AdminPage.css';




const AdminPage = () => {
  const [data, setData] = useState([]);

  const loadData = async() => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  }, []);
  return (
    <div style ={{marginTop: "150px"}}>
      <Link to="/addWord">
       <button className ="btn btn-word">Add Word</button> 
      </Link>
      
      <table className="styled-table">
        <thead>
          <tr>
            <th style ={{textAlign: "center"}}>Id</th>
            <th style ={{textAlign: "center"}}>word_name</th>
            <th style ={{textAlign: "center"}}>audio_name</th>
            <th style ={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key ={item.id}>
                <th scope ="row">{index+1}</th>
                <td>{item.word_name}</td>
                <td>{item.word_audio}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                  <button className ="btn btn-edit">Edit</button>
                  </Link>
                  <button className ="btn btn-delete">Delete</button>
                  <Link to={`/view/${item.id}`}>
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

export default AdminPage;