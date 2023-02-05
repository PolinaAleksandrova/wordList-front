import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import '../../AddEdit.css';
import axios from 'axios';
import {toast} from "react-toastify";

const initialState = {
    translate_name: "",
    audio_name: ""
};

const AddEditTranslation = () => {
    const [state, setState] = useState(initialState);
    const {translate_name, audio_name} = state;
    const history = useHistory();
    const {id} = useParams();
    
    useEffect(()=>{
        axios
        .get(`http://localhost:5000/translate/get/${id}`)
        .then((resp)=> setState({...resp.data[0]}));
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!translate_name || !audio_name){
            toast.error("Please provide value into each input field");
        }else{
            if(!id){
                axios.post("http://localhost:5000/translate/post", {
                    translate_name,
                    audio_name,
                })
                .then(()=>{
                    setState({translate_name:"",audio_name:""});
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Word added successfuly");
            }else{
                axios
                .put(`http://localhost:5000/translate/update/${id}`, {
                    translate_name,
                    audio_name,
            })
            .then(()=>{
                setState({translate_name:"",audio_name:""});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Word updated successfuly");
            }
            
            setTimeout(() => history.push("/translateTable"),500);
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
                <label htmlFor="name">translate_name</label>
                <input
                type ="text"
                id = "translate_name"
                name = "translate_name"
                placeholder="Your translate_name ..."
                value={translate_name || ""}
                onChange={handleInputChange}
                />
                <label htmlFor="audio_name">audio_name</label>
                <input
                type ="text"
                id = "audio_name"
                name = "audio_name"
                placeholder="Your audio_name ..."
                value={audio_name || ""}
                onChange={handleInputChange}
                />
                <input type ="submit" value={id ? "Update" : "Save"}/>
                <Link to ="/translateTable">
                    <input type ="button" value ="Go Back"/>
                </Link>
                </form>
        </div>
    )
}

export default AddEditTranslation;