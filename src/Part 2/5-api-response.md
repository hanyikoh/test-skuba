# Standard API Response

Use specific types and discriminated unions to create robust, type-safe API responses that prevent runtime errors and improve developer experience.

### Using discriminated unions for complex objects

```ts
type ApiResponse = 
  | { success: true; data: JobListing[] }
  | { success: false; error: string };
```