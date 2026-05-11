import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';

function App() {
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
    <View style={styles.shell}>
      <Text style={styles.h1}>React Native（Web 宿主）能力展台</Text>
      <Text style={styles.lead}>
        使用 <Text style={styles.code}>react-native-web</Text> 在浏览器中运行{' '}
        <Text style={styles.strong}>View / Text / Pressable</Text> 等 RN 组件；真机/模拟器流程见{' '}
        <Text style={styles.code}>Front-end/Expo</Text>。
      </Text>
      <View style={styles.panel}>
        <Text style={styles.h2}>状态</Text>
        <Text style={styles.p}>计数：{count}</Text>
        <View style={styles.row}>
          <Pressable style={styles.btn} onPress={() => setCount((c) => c + 1)}>
            <Text style={styles.btnText}>+1</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.panel}>
        <Text style={styles.h2}>列表</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={draft}
            onChangeText={setDraft}
            placeholder="新条目"
            placeholderTextColor="#64748b"
          />
          <Pressable style={[styles.btn, styles.btnSecondary]} onPress={add}>
            <Text style={styles.btnSecondaryText}>添加</Text>
          </Pressable>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item, i) => `${i}-${item}`}
          renderItem={({ item }) => (
            <Text style={styles.li}>{item}</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    padding: 24,
    maxWidth: 960,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
  },
  h1: { fontSize: 24, fontWeight: '700', marginBottom: 8, color: '#0f172a' },
  h2: {
    fontSize: 16,
    fontWeight: '600',
    color: '#673ab8',
    marginBottom: 8,
  },
  lead: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 22,
  },
  code: { fontFamily: 'monospace', color: '#673ab8' },
  strong: { fontWeight: '700', color: '#0f172a' },
  panel: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  p: { fontSize: 14, color: '#64748b', marginBottom: 10 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, alignItems: 'center' },
  input: {
    minWidth: 200,
    flex: 1,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#0f172a',
  },
  btn: {
    backgroundColor: '#673ab8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  btnText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  btnSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  btnSecondaryText: { color: '#0f172a', fontSize: 14, fontWeight: '600' },
  li: { fontSize: 14, color: '#0f172a', marginVertical: 4 },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
