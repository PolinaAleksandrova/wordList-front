import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "../View.css"

const View = () => {
    const [word, setWord] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp)=> setWord({...resp.data[0]}));
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
                <strong>word_name: </strong>
                <span>{word.word_name}</span>
                <br/>
                <br/>
                <strong>audio_name: </strong>
                <span>{word.audio_name}</span>
                <br/>
                <br/>
                <Link to ="/adminPage">
                <div className="btn btn-edit">Go Back</div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default View