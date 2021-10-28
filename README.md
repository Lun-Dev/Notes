## 10/28
- Booleans/Numbers/Strings can be objects (When using **new** keyword)
- However, this will make the datatype as **object** instead of primitive data type (Such as string/number/boolean)
- By doing so, this:
    1. Complicates the code
    2. Slow execution time
    3. Unexpected result

- Datatype Difference

| Primitive Datatype    | Non-primitive Datatype |
| --------------------- | ---------------------- |
| * Strings             | * Objects              |
| * Numbers             |                        |
| * Booleans            |                        |
| * Null                |                        |
| * Undefined           |                        |

| Primitive Datatype    | Non-primitive Datatype |
| --------------------- | ---------------------- |
| * Single Value        | * Many Values          |
| * No properties       | * Many Properties      |
| * No methods          | * Can have methods     |
| * Immutable           | * Mutable              |

- Ways to create Javascript object
    1. Object literal (eg. {})
    2. **new** keyword
    3. Object Constructor
    4. Object.create()

- If person is an object, you cannot just **const x = person;**
    1. This is because **x** is not a copy of **person**
    2. Any changes to **x** equals changes to **person**
