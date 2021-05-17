import {
  IonButton,
  IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem,
  IonLabel, IonPage, IonRow, IonSegment, IonSegmentButton
} from "@ionic/react";
import { personOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { FC, useState } from "react";

import styles from "./RegisterPage.module.scss";

const RegisterPage: FC = () => {
  const [segment, setSegment] = useState<string | undefined>("phone");

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="flex-grid-column">
          <IonRow className={styles.formRow}>
            <IonCol>
              <div className={styles.iconContainer}>
                <IonIcon icon={personOutline} />
              </div>

              <IonSegment
                value={segment}
                onIonChange={e => setSegment(e.detail.value)}
                className={styles.segment}
              >
                <IonSegmentButton value="phone">
                  <IonLabel className="bold">Phone number</IonLabel>
                </IonSegmentButton>

                <IonSegmentButton value="email">
                  <IonLabel className="bold">Email address</IonLabel>
                </IonSegmentButton>
              </IonSegment>

              <form>
                {segment === "phone" && (
                  <IonItem lines="none" color="light" className={styles.formItemWithLabel}>
                    <IonLabel color="secondary" className="bold">NO +47</IonLabel>
                    <IonInput
                      placeholder="Phone number"
                      required
                      type="tel"
                      className={styles.phoneInput}
                    />
                  </IonItem>
                )}

                {segment === "email" && (
                  <IonItem lines="none" color="light" className={styles.formItem}>
                    <IonInput
                      placeholder="Email address"
                      required
                      type="email"
                    />
                  </IonItem>
                )}

                <IonButton expand="block" color="secondary" strong type="submit">Next</IonButton>
              </form>
            </IonCol>
          </IonRow>

          <IonRow className={styles.footerRow}>
            <IonCol>
              <IonItem lines="none" className={styles.footerItem}>
                <IonLabel>
                  Already have an account? <Link to="/login" className="bold">Log in.</Link>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
