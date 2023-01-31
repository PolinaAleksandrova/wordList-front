import React, {useState} from 'react';
import{Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import AdminTranslateData from './AdminTranslateData';
import {v4 as uuid} from "uuid";
import {useHistory} from 'react-router-dom'

function AddTranslateTable(){

    const[nameTranslate, setTrName] = useState('');
    const[audioTranslate, setTrAudio] = useState('');

    let history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = nameTranslate,
        b= audioTranslate;

        AdminTranslateData.push({id : uniqueId, translate_name: a, translate_audio : b});

        history.push("/adminTr");
    }
    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>

            <Form.Group className="mb-3" controlId="formNameTr">
                <Form.Control type="text" placeholder="Enter translate_name" required onChange={(e) => setTrName(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAudioTr">
                <Form.Control type="text" placeholder="Enter translate_audio" required onChange={(e) => setTrAudio(e.target.value)}>

                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type ="submit">Submit</Button>

        </Form>
</div>
    
}
export default AddTranslateTable;