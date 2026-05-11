import { ICacheItem } from './cach-service';
import { ICacheStorage } from './storage';
export declare class BrowserIndexDBStorage implements ICacheStorage {
    readonly cache: IDBFactory;
    private readonly database;
    static cacheName: string;
    constructor();
    readonly getStore: () => IDBObjectStore;
    readonly delete: (key: string) => void;
    readonly has: (key: string) => boolean;
    readonly set: <T = unknown>(key: string, value: ICacheItem<T>) => IDBRequest<IDBValidKey>;
    readonly get: <T = unknown>(key: string) => ICacheItem<T> | undefined;
    readonly clear: () => void;
}
//# sourceMappingURL=storage-browser-indexdb.d.ts.map