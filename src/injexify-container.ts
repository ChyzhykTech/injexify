export class InjexifyContainer {
  private static dependencies: Map<any, any> = new Map();

  public static register(token: any, dependency: any): void {
    this.dependencies.set(token, dependency);
  }

  public static resolve<T>(token: any): T {
    return this.dependencies.get(token) || undefined;
  }

  public static clearDependencies() {
    this.dependencies.clear();
  }
}
