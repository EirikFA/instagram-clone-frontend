import { resetPasswordSchema } from "@api/auth/validation";
import { App } from "@capacitor/app";
import TextInput from "@components/Form/Input/TextInput";
import { useResetPasswordMutation } from "@generated/graphql";
import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonPage, IonRow, IonSpinner, IonText, IonTitle, IonToolbar, isPlatform
} from "@ionic/react";
import { Form, Formik } from "formik";
import { checkmarkOutline, closeOutline, lockClosed } from "ionicons/icons";
import { FC, Fragment } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";

import styles from "./ResetPasswordPage.module.scss";

const ResetPasswordPage: FC = () => {
  const [resetPassword, { error, data }] = useResetPasswordMutation();
  const location = useLocation();
  const { push } = useHistory();

  const q = new URLSearchParams(location.search);
  const token = q.get("t");

  if (!token) return <Redirect to="/" />;

  const exitFn = isPlatform("ios") || isPlatform("android") ? App.exitApp : () => push("/");

  return (
    <IonPage>
      <Formik
        initialValues={{
          password: ""
        }}
        validationSchema={resetPasswordSchema}
        validateOnChange
        onSubmit={async ({ password }, { setSubmitting }) => {
          try {
            await resetPassword({
              variables: {
                token,
                password
              }
            });
            setSubmitting(false);
          } catch (e) {
            // Error displayed as alert based on `error` from Apollo hook,
            // see below submit button
          }
        }}
      >
        {({
          dirty, isValid, isSubmitting, errors, handleSubmit
        }) => {
          const disabled = !dirty || !isValid || isSubmitting;

          return (
            <Fragment>
              <IonHeader className={styles.header}>
                <IonToolbar className={styles.toolbar}>
                  <IonButtons slot="start">
                    <IonButton className={styles.toolbarIconButton} onClick={() => exitFn()}>
                      <IonIcon
                        slot="icon-only"
                        icon={closeOutline}
                        className={styles.toolbarIcon}
                      />
                    </IonButton>
                  </IonButtons>

                  <IonTitle>Change password</IonTitle>

                  <IonButtons slot="end">
                    <IonButton
                      type="submit"
                      disabled={disabled}
                      onClick={() => handleSubmit()}
                      className={styles.toolbarIconButton}
                    >
                      {isSubmitting ? <IonSpinner color="secondary" /> : (
                        <IonIcon
                          color={!disabled ? "secondary" : undefined}
                          slot="icon-only"
                          icon={checkmarkOutline}
                          className={disabled
                            ? styles.toolbarIconDisabled : styles.toolbarIcon}
                        />
                      )}
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonGrid className="flex-grid-column">
                  <IonRow className={styles.row}>
                    <IonCol>
                      <IonAvatar className={styles.avatar}>
                        <img
                          src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
                          alt="Avatar"
                        />
                      </IonAvatar>
                      <IonLabel>EIRIK.FA</IonLabel>

                      <Form className="ion-margin-top ion-text-left">
                        <IonItem className={styles.formItem}>
                          <IonIcon icon={lockClosed} slot="start" />

                          <TextInput
                            name="password"
                            placeholder="New password"
                            required
                            type="password"
                            clearOnEdit={false}
                            showError={false}
                          />
                        </IonItem>

                        {errors.password && (
                        <IonText color="danger">
                          {errors.password}
                        </IonText>
                        )}

                        <IonAlert
                          isOpen={!!error}
                          header="Error"
                          message={error?.message || "Unknown error occurred"}
                          cssClass="auth-alert"
                          buttons={[
                            {
                              text: "Dismiss",
                              cssClass: "auth-alert-button"
                            }
                          ]}
                        />

                        <IonAlert
                          isOpen={!!data}
                          header="Password changed"
                          message="Your password was changed."
                          cssClass="auth-alert"
                          buttons={[
                            {
                              text: "Log in",
                              cssClass: "auth-alert-button",
                              handler: () => push("/login")
                            }
                          ]}
                        />
                      </Form>

                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonContent>
            </Fragment>
          );
        }}
      </Formik>
    </IonPage>
  );
};

export default ResetPasswordPage;
