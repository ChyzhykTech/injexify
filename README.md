# Injexify
Injexify: A lightweight and flexible TypeScript DI library for seamless dependency injection. 
Boost modularity and maintainability in your projects effortlessly.

### Getting Started
### Installation
First, install the Injexify package using npm:

`npm install injexify`


Second, enable `experimentalDecorators` in the `tsconfig.json`:
```
{
    "compilerOptions": {
        "experimentalDecorators": true
        // ...
    },
    // ...
}
```

### Usage
Consider the following example of using Injexify:

``` 
// Import injectable decorator from Injexify
import { injectable, inject } from "injexify";

// Define a class marked as injectable
@injectable()
export class DependentService {
    // ... Class implementation
}

// Create another class that uses dependency injection
export class ApiClient {
    
    // Inject the DependentService using the inject decorator
    @inject(DependentService)
    private readonly dependentService: DependentService;

    // ... Class implementation
} 
```


### In this example:

We use the `@injectable` decorator to mark a class `DependentService` as injectable, indicating that it can be injected into other classes.

The `ApiClient` class uses the `@inject` decorator to inject an instance of the `DependentService` class.
