import { ICacheItem } from './cach-service';
export interface ICacheStorage {
    delete: (key: string) => void;
    /** Returns true if there's a value associated with the given key */
    has: (key: string) => boolean;
    set: <T = unknown>(key: string, value: ICacheItem<T>) => void;
    get: <T = unknown>(key: string) => ICacheItem<T> | undefined;
    clear: () => void;
}
export declare const ICacheStorage: import("@aurelia/kernel").InterfaceSymbol<ICacheStorage>;
//# sourceMappingURL=storage.d.ts.map