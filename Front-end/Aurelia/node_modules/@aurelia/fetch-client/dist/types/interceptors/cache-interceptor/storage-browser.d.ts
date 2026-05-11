import { ICacheItem } from './cach-service';
import { ICacheStorage } from './storage';
export declare class BrowserStorage implements ICacheStorage {
    readonly cache: Storage;
    constructor(cache: Storage);
    readonly delete: (key: string) => void;
    readonly has: (key: string) => boolean;
    readonly set: <T = unknown>(key: string, value: ICacheItem<T>) => void;
    readonly get: <T = unknown>(key: string) => ICacheItem<T> | undefined;
    readonly clear: () => void;
}
//# sourceMappingURL=storage-browser.d.ts.map