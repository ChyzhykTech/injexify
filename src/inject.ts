import { InjexifyContainer } from "./injexify-container";

export function inject(token: any): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get: () => InjexifyContainer.resolve(token) ?? undefined,
    });
  };
}
