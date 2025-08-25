# Standard API Response

Use specific types and discriminated unions to create robust, type-safe API responses that prevent runtime errors and improve developer experience.

### Avoid Less Specific

```ts
function updateJobStatus(jobId: string, status: string): void {
  ...
}
```

### Preferred More Specific

```ts
type JobStatus = 'draft' | 'published' | 'closed' | 'archived';

function updateJobStatus(jobId: string, status: JobStatus): void {
  ...
}
```

### Using discriminated unions for complex objects

```ts
type ApiResponse = 
  | { success: true; data: JobListing[] }
  | { success: false; error: string };
```