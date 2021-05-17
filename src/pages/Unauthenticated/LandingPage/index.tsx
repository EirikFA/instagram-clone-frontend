import {
  IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonText, IonTitle
} from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons";
import { FC } from "react";

import styles from "./LandingPage.module.scss";

const LandingPage: FC = () => (
  <IonPage>
    <IonContent>
      <IonGrid className="flex-grid-column">
        <IonRow className="ion-text-center">
          <IonCol>
            <IonText>
              Language picker&nbsp;
              <IonIcon icon={chevronDownOutline} className={styles.pickerIcon} />
            </IonText>
          </IonCol>
        </IonRow>

        <IonRow className={styles.contentRow}>
          <IonCol size="12" className="ion-margin-bottom">
            <IonTitle>Instagram</IonTitle>
          </IonCol>

          <IonCol size="12" className="ion-margin-top">
            <IonButton
              expand="block"
              fill="solid"
              color="secondary"
              strong
              routerLink="/register"
            >
              Create New Account
            </IonButton>
          </IonCol>

          <IonCol size="12">
            <IonButton
              expand="block"
              fill="clear"
              strong
              routerLink="/login"
              className={styles.loginButton}
            >Log In
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default LandingPage;
