import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import '../../../AddEdit.css';
import axios from 'axios';
import {toast} from "react-toastify";

const initialState = {
    wordName: "",
    audioName: ""
};

const AddEditWord = () => {
    const [state, setState] = useState(initialState);
    const {wordName, audioName} = state;
    const history = useHistory();
    const {id} = useParams();
    
    useEffect(()=>{
        const token = "Bearer " + document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1];
        axios
        .get(`http://localhost:8080/words/${id}`,{
            headers: {
                "Authorization": token
            },
            responseType: "json",
          })
        .then((resp)=> setState({...resp.data}));
    },[id]);

    const handleSubmit = (e) => {
        const token = "Bearer " + document.cookie.split('; ').find(cookie => cookie.startsWith('token=')).split('=')[1]; 
        e.preventDefault();
        if(!wordName || !audioName ){
            toast.error("Please provide value into each input field");
        }else{
            if(!id){
                axios.post("http://localhost:8080/words", {
                    wordName,
                    audioName
                },{
                    headers: {
                        'Authorization':token
                    },
                    responseType: "json",
                  })
                .then(()=>{
                    setState({wordName:"", audioName:""});
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Word added successfuly");
            }else{
                axios
                .put(`http://localhost:8080/words/${id}`, {
                    wordName,
                    audioName
            },{
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
                responseType: "json",
              })
            .then(()=>{
                setState({wordName:"",audioName:""});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Word updated successfuly");
            }
            
            setTimeout(() => history.push("/wordTable"),500);
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
                <label htmlFor="name">wordName</label>
                <input
                type ="text"
                id = "wordName"
                name = "wordName"
                placeholder="Your wordName ..."
                value={wordName || ""}
                onChange={handleInputChange}
                />
                <label htmlFor="audioName">audioName</label>
                <input
                type ="text"
                id = "audioName"
                name = "audioName"
                placeholder="Your audioName ..."
                value={audioName || ""}
                onChange={handleInputChange}
                />
                
                <input type ="submit" value={id ? "Update" : "Save"}/>
                <Link to ="/wordTable">
                    <input type ="button" value ="Go Back"/>
                </Link>
                </form>
        </div>
    )
}

export default AddEditWord;