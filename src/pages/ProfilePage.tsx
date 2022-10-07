import { IonAvatar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect } from "react";
import {ban, create, femaleOutline, list, mailOutline, personCircleOutline, settings, trash, videocamOutline, warning} from 'ionicons/icons';

const ProfilePage:React.FC<{checked:boolean}>=(props)=>{
    useEffect(()=>{
        console.log("checked : ",props.checked);
        if(props.checked == true){
            
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
        
    },[])
    return (
        <IonPage>
            <IonHeader>
                
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Profile Page</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton href='/profile-page'>
                            <IonIcon icon={personCircleOutline} size="large" />   
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonAvatar className='avatar'>
                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                    </IonAvatar>
                    <IonCardHeader>
                        <IonCardSubtitle className="ion-text-center gede">Made Reihan Diva Suarna</IonCardSubtitle>
                        <IonCardSubtitle className=' ion-text-center'>00000044540</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
            
        </IonPage>
    );
}

export default ProfilePage;