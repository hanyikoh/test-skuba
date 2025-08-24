# Exercise

## Basic Type

1. Define your Review type
2. Type your `reviews` array

```ts
type Review = Record<string, string>;

// OR

interface Review {
  courseName: string;
  courseInstructor: string;
  rating: number;
  reviewText: string;
}

// OR

interface Review {
  course: Course;
  rating: number;
  reviewText: string;
}

interface Course {
  name: string;
  instructor: string;
}
```


## Fix the Generic Status Function

1. Create a specific ApplicationStatus type and update the function signature.

```ts
function updateApplicationStatus(applicationId: string, status: string): void {
  // This accepts any string - prone to typos!
}

// Usage problems:
updateApplicationStatus('123', 'aproved'); // Typo!
updateApplicationStatus('123', 'whatever'); // Invalid status!
```


## Use SEEK Preferred API Response Type

1. Create discriminated union types for consistent API responses.

```ts
function getApplication(id: string): Application | null {
  // What if there's a network error? How do we distinguish between "not found" and "error"?
}

function searchJobs(): JobListing[] {
  // What about loading states? Error messages?
}
```

