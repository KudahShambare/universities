import { IonPage } from "@ionic/react";
import styled from "styled-components";
import "../components/Components.css"
import PageHeader from  "../components/PageHeader.js";
import { useLocation } from 'react-router-dom';


const Chosen=()=>{

const location=useLocation();
console.log(location.state)

return(
<IonPage>
<PageHeader/>

</IonPage>



)
}
export default Chosen;