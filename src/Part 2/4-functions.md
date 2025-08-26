# Functions

In general, it’s preferred to use functions over classes, immutable over mutable state, and function composition over class inheritance. You’ll see mostly const used in code at SEEK, with very few let, to keep things immutable where possible. You’ll see looping done mostly with map or filter rather than for loops, and a general aversion to any kind of global variable. Higher order functions and closures are also very commonly used.

This makes things much easier to reason about, easier for other team members to understand your code, and much easier to test.

### Preferred functional approach

```ts
const calculateTotalSalary = (candidates: Candidate[]): number =>
  candidates
    .filter(candidate => candidate.isActive)
    .map(candidate => candidate.salary)
    .reduce((total, salary) => total + salary, 0);
```

### object-oriented approach

```ts
class SalaryCalculator {
  private candidates: Candidate[] = [];
  
  addCandidate(candidate: Candidate) {
    this.candidates.push(candidate); // mutable state
  }
}
```

### In Short:
Preferred Approaches:

- Functions over classes
- Immutable over mutable state
- Function composition over class inheritance
- const declarations (very few let declarations)
- map or filter for looping instead of for loops
- Higher order functions and closures

Avoided Practices:

- Global variables
- Mutable state where possible
- Traditional class inheritance patterns
- Imperative looping constructs

Benefits:

- Easier to reason about code
- Better code comprehension for team members
- Simplified testing