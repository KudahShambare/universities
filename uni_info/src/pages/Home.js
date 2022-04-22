import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from 'styled-components';
import Welcome from '../components/Welcome';
import GetStarted from "../components/GetStarted";

const Home: React.FC = () => {
 
  return (
   
  
    <IonPage>
      <IonHeader id='home-header'>
        <IonToolbar>
          <IonTitle >SA Universities Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        
   <Welcome/>
<GetStarted/>

      </IonContent>
    </IonPage>
  );
};

export default Home;
