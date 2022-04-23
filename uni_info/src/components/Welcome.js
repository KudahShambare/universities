import { IonPage } from "@ionic/react";
import styled from "styled-components";
import "../components/Components.css"
import { Link } from 'react-router-dom';



const Welcome=()=>{
 
    return(
<>
<h1>SA Universities Info</h1>
        <img src={require("../images/sa_flag.png")} alt="sa-flag" />
        <div id="welcome">
 <p>We provide you with the necessary information you need to have about the 26 public universities in South Africa</p>
   <video autoPlay muted  >
<source src={require("../images/bACKGROUND.mp4" ) } type="video/mp4"/>
</video>
       

</div>
<Link to="/universities">
<button	id="getStarted">Get Started  </button>

</Link>
</> 



    )
}
export default Welcome;