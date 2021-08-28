import * as React from 'react'
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab2.css'
import Modal1 from '../components/modal1'
import Modal2 from '../components/modal2'
import Modal3 from '../components/modal3'
import Modal4 from '../components/modal4'

const Tab2: React.FC = () => {
  const [isModal1Open, setIsModal1Open] = React.useState(false)
  const [isModal2Open, setIsModal2Open] = React.useState(false)
  const [isModal3Open, setIsModal3Open] = React.useState(false)
  const [isModal4Open, setIsModal4Open] = React.useState(false)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <section>
          <IonButton size="small" onClick={() => setIsModal1Open(true)}>
            open modal 1
          </IonButton>
          <IonButton size="small" onClick={() => setIsModal2Open(true)}>
            open modal 2
          </IonButton>
          <IonButton size="small" onClick={() => setIsModal3Open(true)}>
            open modal 3
          </IonButton>
          <IonButton size="small" onClick={() => setIsModal4Open(true)}>
            open modal 4
          </IonButton>
        </section>

        <IonModal
          isOpen={isModal1Open}
          onDidDismiss={() => setIsModal1Open(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Create Look</IonTitle>
              <IonButtons slot="start">
                <IonButton
                  color="secondary"
                  onClick={() => setIsModal1Open(false)}
                >
                  CANCEL
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardContent>
                <Modal1 />
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
        <IonModal
          isOpen={isModal2Open}
          onDidDismiss={() => setIsModal2Open(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Create Look</IonTitle>
              <IonButtons slot="start">
                <IonButton
                  color="secondary"
                  onClick={() => setIsModal2Open(false)}
                >
                  CANCEL
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardContent>
                <Modal2 />
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
        <IonModal
          isOpen={isModal3Open}
          onDidDismiss={() => setIsModal3Open(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Create Look</IonTitle>
              <IonButtons slot="start">
                <IonButton
                  color="secondary"
                  onClick={() => setIsModal3Open(false)}
                >
                  CANCEL
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardContent>
                <Modal3 />
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
        <IonModal
          isOpen={isModal4Open}
          onDidDismiss={() => setIsModal4Open(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Create Look</IonTitle>
              <IonButtons slot="start">
                <IonButton
                  color="secondary"
                  onClick={() => setIsModal4Open(false)}
                >
                  CANCEL
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardContent>
                <Modal4 />
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  )
}

export default Tab2
