import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../AdminPage.css';




const AdminPage = () => {
  return (
    <div style ={{marginTop: "150px"}}>
      <Link to="/translateTable">
       <button className ="btn btn-trTable">Translate Table</button> 
      </Link>
      <Link to="/wordTable">
       <button className ="btn btn-trTable">Word Table</button> 
      </Link>
      <Link to="/achievementTable">
       <button className ="btn btn-trTable">Achievement Table</button> 
      </Link>
    </div>
  
    
  );
  
};

export default AdminPage;