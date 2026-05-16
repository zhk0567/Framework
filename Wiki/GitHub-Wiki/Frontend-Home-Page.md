
## 前端组件 - Home Page

<details>
<summary>Relevant source files</summary>
- [frontend/home_page.md](https://github.com/zhk0567/Framework/blob/main/frontend/home_page.md)
- [frontend/components/HomeComponent.tsx](https://github.com/zhk0567/Framework/blob/main/frontend/components/HomeComponent.tsx)
- [frontend/components/HomeComponent.styles.ts](https://github.com/zhk0567/Framework/blob/main/frontend/components/HomeComponent.styles.ts)
- [frontend/utils/index.ts](https://github.com/zhk0567/Framework/blob/main/frontend/utils/index.ts)
- [frontend/types/index.ts](https://github.com/zhk0567/Framework/blob/main/frontend/types/index.ts)
</details>

# 前端组件 - Home Page

该组件负责展示首页的主要内容，包括计数器、列表和一些辅助功能。它利用了 Vite 构建工具、React 和 TypeScript，并结合了组件化设计，旨在提供一个可维护、可扩展的首页展示方案。

Home Page 组件的核心逻辑在于计数器的更新和列表数据的展示。计数器通过 `useState` hook 维护状态，列表数据则通过 `useEffect` hook 从 `utils/index.ts` 导入的 `fetchData` 函数异步获取，并存储在 `types/index.ts` 中定义的 `Item` 类型中。  组件样式定义在 `HomeComponent.styles.ts` 中，使用了 CSS-in-JS 的方式，方便样式管理。

## 架构与组件

### 主要组件

*   **`HomeComponent`**:  根组件，负责协调整个 Home Page 的布局和交互。
*   **`Counter`**:  负责展示和更新计数器状态，使用 `useState` hook。
*   **`List`**:  负责展示列表数据，使用 `useEffect` hook 从 API 获取数据。
*   **`Item`**:  定义列表项的数据结构，位于 `types/index.ts` 中。

```typescript
// frontend/types/index.ts
export interface Item {
  id: number;
  name: string;
  description: string;
}
```

### 布局

Home Page 的布局主要由 `HomeComponent` 负责，它使用了 React 的 JSX 语法来定义组件的结构和样式。  整体布局类似于一个容器，包含计数器和列表两个区域。

## 数据流

1.  **计数器状态**:  `Counter` 组件使用 `useState` hook 创建一个计数器状态，初始值为 0。  计数器可以通过事件处理函数（例如点击按钮）来增加或减少计数。
2.  **列表数据获取**:  `List` 组件使用 `useEffect` hook 异步获取列表数据。  `useEffect` hook 的回调函数调用 `fetchData` 函数，该函数使用 `fetch` API 从 API 获取数据。
3.  **数据更新**:  获取到列表数据后，`List` 组件将数据渲染到页面上。
4.  **数据持久化**:  获取到列表数据后，`useEffect` hook 也会将数据存储在 `types/index.ts` 中定义的 `Item` 类型中，以便后续使用。

```typescript
// frontend/components/HomeComponent.tsx
import React, { useState, useEffect } from 'react';
import { Item } from '../types/index';
import { fetchData } from '../utils/index';

const HomeComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData<Item[]>('/api/items');
      setItems(data);
    };

    fetchItems();
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={incrementCount}>增加</button>
      <h2>列表</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeComponent;
```

## 技术栈

| 层级 | 选型 |
|------|------|
| UI | React, TypeScript, CSS-in-JS |
| 构建 | Vite 8 |
| 语言 | TypeScript |

## 环境要求

- Node.js 建议 LTS；仅在本目录 `npm install`。

## 准备

在项目根目录下执行 `npm install` 命令，安装所有依赖项。

## 运行

在项目根目录下执行 `npm run dev` 命令，启动开发服务器。

## 目录结构

```
Front-end/home_page/
├── HomeComponent.tsx
├── HomeComponent.styles.ts
├── Item.ts
├── index.tsx
├── utils/
│   └── index.ts
├── types/
│   └── index.ts
```

## 关键点

*   `useState` 用于管理计数器状态。
*   `useEffect` 用于获取和更新列表数据。
*   `fetchData` 函数用于从 API 获取数据。
*   `Item` 类型用于定义列表项的数据结构。

## 延伸阅读

- React Hooks: [https://react.dev/reference/react#hooks](https://react.dev/reference/react#hooks)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)


---
