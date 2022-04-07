import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './SpeakerDetail.scss';

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';

import { connect } from '../data/connect';
import * as selectors from '../data/selectors';

import { Speaker } from '../models/Speaker';


interface OwnProps extends RouteComponentProps {
  speaker?: Speaker;
};

interface StateProps {};

interface DispatchProps {};

interface SpeakerDetailProps extends OwnProps, StateProps, DispatchProps {};

const SpeakerDetail: React.FC<SpeakerDetailProps> = ({ speaker }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openSpeakerShare(speaker: Speaker) {
    setActionSheetButtons([
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy Link clicked');
        }
      },
      {
        text: 'Share via ...',
        handler: () => {
          console.log('Share via clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]);
    setActionSheetHeader(`Share ${speaker.name}`);
    setShowActionSheet(true);
  }

  function openContact(speaker: Speaker) {
    setShowActionSheet(true);
  }

  function openExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  if (!speaker) {
    return <div>Speaker not found</div>
  }

  return (
      <IonPage id="speaker-detail">
        <IonContent>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/tabs/history" />
              </IonButtons>
              <IonButtons slot="end">
                <IonButton onClick={() => openContact(speaker)}>
                  <IonIcon slot="icon-only" ios={callOutline} md={callSharp}></IonIcon>
                </IonButton>
                <IonButton onClick={() => openSpeakerShare(speaker)}>
                  <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <div className="speaker-background">
            <img src={speaker.profilePic} alt={speaker.name}/>
            <h2>{speaker.name}</h2>
          </div>

          <div className="ion-padding speaker-detail">
            <hr/>
          </div>
        </IonContent>
        <IonActionSheet
            isOpen={showActionSheet}
            header={actionSheetHeader}
            onDidDismiss={() => setShowActionSheet(false)}
            buttons={actionSheetButtons}
        />
      </IonPage>
  );
};


export default connect({
  mapStateToProps: (state, ownProps) => ({
    speaker: selectors.getSpeaker(state, ownProps)
  }),
  component: SpeakerDetail
});
