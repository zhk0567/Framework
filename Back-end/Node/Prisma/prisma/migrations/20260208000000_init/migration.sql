-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Item" ("id", "title", "createdAt") VALUES ('seed-prisma-1', 'Prisma 示例（迁移种子）', CURRENT_TIMESTAMP);
