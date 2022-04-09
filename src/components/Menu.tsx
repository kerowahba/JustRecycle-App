import React from 'react';
import { RouteComponentProps, withRouter, useLocation } from 'react-router';

import {
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle, IonRow,
  IonTitle,
  IonToggle
} from '@ionic/react';
import { calendarOutline, hammer, moonOutline, help, informationCircleOutline, logIn, logOut, mapOutline, peopleOutline, person, personAdd, cameraOutline, magnetOutline, scanOutline, scanCircleSharp, scanCircle } from 'ionicons/icons';

import { connect } from '../data/connect';
import { setDarkMode } from '../data/user/user.actions';

import './Menu.css'

const routes = {
  appLoggedInPages: [
    { title: 'Scan Object', path: '/tabs/scan', icon: cameraOutline },
    { title: 'Scan History', path: '/tabs/history', icon: scanOutline },
    { title: 'Collection Schedule', path: '/tabs/collection', icon: calendarOutline },
    { title: 'Map', path: '/tabs/map', icon: mapOutline },
    { title: 'About', path: '/tabs/about', icon: informationCircleOutline }
  ],
  appLoggedOutPages: [
    { title: 'Scan Object', path: '/tabs/scan', icon: cameraOutline },
    { title: 'Collection Schedule', path: '/tabs/collection', icon: calendarOutline },
    { title: 'Map', path: '/tabs/map', icon: mapOutline },
    { title: 'About', path: '/tabs/about', icon: informationCircleOutline }
  ],
  loggedInPages: [
    { title: 'Account', path: '/account', icon: person },
    { title: 'Logout', path: '/logout', icon: logOut },
  ],
  loggedOutPages: [
    { title: 'Login', path: '/login', icon: logIn },
    { title: 'Signup', path: '/signup', icon: personAdd }
  ]
};

interface Pages {
  title: string,
  path: string,
  icon: string,
  routerDirection?: string
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
  menuEnabled: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode
}

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps { }

const Menu: React.FC<MenuProps> = ({ darkMode, history, isAuthenticated, setDarkMode, menuEnabled }) => {
  const location = useLocation();

  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(p => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem detail={false} routerLink={p.path} routerDirection="none" className={location.pathname.startsWith(p.path) ? 'selected' : undefined}>
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (


    <IonMenu  type="overlay" disabled={!menuEnabled} contentId="main">
      <IonContent forceOverscroll={false}>
          <IonRow>
          <IonCol size='3' style={{textAlign:'center'}}>
          <img src="assets/img/appicon.png" alt="Ionic logo" style={{width:'60%'}} />
          </IonCol>
          <IonCol style={{textAlign: 'left',fontWeight:'bold', fontSize:'30px',
            color: '#28ba62', paddingTop:'4%'}}>
          JustRecycle
          </IonCol>
          </IonRow>

        <IonList lines="none">
          {isAuthenticated ? renderlistItems(routes.appLoggedInPages) : renderlistItems(routes.appLoggedOutPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader style={{color:'#28ba62'}}>Account</IonListHeader>
          {isAuthenticated ? renderlistItems(routes.loggedInPages) : renderlistItems(routes.loggedOutPages)}
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
          </IonItem>
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
    menuEnabled: state.data.menuEnabled
  }),
  mapDispatchToProps: ({
    setDarkMode
  }),
  component: withRouter(Menu)
})
