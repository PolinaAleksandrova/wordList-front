import React, {useState, useEffect} from 'react';
import{Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import AdminTranslateData from './AdminTranslateData';
import {v4 as uuid} from "uuid";
import {useHistory} from 'react-router-dom';

function EditTranslateTable(){
    const[nameTranslate, setTrName] = useState('');
    const[audioTranslate, setTrAudio] = useState('');
    const[id, setId] = useState('');
    let history = useHistory();

    var index = AdminTranslateData.map(function(e){
        return e.id
      }).indexOf(id);
      
      const handleSubmit = (e) =>{
        e.preventDefault();
        let a = AdminTranslateData[index];
        a.translate_name = nameTranslate;
        a.translate_audio = audioTranslate;

        history.push("/adminTr");
    }
    useEffect(() => {
      setTrName(localStorage.getItem('translate_name'))  
      setTrAudio(localStorage.getItem('translate_audio'))   
        setId(localStorage.getItem('Id'))     
    },[])
      return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>

<Form.Group className="mb-3" controlId="formNameTr">
    <Form.Control type="text" placeholder="Enter translate_name" value ={nameTranslate} required onChange={(e) => setTrName(e.target.value)}>

    </Form.Control>
</Form.Group>
<Form.Group className="mb-3" controlId="formAudioTr">
    <Form.Control type="text" placeholder="Enter translate_audio" value ={audioTranslate} required onChange={(e) => setTrAudio(e.target.value)}>

    </Form.Control>
</Form.Group>
<Button onClick={(e) => handleSubmit(e)} type ="submit">Update</Button>

</Form>
        </div>
      )
}
export default EditTranslateTable;