import React, {Fragment} from 'react';
import {Table, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import Employees from '../Employees';
import {Link,useHistory} from 'react-router-dom'


function AdminPage(){

  let history = useHistory();
  const handleEdit = (id, nameWord, nameAudio) =>{
    localStorage.setItem('word_name',nameWord);
    localStorage.setItem('audio_name',nameAudio);
    localStorage.setItem('Id',id);
  }
  const handleDelete = (id)=>{
    var index = Employees.map(function(e){
      return e.id
    }).indexOf(id);

    Employees.splice(index,1);

    history.push('/adminPage');

  }

  

  return(
    <Fragment>
      <div style={{margin:"10rem"}}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
                <th>
                word_name
                </th>
                <th>
                audio_name
                </th>
                <th>
                  Actions
                </th>
            </tr>
          </thead>
          <tbody>
            {
              Employees && Employees.length > 0
              ?
              Employees.map((item) =>{
                return(
                  <tr>
                    <td>
                      {item.word_name}
                    </td>
                    <td>
                      {item.audio_name}
                    </td>
                    <td>
                      <Link to={`/edit`}>
                      <Button onClick={() => handleEdit(item.id, item.word_name, item.audio_name)}>EDIT</Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                    </td>
                  </tr>
                )
              })
              :
              "No data available"
            }
          </tbody>
        </Table>
        <br>
        </br>
        <Link className='d-grid gap-2' to ="create">
          <Button size = "lg">Create</Button>
        </Link>
        </div>
    </Fragment>
  )
}
export default AdminPage;