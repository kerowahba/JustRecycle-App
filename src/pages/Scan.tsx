import React, { useState, useRef } from 'react';

import { IonToolbar, IonContent, IonPage, IonButtons, IonTitle, IonMenuButton, IonSegment, IonSegmentButton, IonButton, IonIcon, IonSearchbar, IonRefresher, IonRefresherContent, IonToast, IonModal, IonHeader, getConfig, IonImg, IonFab, IonFabButton } from '@ionic/react';
import { camera, options, search } from 'ionicons/icons';

import SessionList from '../components/SessionList';
import SessionListFilter from '../components/SessionListFilter';
import './ScanPage.scss'

import ShareSocialFab from '../components/ShareSocialFab';

import * as selectors from '../data/selectors';
import { connect } from '../data/connect';
import { setSearchText } from '../data/sessions/sessions.actions';
import { Schedule } from '../models/Schedule';
import ScanInfo from './ScanInfo';

interface OwnProps { }

interface StateProps {
  schedule: Schedule;
  favoritesSchedule: Schedule;
  mode: 'ios' | 'md'
}

interface DispatchProps {
  setSearchText: typeof setSearchText;
}

type SchedulePageProps = OwnProps & StateProps & DispatchProps;

const SchedulePage: React.FC<SchedulePageProps> = ({ favoritesSchedule, schedule, setSearchText, mode }) => {
  const [segment, setSegment] = useState<'all' | 'favorites'>('all');
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const ionRefresherRef = useRef<HTMLIonRefresherElement>(null);
  const [showInfo, setShowInfo] = useState(false);

  const pageRef = useRef<HTMLElement>(null);

  const ios = mode === 'ios';

  const image = {
    src: '/assets/img/garbage/images/empty_water_bottle.jpg',
  };

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
            <IonTitle>Scan New Object</IonTitle>
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

      { !showInfo && (
        <>
          <IonContent fullscreen={true}>
            <div style={{ maxHeight: '80vh', overflow: 'hidden' }}>
              <img src={image.src} alt='' style={{ height: "clac(100vh - 113px)" }} />

            </div>
            {/* <IonImg src={image.src} /> */}
          </IonContent>

          <IonFab slot="fixed" vertical="bottom" horizontal="center">
            <IonFabButton onClick={() => setShowInfo(true)}>
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFab>
        </>
      )}
      { showInfo && <ScanInfo itemId={0} setShowInfo={setShowInfo} />}
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    schedule: selectors.getSearchedSchedule(state),
    favoritesSchedule: selectors.getGroupedFavorites(state),
    mode: getConfig()!.get('mode')
  }),
  mapDispatchToProps: {
    setSearchText
  },
  component: React.memo(SchedulePage)
});