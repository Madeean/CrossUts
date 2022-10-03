import { IonPage, IonHeader, IonToolbar, IonTitle, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import React from "react";
import {list, mailOutline, personCircleOutline, settings, videocamOutline, warning} from 'ionicons/icons';

const MainPage:React.FC=()=>{

    const icon=()=>{
        console.log("masuk icon")
    }

    return(
        <IonPage>
            <IonHeader>
                
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Bosen Jomblo</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={icon}>
                            <IonIcon icon={personCircleOutline} size="large" />   
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size='3'>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                                    <IonCardTitle>Card Title</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Keep close to Nature's heart... and break clear away, once in awhile,
                                    and climb a mountain or spend a week in the woods. Wash your spirit clean.
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default MainPage;