import { InjexifyContainer } from "./injexify-container";
import { isClassRegistered } from "./helpers";
import "reflect-metadata";

/**
 * @function inject
 * @description
 * The `inject` function serves as a dual-purpose decorator for injecting dependencies into class properties
 * and constructor parameters. It checks whether it is applied as a property or parameter decorator and
 * performs the injection accordingly.
 *
 * @param {any} token - The class name of the dependency to inject.
 * @throws {Error} If the decorator is applied to something other than a class property or constructor parameter.
 * @returns {PropertyDecorator & ParameterDecorator} The combined property and parameter decorator function.
 *
 * @example
 * // Usage as a parameter decorator:
 * class Example {
 *   constructor(@inject(Service) service: Service) {
 *     // Constructor logic with injected service
 *   }
 * }
 *
 * @example
 * // Usage as a property decorator:
 * class Example {
 *   @inject(Service)
 *   someProperty: Service;
 * }
 */
export function inject(token: any): PropertyDecorator & ParameterDecorator {
  return function (target: Object, propertyKey?: string | symbol, parameterIndex?: number) {
    if (propertyKey !== undefined) {
      // This is a property decorator
      const className = token?.name;
      if (!isClassRegistered(className)) {
        throw new Error(`Class ${className} must be decorated with @injectable before using @inject.`);
      }

      Object.defineProperty(target, propertyKey, {
        get: () => InjexifyContainer.resolve(className),
      });
    } else if (parameterIndex !== undefined) {
      // This is a parameter decorator
      const className = token?.name;
      if (!isClassRegistered(className)) {
        throw new Error(`Class ${className} must be decorated with @injectable before using @inject.`);
      }

      const existingMetadata = Reflect.getOwnMetadata('design:paramtypes', target) || [];
      existingMetadata[parameterIndex] = token;

      Reflect.defineMetadata('design:paramtypes', existingMetadata, target);
    }
  };
}
