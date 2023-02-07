import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "../../../View.css"

const ViewAchievement = () => {
    const [achievement, setAchievement] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios
        .get(`http://localhost:8080/achievements/${id}`,{
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            responseType: "json",
          })
        .then((resp)=> setAchievement({...resp.data}));
    },[id]);
    return (
        <div style ={{marginTop:"150px"}}>
            <div className="card">
            <div className="card-header">
                <p>Achievement Detail</p>
            </div>
            <div className="container">
                <strong>ID: </strong>
                <span>{id}</span>
                <br/>
                <br/>
                <strong>achievementName: </strong>
                <span>{achievement.achievementName}</span>
                <br/>
                <br/>
                <strong>achievementType: </strong>
                <span>{achievement.achievementType}</span>
                <br/>
                <br/>
                <strong>bricks: </strong>
                <span>{achievement.bricks}</span>
                <br/>
                <br/>
                <strong>description: </strong>
                <span>{achievement.description}</span>
                <br/>
                <br/>
                <strong>requirement: </strong>
                <span>{achievement.requirement}</span>
                <br/>
                <br/>
                <Link to ="/achievementTable">
                <div className="btn btn-edit">Go Back</div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default ViewAchievement