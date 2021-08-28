import * as React from 'react'
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './ExploreContainer.css'
import TestModal from './test-modal'

interface ContainerProps {
  name: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
      <IonButton onClick={() => setIsModalOpen(true)}>OPEN MODAL</IonButton>

      <IonModal isOpen={isModalOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Create Look</IonTitle>
            <IonButtons slot="start">
              <IonButton
                color="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                CANCEL
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <TestModal />
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
    </div>
  )
}

export default ExploreContainer
