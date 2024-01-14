import { InjexifyContainer } from "./injexify-container";
import { isClassRegistered } from "./helpers";

/**
 * @decorator injectable
 * @description
 * The `injectable` decorator is used to register a class with the InjexifyContainer.
 * It ensures that the decorator is only applied to class constructors.
 * When applied to a class, it registers an instance of the class with the InjexifyContainer.
 *
 * @throws {Error} If the decorator is applied to something other than a class.
 * @returns {ClassDecorator} The class decorator function.
 */
export function injectable(): ClassDecorator {
  return function (target: any) {
    // Check if the target is a class constructor
    if (isClassConstructor(target)) {
      const className = target.name;
      // Check if the class is already registered
      if (!isClassRegistered(className)) {
        // Class is not registered, so register it with InjexifyContainer
        InjexifyContainer.register(className, new target());
      } else {
        // Class is already registered, throw an error
        throw new Error(`Class ${target.name} is already marked as @injectable.`);
      }
    } else {
      // Not a class, throw an error
      throw new Error(`@injectable can only be applied to classes.`);
    }
  };
}

// Helper function to check if the target is a class constructor
function isClassConstructor(target: any): boolean {
  return typeof target === 'function' && target.prototype.constructor === target;
}
