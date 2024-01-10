export class InjexifyContainer {
  private static dependencies: Map<any, any> = new Map();

  public static register(token: any, dependency: any): void {
    this.dependencies.set(token, dependency);
  }

  public static resolve<T>(token: any): T | null {
    const dependency = this.dependencies.get(token);

    if (!dependency) {
      console.error(`Dependency not registered for token: ${token}`);
      return null;
    }

    return dependency;
  }
}
