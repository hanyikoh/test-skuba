### Runtime Validation in TypeScript
TypeScript types only exist during development and are removed when your code compiles to JavaScript. This means you can't rely on TypeScript to validate data that comes from external sources like APIs, user input, or files at runtime.

### Why Runtime Validation Matters
When your app receives data from outside sources, you need to verify it matches your expected types before using it. Without validation, you might get runtime errors or unexpected behavior.

### Popular Libraries: Runtypes vs Zod
#### Runtypes
Runtypes is SEEK's preferred choice for runtime validation. It's simple and integrates well with TypeScript.

Pros:

- Clean, readable syntax
- Generates TypeScript types from schemas
- Lightweight and fast
- Good error messages

Example:
```ts
import { Record, String, Array, Static } from 'runtypes';

const JobListingSchema = Record({
  title: String,
  company: String,
  skills: Array(String),
});

type JobListing = Static<typeof JobListingSchema>;

const validatedJob = JobListingSchema.check(unknownData);
```

#### Zod
Zod is another popular validation library with more features but slightly more complex syntax.

Pros:

- More validation methods built-in
- Better TypeScript inference
- Schema composition and transformation
- Larger community

Example:

```ts
import { z } from 'zod';

const JobListingSchema = z.object({
  title: z.string(),
  company: z.string(),
  skills: z.array(z.string()),
});

type JobListing = z.infer<typeof JobListingSchema>;

const validatedJob = JobListingSchema.parse(unknownData);
```

with runtypes:
```ts
import { Array } from 'runtypes';

async function fetchJobListings(): Promise<JobListing[]> {
  const response = await fetch('/api/jobs');
  const data = await response.json();
  
  return Array(JobListingSchema).check(data);
}
```

with zod:
```ts
async function fetchJobListings(): Promise<JobListing[]> {
  const response = await fetch('/api/jobs');
  const data = await response.json();
  
  return z.array(JobListingSchema).parse(data);
}
```