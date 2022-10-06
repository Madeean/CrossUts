import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonText, IonTitle, IonToggle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {list, mailOutline, settings, videocamOutline, warning} from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainPage from './pages/MainPage';
import { useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import TargetPasangan from './pages/TargetPasangan';

setupIonicReact();

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const darkModeToggle = () => {
    // toggle the state 'isChecked'
    // this makes it true if false and vice versa
    setIsChecked(!isChecked);
    console.log(isChecked);
    document.body.classList.toggle("dark");
  }
  
  return( <IonApp>
    <IonReactRouter>
      <IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Gebet App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
              <IonMenuToggle>
                <IonItem button routerLink='/'>
                  
                  <IonLabel>Daftar Calon Pasangan</IonLabel>
                </IonItem>
                <IonItem button href='/target-pasangan'>
                  
                  <IonLabel>Target Pasangan</IonLabel>
                </IonItem>
                <IonItem button href='/profile-page'>
                  
                  <IonLabel>Profile</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Welcome to the dark theme</IonLabel>
                  <IonToggle onIonChange={() => darkModeToggle()} slot="end" checked={isChecked} ></IonToggle>
                </IonItem>
              </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id='main'>
            <Route path='/' component={MainPage} />
            <Route path='/profile-page' component={ProfilePage} />
            <Route path='/target-pasangan' component={TargetPasangan} />
            {/* <Route path='/spam' component={Spam} />
            <Route path='/setting' component={Setting} />
            <Route path="/mail/:mailId" component={MailDetail} />
            <Redirect exact from='/' to="/tabs"/> */}
      </IonRouterOutlet>
      
        
      
    </IonReactRouter>

  </IonApp>
  )
};

export default App;
