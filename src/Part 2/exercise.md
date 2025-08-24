# Exercise

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