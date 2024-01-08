export const Inject =
  (token: any): PropertyDecorator =>
  (target: any, propertyKey: string | symbol) => {
    Object.defineProperty(target, propertyKey, {
      get: () => {
        const injexifyContainer = target.__injexifyContainer;
        return injexifyContainer ? injexifyContainer.resolve(token) : null;
      },
    });
  };
