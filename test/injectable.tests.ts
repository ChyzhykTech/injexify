import assert from 'assert';
import { injectable } from '../src';
import { InjexifyContainer } from '../src/injexify-container';

describe('injectable decorator', () => {
    beforeEach(() => {
        // Clear the registrations before each test to avoid interference between tests
        InjexifyContainer.clearDependencies();
    });

    it('should register a class with InjexifyContainer', () => {
        // Arrange
        @injectable()
        class TestClass {
            // Class definition
        }

        // Act
        const instance = InjexifyContainer.resolve(TestClass.name);

        // Assert
        assert(instance instanceof TestClass);
    });

    it('should throw an error when the same class is decorated multiple times', () => {
        let thrown = false;
        let errorMessage = "";

        // Act
        try {
            markAsInjectableTestClass();
            markAsInjectableTestClass(); // should throw an error
        } catch (error) {
            thrown = true;
            errorMessage = error.message;
        }

        // Assert
        assert.ok(thrown);
        assert.equal(errorMessage, "Class TestClass is already marked as @injectable.");
    });
});

function markAsInjectableTestClass () {
    @injectable()
    class TestClass {
        // Class definition
    }
}
