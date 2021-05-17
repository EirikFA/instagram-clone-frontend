import { gql, useQuery } from "@apollo/client";
import {
  IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar
} from "@ionic/react";
import { FC } from "react";

import "./Tab1.css";

const Tab1: FC = () => {
  const { loading, error, data } = useQuery(gql`
    query GetPosts {
      posts {
        id
        text
        author {
          username
          email
        }
      }
    }
  `);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {error && <IonTitle>Error</IonTitle>}
          {loading && <IonTitle>Loading..</IonTitle>}
          {data && <IonTitle>Posts</IonTitle>}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data && data.posts.map(({ text }: any) => <IonText>{text}</IonText>)}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
