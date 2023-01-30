import React, {useState, useEffect} from 'react';
import{Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import AdminDataTable from './AdminDataTable';
import {v4 as uuid} from "uuid";
import {useHistory} from 'react-router-dom';

function Edit(){
    const[nameWord, setWordName] = useState('');
    const[nameAudio, setAudioName] = useState('');
    const[id, setId] = useState('');
    let history = useHistory();

    var index = AdminDataTable.map(function(e){
        return e.id
      }).indexOf(id);
      
      const handleSubmit = (e) =>{
        e.preventDefault();
        let a = AdminDataTable[index];
        a.word_name = nameWord;
        a.audio_name = nameAudio;

        history.push("/adminPage");
    }
    useEffect(() => {
      setWordName(localStorage.getItem('word_name'))  
        setAudioName(localStorage.getItem('audio_name'))   
        setId(localStorage.getItem('Id'))     
    },[])
      return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>

<Form.Group className="mb-3" controlId="formWordName">
    <Form.Control type="text" placeholder="Enter word_name" value ={nameWord} required onChange={(e) => setWordName(e.target.value)}>

    </Form.Control>
</Form.Group>
<Form.Group className="mb-3" controlId="formAudioName">
    <Form.Control type="text" placeholder="Enter audio_name" value ={nameAudio} required onChange={(e) => setAudioName(e.target.value)}>

    </Form.Control>
</Form.Group>
<Button onClick={(e) => handleSubmit(e)} type ="submit">Update</Button>

</Form>
        </div>
      )
}
export default Edit;