import React, { useState, useRef, useEffect } from 'react';

import {
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonTitle,
  IonMenuButton,
  // IonSegment,
  // IonSegmentButton,
  // IonButton,
  IonIcon,
  // IonSearchbar,
  // IonRefresher,
  // IonRefresherContent,
  // IonToast,
  // IonModal,
  IonHeader,
  getConfig,
  // IonImg,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import {
  camera,
  // options,
  // search
} from 'ionicons/icons';

// import SessionList from '../components/SessionList';
// import SessionListFilter from '../components/SessionListFilter';
import './ScanPage.scss'

// import ShareSocialFab from '../components/ShareSocialFab';

import * as selectors from '../data/selectors';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import { Schedule } from '../models/Schedule';
import ScanInfo from './ScanInfo';
// import { getConfData } from '../data/dataApi';
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
  // const [segment, setSegment] = useState<'all' | 'favorites'>('all');
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  // const [showFilterModal, setShowFilterModal] = useState(false);
  // const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  // useEffect(() => {
  //   const rnd = Math.round(100000 * (Math.random())) % speakers.length;
  //   setImgIdx(rnd);
  // }, []);

  // const rnd = Math.round(10000000 * (Math.random())) % speakers.length;
  // const image = {
  //   // src: '/assets/img/garbage/images/empty_water_bottle.jpg',
  //   src: speakers[rnd].profilePic,
  //   id: rnd,
  // };

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
        <IonToolbar>
          {!showSearchbar &&
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
          }
          {/* {ios &&
            <IonSegment value={segment} onIonChange={(e) => setSegment(e.detail.value as any)}>
              <IonSegmentButton value="all">
                All
              </IonSegmentButton>
              <IonSegmentButton value="favorites">
                Favorites
              </IonSegmentButton>
            </IonSegment>
          } */}
          {!ios && !showSearchbar &&
            <IonTitle>Scan Object</IonTitle>
          }
          {/* {showSearchbar &&
            <IonSearchbar showCancelButton="always" placeholder="Search" onIonChange={(e: CustomEvent) => setSearchText(e.detail.value)} onIonCancel={() => setShowSearchbar(false)}></IonSearchbar>
          } */}

          {/* <IonButtons slot="end">
            {!ios && !showSearchbar &&
              <IonButton onClick={() => setShowSearchbar(true)}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            }
            {!showSearchbar &&
              <IonButton onClick={() => setShowFilterModal(true)}>
                {mode === 'ios' ? 'Filter' : <IonIcon icon={options} slot="icon-only" />}
              </IonButton>
            }
          </IonButtons> */}
        </IonToolbar>

        {/* {!ios &&
          <IonToolbar>
            <IonSegment value={segment} onIonChange={(e) => setSegment(e.detail.value as any)}>
              <IonSegmentButton value="all">
                All
              </IonSegmentButton>
              <IonSegmentButton value="favorites">
                Favorites
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        } */}
      </IonHeader>

      {!showInfo && randomize() &&
        <>
          <IonContent fullscreen={true}>
            {/* <div style={{ maxHeight: '80vh', overflow: 'hidden' }}> */}
            <div style={{ maxHeight: `${window.innerHeight - 113}px`, overflow: 'hidden' }}>
              <img src={speakers[rnd].profilePic} alt='' style={{ display: 'block', marginLeft: 'auto', marginTop: 'auto', marginRight: 'auto', height: '100%', width: '100%' }} />

            </div>
            {/* <IonImg src={image.src} /> */}
          </IonContent>

          <IonFab slot="fixed" vertical="bottom" horizontal="center">
            <IonFabButton onClick={() => handleClick()}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
        </>
      }
      {showInfo && <ScanInfo itemId={imgIdx} setShowInfo={setShowInfo} />}
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