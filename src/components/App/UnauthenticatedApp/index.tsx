import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  FindAccountPage, LandingPage, LoginPage, RegisterPage, ResetPasswordPage
} from "@pages";
import { FC } from "react";
import { Redirect, Route } from "react-router";

const UnauthenticatedApp: FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/find-account" component={FindAccountPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />

      <Route render={() => <Redirect to="/" />} />
    </IonRouterOutlet>
  </IonReactRouter>
);

export default UnauthenticatedApp;
