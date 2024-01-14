import { InjexifyContainer } from "./injexify-container";
import { isClassRegistered } from "./helpers";

/**
 * @decorator inject
 * @description
 * The `inject` decorator is used to inject dependencies into class properties.
 * It ensures that the decorator is only applied to class properties.
 *
 * @param {any} token - The class name of the dependency to inject.
 * @throws {Error} If the decorator is applied to something other than a class property.
 * @returns {PropertyDecorator} The property decorator function.
 */
export function inject(token: any): PropertyDecorator {
  return function (target: Object, propertyKey: string) {
    const className = token?.name;
    if (!isClassRegistered(className)) {
      throw new Error(`Class ${className} must be decorated with @injectable before using @inject.`);
    }

    Object.defineProperty(target, propertyKey, {
      get: () => InjexifyContainer.resolve(className),
    });
  };
}
