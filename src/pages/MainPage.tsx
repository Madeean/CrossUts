import { IonPage, IonHeader, IonToolbar, IonTitle, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAvatar, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonText } from '@ionic/react';
import React, { useContext, useEffect, useRef } from "react";
import {ban, create, femaleOutline, heart, list, mailOutline, male, maleOutline, personCircleOutline, settings, trash, videocamOutline, warning} from 'ionicons/icons';

import './MainPage.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../theme/variables.css';
import FriendsContext from '../data/friend-context';



const MainPage:React.FC<{checked:boolean}>=(props)=>{
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

    const friendsCtx = useContext(FriendsContext);
    
    useEffect(()=>{
        console.log(friendsCtx.friends);
    },[]);

    const callFriendHandler=()=>{
        console.log("calling");
    }
    const blockFriendhandler=(event:React.MouseEvent)=>{
        // event.stopPropagation();
        slidingOptionRef.current?.closeOpened();
        console.log("blocking");
    }
    const deletingFriendHandler=(event:React.MouseEvent)=>{
        // event.stopPropagation();
        slidingOptionRef.current?.closeOpened();
        console.log("Deleting");
    }
    const EditingFriendHandler=(event:React.MouseEvent)=>{
        // event.stopPropagation();
        slidingOptionRef.current?.closeOpened();
        console.log("Editing");
    }

    const icon=()=>{
        console.log("masuk icon")
    }

    return(
        <>
        <IonPage>
            <IonHeader>
                
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Bosen Jomblo</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={icon} href='/profile-page'>
                            <IonIcon icon={personCircleOutline} size="large" />   
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid>
                    <IonRow>
                        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={20} slidesPerView={3} onSlideChange={() => console.log('slide change')}onSwiper={(swiper) => console.log(swiper)}  pagination={{ clickable: true }} 
                        >
                            {friendsCtx.friends.slice(0,4).map(friend =>( 
                            <IonCol size='4'>
                                <SwiperSlide>
                                    <IonCard>
                                        <IonAvatar className='avatar'>
                                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                        </IonAvatar>
                                        <IonCardHeader>
                                            <IonCardSubtitle className='ion-text-center' >{friend.name}</IonCardSubtitle>
                                        </IonCardHeader>
                                    </IonCard>
                                </SwiperSlide>
                            </IonCol>
                            ))}
                            
                        
                        </Swiper>
                        
                        </IonRow>
                    </IonGrid>
                {friendsCtx.friends.map(friend =>( 
                    <IonItemSliding  ref={slidingOptionRef} key={friend.id}>
                        <IonItemOptions >
                            <IonItemOption color='primary' onClick={EditingFriendHandler}>
                                <IonIcon slot="icon-only" icon={heart}/>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem lines="full" button onClick={callFriendHandler}>
                            <IonAvatar className="ion-margin-end">
                                <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                            </IonAvatar>
                            <IonGrid>
                                <IonCol>
                                    <IonLabel className='ion-text-lg-left'>{friend.name}</IonLabel>
                                    <IonLabel>{friend.description}</IonLabel>
                                    <IonLabel>
                                        <IonIcon slot='start' icon= {friend.gender == "male" ? femaleOutline : maleOutline}  />
                                        {friend.gender}
                                    </IonLabel>
                                </IonCol>
                            </IonGrid>                 
                        </IonItem>
                    </IonItemSliding>
                ))}
                
                
            </IonContent>
        </IonPage>
        </>
    );
}

export default MainPage;