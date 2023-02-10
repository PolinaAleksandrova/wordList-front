import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import '../AdminPage.css';



import Sidebar from '../SideBar/Sidebar'



const AdminPage = () => {
  return (
    <div style ={{marginTop: "150px"}}>
      <Link to="/translateTable">
       <button className ="btn btn-trTable">Translate Table</button> 
      </Link>
      <Link to="/wordTable">
       <button className ="btn btn-word">Word Table</button> 
      </Link>
      <Link to="/achievementTable">
       <button className ="btn btn-achievement">Achievement Table</button> 
      </Link>
      <Sidebar />;
    </div>
  );
};


export default AdminPage;