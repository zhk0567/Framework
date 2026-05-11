import { IFetchInterceptor } from '../../interfaces';
export interface ICacheConfiguration {
    cacheTime?: number;
    staleTime?: number;
    refreshStaleImmediate?: boolean;
    refreshInterval?: number;
}
/**
 * Interceptor that caches requests on success.
 */
export declare class CacheInterceptor implements IFetchInterceptor {
    static readonly prefix = "au:interceptor:";
    static readonly cacheHeader = "x-au-fetch-cache";
    constructor(config?: ICacheConfiguration);
    request(request: Request): Request | Response | Promise<Request | Response>;
    response(response: Response, request?: Request | undefined): Response | Promise<Response>;
    dispose(): void;
    private key;
    private mark;
}
//# sourceMappingURL=cache-interceptor.d.ts.map