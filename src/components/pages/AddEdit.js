import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import '../AddEdit.css';
import axios from 'axios';
import {toast} from "react-toastify";

const initialState = {
    wordName: "",
    audioName: ""
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const {wordName, audioName} = state;
    const history = useHistory();
    const {id} = useParams();
    
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/translates/${id}`)
        .then((resp)=> setState({...resp.data[0]}));
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!wordName || !audioName){
            toast.error("Please provide value into each input field");
        }else{
            if(!id){
                axios.post("http://localhost:8080/translates", {
                    wordName,
                    audioName,
                })
                .then(()=>{
                    setState({wordName:"",audioName:""});
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Word added successfuly");
            }else{
                axios
                .put(`http://localhost:8080/translates/${id}`, {
                    wordName,
                    audioName,
            })
            .then(()=>{
                setState({wordName:"",audioName:""});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Word updated successfuly");
            }
            
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
                value={wordName || ""}
                onChange={handleInputChange}
                />
                <label htmlFor="audio_name">audio_name</label>
                <input
                type ="text"
                id = "audio_name"
                name = "audio_name"
                placeholder="Your audio_name ..."
                value={audioName || ""}
                onChange={handleInputChange}
                />
                <input type ="submit" value={id ? "Update" : "Save"}/>
                <Link to ="/adminPage">
                    <input type ="button" value ="Go Back"/>
                </Link>
                </form>
        </div>
    )
}

export default AddEdit;