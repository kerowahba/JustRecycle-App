import React from 'react';
import { Session } from '../models/Schedule';
import { Speaker } from '../models/Speaker';
import './SpeakerItem.css';
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonList,
  IonNavLink,
  IonRow, IonGrid, IonCol
} from '@ionic/react';


interface SpeakerItemProps {
  speaker: Speaker;
  sessions: Session[];
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({ speaker, sessions }) => {
  return (
      <>
        <IonCard className="speaker-card">
          <IonCardHeader>
            <IonItem button detail={false} lines="none" className="speaker-item">
              {/*<IonAvatar slot="start">*/}
              <img src={process.env.PUBLIC_URL + speaker.profilePic} alt="Speaker profile pic" className={"image"}/>
              {/*</IonAvatar>*/}
              <IonLabel>
                <h2>{speaker.name}</h2>
                <p>{speaker.title}</p>
              </IonLabel>
            </IonItem>
          </IonCardHeader>

          <IonCardContent>
            <IonList lines="none">
              <IonGrid>
                <IonRow>
                  <IonCol className={'item_type'} size ='3'>Type</IonCol>
                  <IonCol className={'item_detail'}>{speaker.garbageType}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className={'item_type'} size ='3'>Material</IonCol>
                  <IonCol className={'item_detail'}>{speaker.material}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className={'item_type'} size ='3'>Instructions</IonCol>
                  <IonCol className={'item_detail'}>{speaker.instruction}</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className={'item_type'} size ='3'>Reusing Ideas</IonCol>
                  <IonCol className={'item_detail'}><a href={speaker.reuse}>{speaker.reuse}</a></IonCol>
                </IonRow>
              </IonGrid>
            </IonList>
          </IonCardContent>
        </IonCard>
      </>
  );
};

export default SpeakerItem;