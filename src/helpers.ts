import { InjexifyContainer } from "./injexify-container";

// Helper function to check if a class is already registered
export function isClassRegistered(className: string): boolean {
    const dependency = InjexifyContainer.resolve(className);
    return dependency !== undefined;
}
