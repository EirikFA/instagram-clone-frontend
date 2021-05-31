import { requestPasswordResetSchema } from "@api/auth/validation";
import TextInput from "@components/Form/Input/TextInput";
import { useRequestPasswordResetMutation } from "@generated/graphql";
import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonPage, IonRow, IonSpinner, IonText, IonTitle, IonToolbar
} from "@ionic/react";
import { Form, Formik } from "formik";
import { logoFacebook } from "ionicons/icons";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./FindAccountPage.module.scss";

const FindAccountPage: FC = () => {
  const [requestReset, { error, data }] = useRequestPasswordResetMutation();

  return (
    <IonPage>
      <IonHeader className={styles.header}>
        <IonToolbar className={styles.toolbar}>
          <IonTitle>Login help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="flex-grid-column">
          <IonRow className="auth-form-row">
            <IonCol>
              <IonTitle className="ion-margin-vertical">Find your account</IonTitle>
              <IonText color="medium">
                Enter the email or phone number linked to your account.
              </IonText>

              <Formik
                initialValues={{
                  email: ""
                }}
                validationSchema={requestPasswordResetSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    await requestReset({ variables: values });
                    setSubmitting(false);
                  } catch (e) {
                    // Error displayed as alert based on `error` from Apollo hook,
                    // see below submit button
                  }
                }}
              >
                {({
                  dirty, isValid, isSubmitting, values: { email }
                }) => (
                  <Form className="ion-margin-top">
                    <IonItem lines="none" color="light" className="auth-form-item">
                      <TextInput
                        name="email"
                        placeholder="example@example.com"
                        required
                        type="text"
                        showError={false}
                      />
                    </IonItem>

                    <IonButton
                      expand="block"
                      fill="solid"
                      color="secondary"
                      strong
                      type="submit"
                      disabled={!dirty || !isValid || isSubmitting}
                      className="ion-margin-vertical"
                    >
                      {isSubmitting ? <IonSpinner /> : "Next"}
                    </IonButton>

                    <IonAlert
                      isOpen={!!error}
                      header="Error"
                      message={error?.message || "Unknown error occurred"}
                      cssClass="auth-alert"
                      buttons={[
                        {
                          text: "Try again",
                          cssClass: "auth-alert-button"
                        }
                      ]}
                    />

                    <IonAlert
                      isOpen={!!data}
                      header="Email sent"
                      message={`We sent an email to ${email} with a link to get back into your account (if the account exists).`}
                      cssClass="auth-alert"
                      buttons={[
                        {
                          text: "Ok",
                          cssClass: "auth-alert-button"
                        }
                      ]}
                    />
                  </Form>
                )}
              </Formik>

              <h2 className="ruler ruler-with-text">
                <span>OR</span>
              </h2>

              <IonText className="facebook-login">
                <Link to="/#">
                  <IonIcon icon={logoFacebook} /> Log In With Facebook
                </Link>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="grid-footer-row">
            <IonCol>
              <IonItem lines="none" className={`grid-footer-item ${styles.footerItem}`}>
                <IonLabel>
                  <Link to="/#">Need more help?</Link>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default FindAccountPage;
