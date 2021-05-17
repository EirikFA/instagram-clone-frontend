import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import { LandingPage, LoginPage, RegisterPage } from "@pages";
import { Redirect, Route } from "react-router";
import { FC } from "react";

const UnauthenticatedApp: FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />

      <Redirect to="/" />
    </IonRouterOutlet>
  </IonReactRouter>
);

export default UnauthenticatedApp;
