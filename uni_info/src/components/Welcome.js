import { IonPage } from "@ionic/react";
import styled from "styled-components";
import "../components/Components.css"


const Welcome=()=>{
 
    return(

        <><h1>SA Universities Info</h1>
        <img src={require("../images/sa_flag.png")} alt="sa-flag" />
        <p>We provide you with the necessary information you need to have about the 26 public universities in South Africa</p></>
    )
}
export default Welcome;