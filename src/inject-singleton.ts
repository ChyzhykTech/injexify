export const InjectSingleton = (token: any): PropertyDecorator => (
    target: any,
    propertyKey: string | symbol
) => {
    Object.defineProperty(target, propertyKey, {
        get: () => {
            const diContainer = target.__injexifyContainer;
            return diContainer ? diContainer.resolve(token) : null;
        },
    });
};
