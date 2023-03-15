import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "../../../View.css"

const ViewTranslation = () => {
    const [translation, setTranslation] = useState({});

    const {id} = useParams();
    const token = document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1]; 
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/translates/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            responseType: "json",
          })
        .then((resp)=> setTranslation({...resp.data}));
    },[id]);
    return (
        <div style ={{marginTop:"150px"}}>
            <div className="card">
            <div className="card-header">
                <p>Translation Detail</p>
            </div>
            <div className="container">
                <strong>ID: </strong>
                <span>{id}</span>
                <br/>
                <br/>
                <strong>translateName: </strong>
                <span>{translation.translateName}</span>
                <br/>
                <br/>
                <strong>audioName: </strong>
                <span>{translation.audioName}</span>
                <br/>
                <br/>
                <Link to ="/translateTable">
                <div className="btn btn-edit">Go Back</div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default ViewTranslation