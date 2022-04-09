import React, { useRef } from 'react';
import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, AlertButton } from '@ionic/react';
import { Session } from '../models/Schedule';

interface SessionListItemProps {
  session: Session;
  listType: "all" | "favorites";
  onAddFavorite: (id: number) => void;
  onRemoveFavorite: (id: number) => void;
  onShowAlert: (header: string, buttons: AlertButton[]) => void;
  isFavorite: boolean;
}

const SessionListItem: React.FC<SessionListItemProps> = ({ isFavorite, onAddFavorite, onRemoveFavorite, onShowAlert, session, listType }) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null)

  return (
    <IonItemSliding ref={ionItemSlidingRef} class={'track-' + session.tracks[0].toLowerCase()}>
      <IonItem routerLink={`/tabs/schedule/${session.id}`}>
        <IonLabel>
          <h3>{session.name}</h3>
          <p>
            {session.timeStart}&mdash;&nbsp;
            {session.timeEnd}
            <br/>
            {session.location}
          </p>
        </IonLabel>
      </IonItem>
      
    </IonItemSliding>
  );
};

export default React.memo(SessionListItem);