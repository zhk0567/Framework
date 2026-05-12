# GraphQL 多子图（Schema Stitching）

本目录在 **单一进程** 内用 **`@graphql-tools/stitch`** 将 **users** 与 **orders** 两个子 schema 合成一个 **`POST /graphql`**，与 [`Back-end/Node/GraphQL`](../GraphQL) 的单 schema **Mercurius** 对照。

## 与 Apollo Federation 的关系

| 概念 | 本示例 | 生产常见 |
|------|--------|----------|
| 多子图 | 两个 `makeExecutableSchema` + `stitchSchemas` | 各子图独立部署 + **Apollo Router** / Gateway |
| SDL `@key` / entity | 未演示完整 Federation SDL | **Apollo Federation v2** 规范 |

官方参考：[GraphQL Tools · Stitching](https://the-guild.dev/graphql/stitching)、[Apollo Federation](https://www.apollographql.com/docs/federation/)。

**加深（Router / Fed v2）**：[`Back-end/Node/ApolloRouter`](../ApolloRouter)（默认 **3123**）为 **Apollo Router** 与 **Federation v2** 官方文档链占位，与本目录 **stitch** 单进程合并对照阅读。

## 示例查询

在 **GraphiQL**（`/graphiql`）中试：

```graphql
query {
  users {
    id
    name
  }
  orders(userId: "1") {
    id
    total
  }
}
```
