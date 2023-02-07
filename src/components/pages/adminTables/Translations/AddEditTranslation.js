import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import '../../../AddEdit.css';
import axios from 'axios';
import {toast} from "react-toastify";

const initialState = {
    translateName: "",
    audioName: ""
};

const AddEditTranslation = () => {
    const [state, setState] = useState(initialState);
    const {translateName, audioName} = state;
    const history = useHistory();
    const {id} = useParams();
    
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/translates/${id}`,{
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            responseType: "json",
          })
        .then((resp)=> setState({...resp.data}));
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!translateName || !audioName){
            toast.error("Please provide value into each input field");
        }else{
            if(!id){
                axios.post("http://localhost:8080/translates", {
                    translateName,
                    audioName,
                },{
                    headers: {
                      'Access-Control-Allow-Origin' : '*',
                      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    responseType: "json",
                  })
                .then(()=>{
                    setState({translateName:"",audioName:""});
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Word added successfuly");
            }else{
                axios
                .put(`http://localhost:8080/translates/${id}`, {
                    translateName,
                    audioName,
            },{
                headers: {
                  'Access-Control-Allow-Origin' : '*',
                  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
                responseType: "json",
              })
            .then(()=>{
                setState({translateName:"",audioName:""});
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
                <label htmlFor="name">translateName</label>
                <input
                type ="text"
                id = "translateName"
                name = "translateName"
                placeholder="Your translateName ..."
                value={translateName || ""}
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
                <Link to ="/translateTable">
                    <input type ="button" value ="Go Back"/>
                </Link>
                </form>
        </div>
    )
}

export default AddEditTranslation;