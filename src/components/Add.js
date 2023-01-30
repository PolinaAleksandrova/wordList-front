import React, {useState} from 'react';
import{Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {useHistory} from 'react-router-dom'

function Add(){

    const[nameWord, setWordName] = useState('');
    const[nameAudio, setAudioName] = useState('');

    let history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = nameWord,
        b= nameAudio;

        Employees.push({id : uniqueId, word_name: a, audio_name : b});

        history.push("/adminPage");
    }
    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>

            <Form.Group className="mb-3" controlId="formWordName">
                <Form.Control type="text" placeholder="Enter word_name" required onChange={(e) => setWordName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAudioName">
                <Form.Control type="text" placeholder="Enter audio_name" required onChange={(e) => setAudioName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type ="submit">Submit</Button>

        </Form>
</div>
    
}
export default Add;