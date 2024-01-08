export class InjexifyContainer {
    private dependencies: Map<any, any> = new Map();

    register(token: any, dependency: any): void {
        this.dependencies.set(token, dependency);
    }

    resolve<T>(token: any): T | null {
        const dependency = this.dependencies.get(token);

        if (!dependency) {
            console.error(`Dependency not registered for token: ${token}`);
            return null;
        }

        return dependency;
    }
}
