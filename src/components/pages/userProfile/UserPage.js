import React from 'react'

import { Link } from 'react-router-dom'
import '../userProfile/UserPage.css'

const Sidebar = () => {
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

        // <nav className="sidebar">
        //     {/* <div className="sidebar-header">TODO ALL FEATURES</div> */}
        //     <li>
        //         <Link to="/todolist" className="sidebar-link">
        //             <div>TodoList</div>
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/count" className="sidebar-link">
        //             <div>Count</div>
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/" className="sidebar-link">
        //             <div>Sessões</div>
        //         </Link>
        //     </li>
        // </nav>
    )
}

export default Sidebar
