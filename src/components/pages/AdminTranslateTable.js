import React, {Fragment} from 'react';
import {Table, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import AdminTranslateData from '../AdminTranslateData';
import {Link,useHistory} from 'react-router-dom'


function AdminTranslateTable(){

  let history = useHistory();
  const handleEdit = (id, nameTranslate, audioTranslate) =>{
    localStorage.setItem('translate_name',nameTranslate);
    localStorage.setItem('translate_audio',audioTranslate);
    localStorage.setItem('Id',id);
  }
  const handleDelete = (id)=>{
    var index = AdminTranslateData.map(function(e){
      return e.id
    }).indexOf(id);

    AdminTranslateData.splice(index,1);

    history.push('/adminTr');

  }

  return(
    <Fragment>
      <div style={{margin:"10rem"}}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
                <th>
                translate_name
                </th>
                <th>
                translate_audio
                </th>
                <th>
                  Actions
                </th>
            </tr>
          </thead>
          <tbody>
            {
              AdminTranslateData && AdminTranslateData.length > 0
              ?
              AdminTranslateData.map((item) =>{
                return(
                  <tr>
                    <td>
                      {item.translate_name}
                    </td>
                    <td>
                      {item.translate_audio}
                    </td>
                    <td>
                      <Link to={`/edit`}>
                      <Button onClick={() => handleEdit(item.id, item.translate_name, item.translate_audio)}>EDIT</Button>
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
export default AdminTranslateTable;