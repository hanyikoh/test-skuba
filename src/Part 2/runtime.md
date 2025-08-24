# Runtime Validation

Because TypeScript types don’t exist at runtime, having been stripped out in the transpilation process, our type guarantees can only validate the elements that exist at build time. A lot of the programs we write in a web context are either sending or receiving HTTP requests, so we need some way of making sure that the information we receive at runtime matches up with the types we were expecting. As long as we validate all data that crosses our little safely typed boundary, then the internal type guarantees will all hold.

There are a number of libraries that can achieve this, but a popular choice at SEEK is Runtypes. Using Runtypes, I can set up a schema of what I’m expecting my inputs to look like, and check runtime inputs against it. Runtypes can also generate TypeScript types from our schema, so we have a runtime guarantee that anything that made it past this point conforms to this TypeScript type.

There’s a TS Guild talk on this topic (“Runtime validation doesn’t spark Joi”, 2020-06-16) that might also be helpful.

### Define runtime schema

```ts
import { Record, String, Array, Static } from 'runtypes';

const JobListingSchema = Record({
  title: String,
  company: String,
  skills: Array(String),
});

type JobListing = Static<typeof JobListingSchema>;
```

### Validate API response at runtime

```ts
async function fetchJobListings(): Promise<JobListing[]> {
  const response = await fetch('/api/jobs');
  const data = await response.json();
  
  return Array(JobListingSchema).check(data);
}
```