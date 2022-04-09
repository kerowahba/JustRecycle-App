import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router';
import { location, informationCircle, people, calendarOutline, cameraOutline, scanCircle } from 'ionicons/icons';
import SpeakerList from './SpeakerList';
import SessionDetail from './SessionDetail';
import MapView from './MapView';
import About from './About';
import Collection from './Collection';
import Scan from './Scan';
import { connect } from '../data/connect';

interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
  menuEnabled: boolean;
}

interface MainTabsProps extends RouteComponentProps, StateProps { }

const MainTabs: React.FC<MainTabsProps> = ({ darkMode, isAuthenticated, menuEnabled }) => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/scan" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/history" render={() => <SpeakerList />} exact={true} />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route path="/tabs/map" render={() => <MapView />} exact={true} />
        <Route path="/tabs/about" render={() => <About />} exact={true} />
        <Route path="/tabs/scan" render={() => <Scan/>} exact={true} />
        <Route path="/tabs/collection" render={() => <Collection />} exact={true} />

      </IonRouterOutlet>
      <IonTabBar slot="bottom">
      <IonTabButton tab="scan" href="/tabs/scan">
          <IonIcon icon={cameraOutline} />
          <IonLabel>Scan</IonLabel>
        </IonTabButton>
        { isAuthenticated && (<IonTabButton tab="speakers" href="/tabs/history">
          <IonIcon icon={scanCircle} />
          <IonLabel>History</IonLabel>
        </IonTabButton>)}
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

// export default MainTabs;

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
    menuEnabled: state.data.menuEnabled
  }),
  component: withRouter(MainTabs)
})