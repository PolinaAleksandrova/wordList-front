import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "../../View.css"

const ViewTranslation = () => {
    const [translation, setTranslation] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios
        .get(`http://localhost:5000/translate/get/${id}`)
        .then((resp)=> setTranslation({...resp.data[0]}));
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
                <strong>translate_name: </strong>
                <span>{translation.translate_name}</span>
                <br/>
                <br/>
                <strong>audio_name: </strong>
                <span>{translation.audio_name}</span>
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