import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonText, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
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
                <IonItem button routerLink='/tabs/mail'>
                  <IonIcon slot='start' icon={list} />
                  <IonLabel>All Mail</IonLabel>
                </IonItem>
                <IonItem button routerLink='/spam'>
                  <IonIcon slot='start' icon={warning} />
                  <IonLabel>Spam</IonLabel>
                </IonItem>
                <IonItem button routerLink='/setting'>
                  <IonIcon slot='start' icon={settings} />
                  <IonLabel>Setting</IonLabel>
                </IonItem>
              </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id='main'>
            <Route path='/' component={MainPage} />
            {/* <Route path='/spam' component={Spam} />
            <Route path='/setting' component={Setting} />
            <Route path="/mail/:mailId" component={MailDetail} />
            <Redirect exact from='/' to="/tabs"/> */}
      </IonRouterOutlet>
      
        
      
    </IonReactRouter>

  </IonApp>
);

export default App;
