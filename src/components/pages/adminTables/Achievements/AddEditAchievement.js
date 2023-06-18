import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import '../../../AddEdit.css';
import axios from 'axios';
import {toast} from "react-toastify";

const initialState = {
    id: 0,
    achievementName: "",
    achievementType: "",
    bricks: "",
    description: "",
    requirement: 0
};

const AddEditAchievement = () => {
    const [state, setState] = useState(initialState);
    const {achievementName, achievementType, bricks, description, requirement} = state;
    const history = useHistory();
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
        .then((resp)=> setState({...resp.data}));
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!achievementName || !achievementType){
            toast.error("Please provide value into each input field");
        }else{
            if(!id){
                axios.post("http://localhost:8080/achievements", {
                    id,
                    achievementName,
                    achievementType,
                    bricks,
                    description,
                    requirement
                },{
                    headers: {
                      'Access-Control-Allow-Origin' : '*',
                      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                    responseType: "json",
                  })
                .then(()=>{
                    setState({ id: 0, achievementName: "", achievementType: "", bricks: "", description: "", requirement: 0});
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Achievement added successfuly");
            }else{
                axios
                .put(`http://localhost:8080/achievements/${id}`, {
                    id,
                    achievementName,
                    achievementType,
                    bricks,
                    description,
                    requirement
            },{
                headers: {
                  'Access-Control-Allow-Origin' : '*',
                  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
                responseType: "json",
              })
            .then(()=>{
                setState({ id: 0, achievementName: "", achievementType: "", bricks: "", description: "", requirement: 0});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Achievement updated successfuly");
            }
            
            setTimeout(() => history.push("/achievementTable"),500);
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
                <label htmlFor="name">achievementName</label>
                <input
                type ="text"
                id = "achievementName"
                name = "achievementName"
                placeholder="Your achievementName ..."
                value={achievementName}
                onChange={handleInputChange}
                />
                <label htmlFor="achievementType">achievementType</label>
                <input
                type ="text"
                id = "achievementType"
                name = "achievementType"
                placeholder="Your achievementType ..."
                value={achievementType || ""}
                onChange={handleInputChange}
                />
                 <input
                type ="text"
                id = "bricks"
                name = "bricks"
                placeholder="Your bricks ..."
                value={bricks || ""}
                onChange={handleInputChange}
                />
                 <input
                type ="text"
                id = "description"
                name = "description"
                placeholder="Your description ..."
                value={description || ""}
                onChange={handleInputChange}
                />
                 <input
                type ="text"
                id = "requirement"
                name = "requirement"
                placeholder="Your requirement ..."
                value={requirement || ""}
                onChange={handleInputChange}
                />
                <input type ="submit" value={id ? "Update" : "Save"}/>
                <Link to ="/achievementTable">
                    <input type ="button" value ="Go Back"/>
                </Link>
                </form>
        </div>
    )
}

export default AddEditAchievement;