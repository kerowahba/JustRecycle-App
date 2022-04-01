import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, location, informationCircle, people, calendarOutline, cameraOutline, scanCircle } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import MapView from './MapView';
import About from './About';
import Collection from './Collection';
import Scan from './Scan';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/schedule" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/history" render={() => <SpeakerList />} exact={true} />
        <Route path="/tabs/history/:id" component={SpeakerDetail} exact={true} />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route path="/tabs/history/sessions/:id" component={SessionDetail} />
        <Route path="/tabs/map" render={() => <MapView />} exact={true} />
        <Route path="/tabs/about" render={() => <About />} exact={true} />
        <Route path="/tabs/scan" render={() => <Scan/>} exact={true} />
        <Route path="/tabs/collection" render={() => <Collection />} exact={true} />

      </IonRouterOutlet>
      <IonTabBar slot="bottom">
      <IonTabButton tab="scan" href="/tabs/scan">
          <IonIcon icon={cameraOutline} />
          <IonLabel>Scan New Object</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/history">
          <IonIcon icon={scanCircle} />
          <IonLabel>Scan History</IonLabel>
        </IonTabButton>
        <IonTabButton tab="collection" href="/tabs/collection">
          <IonIcon icon={calendarOutline} />
          <IonLabel>Collection Schedule</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/tabs/map">
          <IonIcon icon={location} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/about">
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;