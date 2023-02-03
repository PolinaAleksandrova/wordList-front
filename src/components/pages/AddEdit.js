import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import '../AddEdit.css';
import axios from 'axios';
import {toast} from "react-toastify";

const initialState = {
    word_name: "",
    audio_name: ""
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const {word_name, audio_name} = state;
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!word_name || !audio_name){
            toast.error("Please provide value into each input field");
        }else{
            axios.post("http://localhost:5000/api/post", {
                word_name,
                audio_name,
            })
            .then(()=>{
                setState({word_name:"",audio_name:""});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Word added successfuly");
            setTimeout(() => history.push("/adminPage"),500);
        }
    };

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setState({...state, [name]: value});
    };
    return (
        <div style = {{marginTop: "100px"}}>
            <form style ={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
            
            onSubmit={handleSubmit}
            >
                <label htmlFor="name">word_name</label>
                <input
                type ="text"
                id = "word_name"
                name = "word_name"
                placeholder="Your word_name ..."
                value={word_name}
                onChange={handleInputChange}
                />
                <label htmlFor="audio_name">audio_name</label>
                <input
                type ="text"
                id = "audio_name"
                name = "audio_name"
                placeholder="Your audio_name ..."
                value={audio_name}
                onChange={handleInputChange}
                />
                <input type ="submit" value="Save"/>
                <Link to ="/adminPage">
                    <input type ="button" value ="Go Back"/>
                </Link>
                </form>
        </div>
    )
}

export default AddEdit;