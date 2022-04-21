import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styled from 'styled-components';


const Home: React.FC = () => {
 
  return (
   
  
    <IonPage>
      <IonHeader id='home-header'>
        <IonToolbar>
          <IonTitle >SA Universities Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader >
      
        </IonHeader>
   
      </IonContent>
    </IonPage>
  );
};

export default Home;
