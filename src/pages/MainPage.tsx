import { IonPage, IonHeader, IonToolbar, IonTitle, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAvatar, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonLabel, IonText } from '@ionic/react';
import React, { useRef } from "react";
import {ban, create, femaleOutline, list, mailOutline, personCircleOutline, settings, trash, videocamOutline, warning} from 'ionicons/icons';

import './MainPage.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainPage:React.FC=()=>{
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

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
                        <IonCol size='4'>
                            <SwiperSlide>
                                <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                    <IonCardHeader>
                                        <IonCardSubtitle className='ion-text-center' >Shaiden Rouge</IonCardSubtitle>
                                    </IonCardHeader>
                                </IonCard>
                            </SwiperSlide>
                        </IonCol>
                        <IonCol size='4'>
                            <SwiperSlide>
                                <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                    <IonCardHeader>
                                        <IonCardSubtitle className='ion-text-center' >Shaiden Rouge</IonCardSubtitle>
                                    </IonCardHeader>
                                </IonCard>
                            </SwiperSlide>
                        </IonCol>
                        <IonCol size='4'>
                            <SwiperSlide>
                                <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                    <IonCardHeader>
                                        <IonCardSubtitle className='ion-text-center' >Shaiden Rouge</IonCardSubtitle>
                                    </IonCardHeader>
                                </IonCard>
                            </SwiperSlide>
                        </IonCol>
                        <IonCol size='4'>
                            <SwiperSlide>
                                <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                    <IonCardHeader>
                                        <IonCardSubtitle className='ion-text-center' >Shaiden Rouge</IonCardSubtitle>
                                    </IonCardHeader>
                                </IonCard>
                            </SwiperSlide>
                        </IonCol>
                        <IonCol size='4'>
                            <SwiperSlide>
                                <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                    <IonCardHeader>
                                        <IonCardSubtitle className='ion-text-center' >Shaiden Rouge</IonCardSubtitle>
                                    </IonCardHeader>
                                </IonCard>
                            </SwiperSlide>
                        </IonCol>
                        
                    
                    </Swiper>
                        {/* <IonCol size='4'>
                            <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                <IonCardHeader>
                                    <IonCardSubtitle className=' ion-text-sm-center'>Shaiden Rouge</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol size='4'>
                            <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                <IonCardHeader>
                                    <IonCardSubtitle className='ion-text-center' >Shaiden Rouge</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                        <IonCol size='4'>
                            <IonCard>
                                    <IonAvatar className='avatar'>
                                        <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                                    </IonAvatar>
                                <IonCardHeader >
                                    <IonCardSubtitle className='ion-text-center'>Shaiden Rouge</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol> */}
                    </IonRow>
                </IonGrid>

                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
                <IonItemSliding  ref={slidingOptionRef}>
                    <IonItemOptions side="start">
                        <IonItemOption color='danger' onClick={blockFriendhandler}>
                            <IonIcon slot="icon-only" icon={ban}/>
                        </IonItemOption>
                        <IonItemOption color='warning' onClick={deletingFriendHandler}>
                            <IonIcon slot="icon-only" icon={trash} color='dark'/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItemOptions >
                        <IonItemOption color='warning' onClick={EditingFriendHandler}>
                            <IonIcon slot="icon-only" icon={create}/>
                        </IonItemOption>
                    </IonItemOptions>
                    <IonItem lines="full" button onClick={callFriendHandler}>
                        <IonAvatar className="ion-margin-end">
                            <img alt="Silhouette of a person's head" src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Prescription01&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Tanned' />
                        </IonAvatar>
                        <IonGrid>
                            <IonCol>
                                <IonLabel className='ion-text-lg-left'>Divi Mini</IonLabel>
                                <IonLabel>Oh Yeah</IonLabel>
                                <IonLabel>
                                    <IonIcon slot='start' icon={femaleOutline}/>
                                    Female
                                </IonLabel>
                            </IonCol>
                        </IonGrid>
                        
                    </IonItem>
                </IonItemSliding>
            </IonContent>
        </IonPage>
    );
}

export default MainPage;