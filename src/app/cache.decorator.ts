import { AppInjector } from "./app.module";
import { CacheService, ItemContexto } from "./cache.service";

export const CacheValue = (param: string, isCacheSession: boolean = false): any => {
    // valor temporario por causa da
    // primeira inicialização
    let inicializeValue: unknown;
    console.log('inicio', inicializeValue)

    return (target: object, key: string) => {
        Object.defineProperty(target, key, {
            async get() {
                const cacheService = await AppInjector.get(CacheService);

                console.log('get', param)
                console.log('get', cacheService.contexto)

                const item = await cacheService.getContexto(param);

                console.log('get', item)

                if (item) {
                    return item.value;
                }

                return inicializeValue;
            },
            async set(value) {
                const cacheService = await AppInjector.get(CacheService);

                console.log('set', value)
                console.log('set', cacheService)

                inicializeValue = value;

                await cacheService.setContexto(new ItemContexto(param, value));
            }
        });
    };
};