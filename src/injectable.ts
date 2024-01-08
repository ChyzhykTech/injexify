import { InjexifyContainer } from "./injexify-container";

export const Injectable = (): ClassDecorator => (target: any) => {
    const injexifyContainer = new InjexifyContainer();
    target.__injexifyContainer = injexifyContainer;
    injexifyContainer.register(target, new target());
};
