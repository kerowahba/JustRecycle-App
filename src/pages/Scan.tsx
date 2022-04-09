import React, { useState, useRef, useEffect } from 'react';

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonIcon,
  IonHeader,
  getConfig,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import {
  camera,

} from 'ionicons/icons';


import './ScanPage.scss'


import * as selectors from '../data/selectors';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import { Schedule } from '../models/Schedule';
import ScanInfo from './ScanInfo';
import { Speaker } from '../models/Speaker';

interface OwnProps { }

interface StateProps {
  schedule: Schedule;
  favoritesSchedule: Schedule;
  mode: 'ios' | 'md';
  speakers: Speaker[];
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}

type SchedulePageProps = OwnProps & StateProps & DispatchProps;

const SchedulePage: React.FC<SchedulePageProps> = ({ favoritesSchedule, schedule, setSearchText, mode, speakers }) => {
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  let rnd = 0;

  const handleClick = () => {
    setImgIdx(rnd);
    setShowInfo(true)
  };

  const randomize = () => {
    rnd = Math.round(10000000 * (Math.random())) % speakers.length;
    console.log(rnd);
    return true;
  }

  return (
    <IonPage ref={pageRef} id="scan-page">
      <IonHeader translucent={true}>
        <IonToolbar className={"header_title"}>
          {!showSearchbar &&
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          }
          {!ios && !showSearchbar &&
            <IonTitle style={{fontWeight:'bold', fontSize:'30px', backgroundColor:'#dedede',
              color: '#654e29'}} >Scan Object</IonTitle>
          }
        </IonToolbar>
      </IonHeader>

      {!showInfo && randomize() &&
        <>
          <IonContent fullscreen={true}>
            <div style={{ maxHeight: `${window.innerHeight - 113}px`, overflow: 'hidden' }}>
              <img src={speakers[rnd].profilePic} alt='' style={{ display: 'block', marginLeft: 'auto', marginTop: 'auto', marginRight: 'auto', height: '100%', width: '100%' }} />

            </div>
          </IonContent>

          <IonFab slot="fixed" vertical="bottom" horizontal="center">
            <IonFabButton onClick={() => handleClick()}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
        </>
      }
      {showInfo && <ScanInfo itemId={imgIdx} setShowInfo={setShowInfo}/>}
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    schedule: selectors.getSearchedSchedule(state),
    favoritesSchedule: selectors.getGroupedFavorites(state),
    mode: getConfig()!.get('mode'),
    speakers: selectors.getSpeakers(state),
  }),
  mapDispatchToProps: {
    setSearchText
  },
  component: React.memo(SchedulePage)
});