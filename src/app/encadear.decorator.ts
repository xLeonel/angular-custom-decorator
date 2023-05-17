import { Injector, ReflectiveInjector } from "@angular/core";
import { EncadearService, TypeContexto } from "./encadear.service";

const injector = Injector.create({ providers: [{ provide: EncadearService, useValue: new EncadearService() }] });

const encadearService = injector.get(EncadearService);


export const Encadear = (param: string, isTrabalho: boolean): any => {
    return (target: object, key: string) => {

        // const service = EncadearModule.injector.get<EncadearService>(EncadearService);
        // console.log(encadearService.testeMetodoE())

        console.log('param', param)
        console.log('isTrabalho', isTrabalho)

        Object.defineProperty(target, key, {
            get() {
                console.log('get')
                const item = encadearService.getContexto(param);

                if (item) {
                    return item.value;
                }

                //todo:
                return 'vazio';
            },
            set(value) {
                console.log('set', value)

                const item = {
                    key: param,
                    value: value,
                    type: isTrabalho ? TypeContexto.trabalho : TypeContexto.sessao
                };

                encadearService.setContexto(item);
            },
            configurable: true,
        });
    };
};