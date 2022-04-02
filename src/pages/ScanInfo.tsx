import React, { useState, useRef } from 'react';

import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonButton, IonIcon, IonHeader, getConfig } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import './ScanPage.scss'
import { connect } from '../data/connect';


interface OwnProps {
  itemId: number,
  setShowInfo: Function,
}

interface StateProps {
  mode: 'ios' | 'md'
}

type SchedulePageProps = OwnProps & StateProps;

const ScanInfo: React.FC<SchedulePageProps> = ({ itemId, mode, setShowInfo }) => {
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  return (
    <IonPage ref={pageRef} id="scan-info-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          {!showSearchbar &&
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          }
          {!ios && !showSearchbar &&
            <IonTitle>Scanned Object's Info</IonTitle>
          }
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonButton onClick={() => setShowInfo(false)}>
          <IonIcon icon={arrowBack} />
        </IonButton>
        <div>
          <p style={{ fontSize: '72px' }}>{itemId}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps>({
  mapStateToProps: (state) => ({
    mode: getConfig()!.get('mode')
  }),
  component: React.memo(ScanInfo)
});