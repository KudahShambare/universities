import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
import "../components/Components.css";
import PageHeader from  "../components/PageHeader.js";

const Home: React.FC = () => {
 
  return (
   
  
    <IonPage>
 <PageHeader/>
      <IonContent >
     
   <Welcome/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
