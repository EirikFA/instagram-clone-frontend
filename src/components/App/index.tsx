import { apolloClient } from "@api";
import { ME } from "@api/auth";
import { ApolloProvider, useQuery } from "@apollo/client";
import { IonApp, IonContent } from "@ionic/react";
import { FC } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../../assets/style/index.scss";

import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

const Root: FC = ({ children }) => (
  <IonApp>
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  </IonApp>
);

const App: FC = () => {
  const { loading, error, data } = useQuery(ME, { client: apolloClient });

  if (error || loading) {
    return (
      <Root>
        <IonContent>{error ? "Error" : "Loading.."}</IonContent>
      </Root>
    );
  }

  if (data && data.me) {
    return (
      <Root>
        <AuthenticatedApp />
      </Root>
    );
  }

  return (
    <Root>
      <UnauthenticatedApp />
    </Root>
  );
};

export default App;
