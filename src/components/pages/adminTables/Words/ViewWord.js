import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "../../../View.css"

const ViewWord = () => {
    const [word, setWord] = useState({});

    const {id} = useParams();
    const token = document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1]; 
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/words/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            responseType: "json",
          })
        .then((resp)=> setWord({...resp.data}));
    },[id]);
    return (
        <div style ={{marginTop:"150px"}}>
            <div className="card">
            <div className="card-header">
                <p>Word Detail</p>
            </div>
            <div className="container">
                <strong>ID: </strong>
                <span>{id}</span>
                <br/>
                <br/>
                <strong>wordName: </strong>
                <span>{word.wordName}</span>
                <br/>
                <br/>
                <strong>audioName: </strong>
                <span>{word.audioName}</span>
                <br/>
                <br/>
                
                <Link to ="/wordTable">
                <div className="btn btn-edit">Go Back</div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default ViewWord