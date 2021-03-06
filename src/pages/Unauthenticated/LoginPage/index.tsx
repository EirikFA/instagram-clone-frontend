import { loginArgsSchema } from "@api/auth/validation";
import TextInput from "@components/Form/Input/TextInput";
import { useLoginMutation } from "@generated/graphql";
import {
  IonAlert,
  IonButton, IonCol, IonContent, IonGrid, IonIcon,
  IonItem, IonLabel, IonPage, IonRow, IonSpinner, IonText, IonTitle
} from "@ionic/react";
import { Form, Formik } from "formik";
import { chevronDownOutline, logoFacebook } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";

import styles from "./LoginPage.module.scss";

const LoginPage: React.FC = () => {
  const [logIn, { error }] = useLoginMutation({ refetchQueries: ["Me"] });
  const { push } = useHistory();

  return (
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

          <IonRow className="auth-form-row auth-form-row-vcentered">
            <IonCol>
              <IonTitle className="ion-margin-bottom">Instagram</IonTitle>

              <Formik
                initialValues={{
                  identifier: "",
                  password: ""
                }}
                validationSchema={loginArgsSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    await logIn({ variables: values });
                    setSubmitting(false);
                  } catch (e) {
                    // Error displayed as alert based on `error` from Apollo hook,
                    // see below submit button
                  }
                }}
              >
                {({ dirty, isValid, isSubmitting }) => (
                  <Form>
                    <IonItem lines="none" color="light" className="auth-form-item">
                      <TextInput
                        name="identifier"
                        placeholder="Phone number, email address or username"
                        required
                        type="text"
                        showError={false}
                      />
                    </IonItem>

                    <IonItem lines="none" color="light" className="auth-form-item">
                      <TextInput
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                        clearOnEdit={false}
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
                      {isSubmitting ? <IonSpinner /> : "Log In"}
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
                        },
                        {
                          text: "Forgot password",
                          cssClass: "auth-alert-button",
                          handler: () => push("/find-account")
                        }
                      ]}
                    />
                  </Form>
                )}
              </Formik>

              <IonText className={styles.forgotText}>
                <p>
                  Forgotten your login details?&nbsp;
                  <Link to="/find-account" className="bold">Get help with logging in.</Link>
                </p>
              </IonText>

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
                  Don&#39;t have an account? <Link to="/register" className="bold">Sign up.</Link>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
