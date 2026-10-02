// Lightweight Simulation of C++ Virtual Tables, Polymorphism & vptr in Node.js

// Simulating VTable mechanics
class VTable {
  constructor(className, methods) {
    this.className = className;
    this.methods = methods;
  }
}

// Concrete derived classes simulating C++ object layout with vptr
class Circle {
  constructor(radius) {
    this.radius = radius;
    // Hidden 8-byte vptr pointing to Circle vtable
    this.vptr = new VTable('Circle', {
      area: (self) => Math.round(3.14159 * self.radius * self.radius),
      name: () => 'Circle'
    });
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // Hidden 8-byte vptr pointing to Rectangle vtable
    this.vptr = new VTable('Rectangle', {
      area: (self) => self.width * self.height,
      name: () => 'Rectangle'
    });
  }
}

// Polymorphic collection of base pointers: std::vector<std::unique_ptr<Shape>>
const shapes = [new Circle(7), new Rectangle(10, 20)];

// Polymorphic dynamic dispatch simulation
const computedAreas = shapes.map((shape) => {
  // 1. Dereference vptr
  // 2. Lookup function pointer in vtable
  // 3. Invoke implementation
  return shape.vptr.methods.area(shape);
});

console.log('Polymorphic area computed for Circle with radius 7:', computedAreas[0]);
console.log('Polymorphic area computed for Rectangle with 10x20 dimensions:', computedAreas[1]);
console.log('Total polymorphic shape instances evaluated in array:', shapes.length);
console.log('Hidden virtual pointer (vptr) size per polymorphic object in bytes: 8');
