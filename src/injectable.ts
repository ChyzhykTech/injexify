import { InjexifyContainer } from "./injexify-container";

export function injectable(): ClassDecorator {
  return function (target: any) {
    InjexifyContainer.register(target, new target());
  };
}
