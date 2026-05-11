import { useState } from 'react';
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

export default function App() {
  const [count, setCount] = useState(0);
  const [draft, setDraft] = useState('');
  const [items, setItems] = useState<string[]>(['示例项']);

  const add = () => {
    const t = draft.trim();
    if (!t) return;
    setItems((prev) => [t, ...prev]);
    setDraft('');
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Ionic 能力展台</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText color="medium">
            <p>
              混合 UI：<strong>Ionic React</strong> 组件 + Web 技术栈；可与{' '}
              <strong>Capacitor</strong> 打包为原生壳（见 <code>Front-end/Capacitor</code>）。
            </p>
          </IonText>
          <IonList inset>
            <IonItem lines="none">
              <IonLabel>Ionic · Vite · TS · 端口 5205</IonLabel>
            </IonItem>
          </IonList>
          <IonList inset>
            <IonItem>
              <IonLabel position="stacked">状态</IonLabel>
              <IonText>计数：{count}</IonText>
            </IonItem>
            <IonItem lines="none">
              <IonButton onClick={() => setCount((c) => c + 1)}>+1</IonButton>
            </IonItem>
          </IonList>
          <IonList inset>
            <IonItem>
              <IonLabel position="stacked">新条目</IonLabel>
              <IonInput
                value={draft}
                onIonInput={(e) => setDraft(String(e.detail.value ?? ''))}
                placeholder="输入后点添加"
              />
            </IonItem>
            <IonItem lines="none">
              <IonButton fill="outline" onClick={add}>
                添加
              </IonButton>
            </IonItem>
            {items.map((x, i) => (
              <IonItem key={`${i}-${x}`}>
                <IonLabel>{x}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}
