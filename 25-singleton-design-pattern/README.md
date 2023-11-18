Singleton object instances help save memory as it does not create a different copy of an object.

In this example, 2 counter objects counter1 and counter2 are not equan in the non-singleton.js file where as they are equal in the second example.

If you wish to keep a track of each and every counter, you need to create different instances.

Singleton instances are created by creating an IIFE functions where a variable keeps a track if an instance is already created or not. If the instance is created, it returns the same instance else it creates a new one.