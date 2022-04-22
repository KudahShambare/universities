import { IonPage } from "@ionic/react";
import styled from "styled-components";
import "../components/Components.css"


const data=[
1,2,3
]
//end of data
const start=()=>{
console.log("Start");
}
const GetStarted=()=>{
return(
<>
<h2>Please select a university which you want to get information about</h2>
<select>
{data.map((val)=>{
return console.log(val)
})}

</select>
</>
)
}
export default GetStarted;