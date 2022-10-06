import { IonAvatar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import { personCircleOutline } from "ionicons/icons";
import React, { useEffect } from "react";

const TargetPasangan: React.FC<{checked:boolean}>=(props) => {
    useEffect(()=>{
        console.log("checked : ",props.checked);
        if(props.checked == false){
            document.body.classList.add('dark');
        }
    },[])
    return (
        <IonPage>
            <IonHeader>
                
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Target Pasangan</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton href='/profile-page'>
                            <IonIcon icon={personCircleOutline} size="large" />   
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1 className="ion-text-center">Ada yang masih jones?</h1>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" href='/'>
                                Cari gebetan
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
            </IonContent>
        </IonPage>
    )
}
export default TargetPasangan;