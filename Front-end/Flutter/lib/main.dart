import 'package:flutter/material.dart';

void main() {
  runApp(const ShowcaseApp());
}

class ShowcaseApp extends StatelessWidget {
  const ShowcaseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 能力展台',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF673AB8)),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _count = 0;
  final List<String> _items = ['示例项'];
  final TextEditingController _draft = TextEditingController();

  void _add() {
    final t = _draft.text.trim();
    if (t.isEmpty) return;
    setState(() {
      _items.insert(0, t);
      _draft.clear();
    });
  }

  @override
  void dispose() {
    _draft.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Flutter 能力展台')),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Text(
            'Dart + Flutter；同一套 Widget 可构建移动 / 桌面 / Web（目标视 `flutter devices`）。',
            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  color: Theme.of(context).colorScheme.onSurfaceVariant,
                ),
          ),
          const SizedBox(height: 16),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('状态', style: Theme.of(context).textTheme.titleMedium),
                  const SizedBox(height: 8),
                  Text('计数：$_count'),
                  const SizedBox(height: 8),
                  FilledButton(
                    onPressed: () => setState(() => _count++),
                    child: const Text('+1'),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 12),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('列表', style: Theme.of(context).textTheme.titleMedium),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _draft,
                          decoration: const InputDecoration(
                            hintText: '新条目',
                            border: OutlineInputBorder(),
                          ),
                          onSubmitted: (_) => _add(),
                        ),
                      ),
                      const SizedBox(width: 8),
                      OutlinedButton(
                        onPressed: _add,
                        child: const Text('添加'),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  ..._items.map((x) => ListTile(title: Text(x))),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
