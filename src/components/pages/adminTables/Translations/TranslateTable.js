import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../AdminPage.css';




const TranslateTable = () => {
  const [data, setData] = useState([]);

  const loadData = async() => {
    const response = await axios.get("http://localhost:8080/translates",{
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      responseType: "json",
    })
    setData(response.data);
  };

  useEffect(() =>{
    loadData();
  }, []);

  const deleteTranslation = (id) => {
    if(window.confirm("Are you sure that you want to delete this translation ?")){
        axios.delete(`http://localhost:8080/translates/${id}`,{
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
          responseType: "json",
        });
  
        setTimeout(() => loadData(), 500);
    }
  }
  return (
    <div style ={{marginTop: "150px"}}>
      <Link to="/addTranslation">
       <button className ="btn btn-contact">Add Translation</button> 
      </Link>
      
      <table className="styled-table">
        <thead>
          <tr>
            <th style ={{textAlign: "center"}}>Id</th>
            <th style ={{textAlign: "center"}}>translateName</th>
            <th style ={{textAlign: "center"}}>audioName</th>
            <th style ={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key ={item.id}>
                <th scope ="row">{index+1}</th>
                <td>{item.translateName}</td>
                <td>{item.audioName}</td>
                <td>
                  <Link to={`/translate/update/${item.id}`}>
                  <button className ="btn btn-edit">Edit</button>
                  </Link>
                  <button className ="btn btn-delete" onClick ={() => deleteTranslation(item.id)}>Delete</button>
                  <Link to={`/translate/view/${item.id}`}>
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

export default TranslateTable;