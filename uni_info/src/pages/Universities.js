import { IonPage } from "@ionic/react";
import styled from "styled-components";
import "../components/Components.css"
import PageHeader from  "../components/PageHeader.js";
import  {Form  }  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  data from  "../data.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chosen from '../pages/Chosen.js';




const Universities=()=>{



return(
<IonPage>
<PageHeader/>
<div id="uniList">

<Form.Select aria-label="Default select example"    onChange={(e)=>{
e.preventDefault();
const value=e.target.value;

}}>
  <option>Select a university</option>

{ data.map((elem)=>{

return <option key={elem.name}>{elem.name} </option>

})}

</Form.Select>


<Link to={
{
pathname:"my-choice",
state:{
university:{}
}
}
}>

<button id="getInfo"   >  Get Information </button>

</Link>
</div>



</IonPage>

)
}
 export default Universities;