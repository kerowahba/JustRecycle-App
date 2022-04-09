import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonMenuButton, IonButton, IonIcon, IonDatetime, IonSelectOption, IonList, IonItem, IonLabel, IonSelect, IonPopover, IonText } from '@ionic/react';
import './About.scss';

import { format, parseISO } from 'date-fns';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {

  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>();
  const [location, setLocation] = useState<'madison' | 'austin' | 'chicago' | 'seattle'>('madison');
  const [conferenceDate, setConferenceDate] = useState('2047-05-17T00:00:00-05:00');

  const selectOptions = {
    header: 'Select a Location'
  };

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  function displayDate(date: string, dateFormat: string) {
    return format(parseISO(date), dateFormat);
  }

  return (
    <IonPage id="about-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="about-header">
          <div className="about-image about" style={{'opacity': '1' }}></div>
        </div>
        <div className="about-info">
          <h3 className="ion-padding-top ion-padding-start" style={{color: '#28ba62'}}>About</h3>

          <p className="ion-padding-start ion-padding-end">
          JustRecycle App gives the user the proper knowledge to categorize different kinds of trash and shows them how to get rid of them while not contaminating the environment while demonstrating the garbage truck schedule based on the different cities in Quebec. As well as, it provides a map to show the users which city their street/neighbor belongs to and check the truck pickup schedule accordingly.  
          <br/><br/> 
          Since this App has been developed by a Concordia Students group, so the Map has been centered to show Concordia University, Montreal, Quebec.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(About);