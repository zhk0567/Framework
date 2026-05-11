import { IDisposable } from '@aurelia/kernel';
export type ICacheItem<T = unknown> = {
    staleTime?: number;
    cacheTime?: number;
    lastCached?: number;
    data?: T;
};
export declare const ICacheService: import("@aurelia/kernel").InterfaceSymbol<CacheService>;
/**
 * Events that are published by the CacheService
 */
export declare const CacheEvent: Readonly<{
    Set: "au:fetch:cache:set";
    Get: "au:fetch:cache:get";
    Clear: "au:fetch:cache:clear";
    Reset: "au:fetch:cache:reset";
    Dispose: "au:fetch:cache:dispose";
    CacheHit: "au:fetch:cache:hit";
    CacheMiss: "au:fetch:cache:miss";
    CacheStale: "au:fetch:cache:stale";
    CacheStaleRefreshed: "au:fetch:cache:stale:refreshed";
    CacheExpired: "au:fetch:cache:expired";
    CacheBackgroundRefreshed: "au:fetch:cache:background:refreshed";
    CacheBackgroundRefreshing: "au:fetch:cache:background:refreshing";
    CacheBackgroundStopped: "au:fetch:cache:background:stopped";
}>;
export type CacheEvent = typeof CacheEvent[keyof typeof CacheEvent];
export type ICacheEventData<T> = {
    key: string;
    value: ICacheItem<T>;
};
/**
 * A service that can be used to cache data
 */
export declare class CacheService implements IDisposable {
    private readonly storage;
    subscribe<T>(event: CacheEvent, callback: (value: ICacheEventData<T>) => void): IDisposable;
    subscribeOnce<T>(event: CacheEvent, callback: (value: ICacheEventData<T>) => void): IDisposable;
    setStaleTimer(key: string, staleTime: number, request: Request): void;
    startBackgroundRefresh(timer?: number): void;
    stopBackgroundRefresh(): void;
    set<T>(key: string, value: T, options: Omit<ICacheItem<T>, 'data'>, request: Request): void;
    get<T>(key: string): T | undefined;
    setItem<T>(key: string, value: ICacheItem<T>, request: Request): void;
    /**
     * Tries to retrieve the item from the storage
     */
    getItem<T>(key: string): ICacheItem<T> | undefined;
    delete(key: string): void;
    clear(): void;
    dispose(): void;
}
//# sourceMappingURL=cach-service.d.ts.map