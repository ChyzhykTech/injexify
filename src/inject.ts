export function Inject (dependency: any): ParameterDecorator {
    return function (target, propertyKey, parameterIndex) {
        // Logic to save info about dependency
    };
}
