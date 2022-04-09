import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonText, IonTextarea, IonToast } from '@ionic/react';
import './Login.scss';
import { connect } from '../data/connect';

interface OwnProps { }

interface DispatchProps { }

interface SupportProps extends OwnProps, DispatchProps { }

const Home: React.FC<SupportProps> = () => {

  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!message) {
      setMessageError(true);
    }
    if (message) {
      setMessage('');
      setShowToast(true);
    }
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle style={{fontWeight:'bold', fontSize:'30px',
              color: '#28ba62'}}>JustRecycle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-logo" style={{position:'relative', textAlign:'center'}}>
          <img src="assets/img/home.png" alt="Ionic logo" style={{width:'75%'}} />
        </div>
        <IonText >
              <h1  style={{ textAlign:'center'}}>
                Welcome to <span style={{color:'#28ba62' }}>
                 <b><em>
                     JustRecycle 
                  </em></b>
                </span> App
              </h1>
              <br/>
              <h2  style={{ textAlign:'center'}}>
               Please choose from the side menu to start your Journey
              </h2>
              </IonText>
        {/* <form noValidate onSubmit={send}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Enter your support message below</IonLabel>
              <IonTextarea name="message" value={message} spellCheck={false} autocapitalize="off" rows={6} onIonChange={e => setMessage(e.detail.value!)}
                required>
              </IonTextarea>
            </IonItem>

            {formSubmitted && messageError && <IonText color="danger">
              <p className="ion-padding-start">
                Support message is required
              </p>
            </IonText>}
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Submit</IonButton>
            </IonCol>
          </IonRow>
        </form> */}
       
      </IonContent>
     
      <IonToast
        isOpen={showToast}
        duration={3000}
        message="Your support request has been sent"
        onDidDismiss={() => setShowToast(false)} />
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  component: Home
})