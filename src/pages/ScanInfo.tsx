import React, {useState, useRef} from 'react';
import {
    IonToolbar,
    IonContent,
    IonPage,
    IonButtons,
    IonTitle,
    IonMenuButton,
    IonButton,
    IonIcon,
    IonHeader,
    getConfig,
    IonCard,
    IonCardContent,
    IonRow, IonGrid, IonCol
} from '@ionic/react';
import {arrowBack} from 'ionicons/icons';
import './ScanPage.scss'
import {connect} from '../data/connect';
import {Speaker} from "../models/Speaker";
import * as selectors from "../data/selectors";
import './ScanInfo.scss'

// import {Session} from "../models/Schedule";


interface OwnProps {
    itemId: number,
    setShowInfo: Function,
}

interface StateProps {
    mode: 'ios' | 'md'
    speakers: Speaker[];
}


type SchedulePageProps = OwnProps & StateProps;

const ScanInfo: React.FC<SchedulePageProps> = ({itemId, mode, setShowInfo, speakers}) => {

    const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

    const pageRef = useRef<HTMLElement>(null);

    const ios = mode === 'ios';

    return (
        <IonPage ref={pageRef} id="scan-info-page">
            <IonHeader style={{backgroundColor: '#2A365E'}} translucent={true}>
                <IonToolbar className={"header_title"} >
                    {!showSearchbar &&
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    }
                    {!ios && !showSearchbar &&
                    <IonTitle style={{fontWeight:'bold', fontSize:'30px'}}>Scanned Object's Info</IonTitle>
                    }
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen={true}>
                <IonButton onClick={() => setShowInfo(false)}>
                    <IonIcon icon={arrowBack}/>
                </IonButton>

                <IonCard className={"object_card"}>
                    <IonCardContent>
                        <img src={process.env.PUBLIC_URL + speakers[itemId].profilePic} alt="Speaker profile pic"
                             className={"scanInfoImage"}/>
                        <br/>
                        <br/>
                        <h1 style={{
                            fontSize: '50px',
                            color: '#2A365E',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>{speakers[itemId].name}</h1>
                        <br/>
                        <IonGrid>
                            <IonRow>
                                <IonCol className={'object_type'} size='6'>Type</IonCol>
                                <IonCol className={'object_detail'}>{speakers[itemId].garbageType}</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className={'object_type'} size='6'>Material</IonCol>
                                <IonCol className={'object_detail'}>{speakers[itemId].material}</IonCol>

                            </IonRow>
                            <IonRow>
                                <IonCol className={'object_type'} size='6'>Instructions</IonCol>
                                <IonCol className={'object_detail'}>{speakers[itemId].instruction}</IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className={'object_type'} size='6'>Reusing Ideas</IonCol>
                                <IonCol className={'object_detail'}><a
                                    href={speakers[itemId].reuse}>{speakers[itemId].reuse}</a></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default connect<OwnProps, StateProps>({
    mapStateToProps: (state) => ({
        mode: getConfig()!.get('mode'),
        speakers: selectors.getSpeakers(state),
    }),
    component: React.memo(ScanInfo)
});