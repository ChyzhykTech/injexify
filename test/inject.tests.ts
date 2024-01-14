// inject.test.ts
import { InjexifyContainer } from "../src/injexify-container";
import { inject } from "../src";
import { injectable } from "../src";
import assert from "assert";


const testMessage = "Test message from TestDependency.getTestMessage()";

describe('inject decorator', () => {
    before(() => {
        // Clear dependencies before registering new ones
        InjexifyContainer.clearDependencies();
    });

    it('should inject dependency into class property', () => {
        @injectable()
        class TestDependency {
            // Class definition
            public getTestMessage(): string {
                return testMessage;
            }
        }

        class TestClassA {
            @inject(TestDependency)
            public testDependency: TestDependency;
        }

        class TestClassB {
            @inject(TestDependency)
            public testDependency: TestDependency;
        }

        // Register dependencies first
        const instanceA: TestClassA = new TestClassA();
        const instanceB: TestClassB = new TestClassB();

        assert.equal(instanceA.testDependency.getTestMessage(), testMessage);
        assert.equal(instanceB.testDependency.getTestMessage(), testMessage);
        assert(instanceA.testDependency instanceof TestDependency);
        assert(instanceB.testDependency instanceof TestDependency);
    });
});
