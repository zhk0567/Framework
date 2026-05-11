import { ICacheItem } from './cach-service';
import { ICacheStorage } from './storage';
/**
 * A simple in-memory storage implementation for cache interceptor
 */
export declare class MemoryStorage implements ICacheStorage {
    readonly cache: Map<string, unknown>;
    readonly delete: (key: string) => boolean;
    readonly has: (key: string) => boolean;
    readonly set: <T = unknown>(key: string, value: ICacheItem<T>) => Map<string, unknown>;
    readonly get: <T = unknown>(key: string) => T;
    readonly clear: () => void;
}
//# sourceMappingURL=storage-memory.d.ts.map