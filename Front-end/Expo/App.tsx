import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

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
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.h1}>Expo 能力展台</Text>
        <Text style={styles.lead}>
          <Text style={styles.mono}>expo</Text> 工具链 · 同一套 React Native 组件可跑{' '}
          <Text style={styles.bold}>Web / iOS / Android</Text>（本机需对应 SDK 或使用 Expo Go）。
        </Text>
        <View style={styles.tags}>
          {['Expo SDK', 'React Native', 'TypeScript'].map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
        <View style={styles.panel}>
          <Text style={styles.h2}>状态</Text>
          <Text style={styles.muted}>计数：{count}</Text>
          <Pressable style={styles.btn} onPress={() => setCount((c) => c + 1)}>
            <Text style={styles.btnLabel}>+1</Text>
          </Pressable>
        </View>
        <View style={styles.panel}>
          <Text style={styles.h2}>列表</Text>
          <TextInput
            style={styles.input}
            value={draft}
            onChangeText={setDraft}
            placeholder="新条目"
            placeholderTextColor="#64748b"
          />
          <Pressable style={[styles.btn, styles.btnOutline]} onPress={add}>
            <Text style={styles.btnOutlineLabel}>添加</Text>
          </Pressable>
          {items.map((item, i) => (
            <Text style={styles.li} key={`${i}-${item}`}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#f4f6f8' },
  scroll: { padding: 20, paddingBottom: 40, maxWidth: 640, width: '100%', alignSelf: 'center' },
  h1: { fontSize: 24, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  h2: { fontSize: 16, fontWeight: '600', color: '#673ab8', marginBottom: 8 },
  lead: { fontSize: 14, color: '#64748b', lineHeight: 22, marginBottom: 12 },
  mono: { fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', color: '#673ab8' },
  bold: { fontWeight: '700', color: '#0f172a' },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 16 },
  tag: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tagText: { fontSize: 12, color: '#64748b' },
  panel: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    padding: 14,
    backgroundColor: '#fff',
    marginBottom: 12,
    gap: 8,
  },
  muted: { fontSize: 14, color: '#64748b' },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
    color: '#0f172a',
  },
  btn: {
    alignSelf: 'flex-start',
    backgroundColor: '#673ab8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnLabel: { color: '#fff', fontWeight: '600', fontSize: 14 },
  btnOutline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#e2e8f0' },
  btnOutlineLabel: { color: '#0f172a', fontWeight: '600', fontSize: 14 },
  li: { fontSize: 14, color: '#0f172a', marginTop: 4 },
});
