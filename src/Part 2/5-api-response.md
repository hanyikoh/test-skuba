# Standard API Response

Use specific types and discriminated unions to create robust, type-safe API responses that prevent runtime errors and improve developer experience.

# Standard API Response (Without Discriminated Unions)
This approach uses optional properties instead of discriminated unions, which can lead to runtime errors and less robust type checking.

### Using optional properties
```ts
interface ApiResponse<T> {
  data?: T;
  error?: string;
  errorCode?: string;
}

type JobListingResponse = ApiResponse<JobListing[]>;
type UserProfileResponse = ApiResponse<UserProfile>;
type CreateJobResponse = ApiResponse<{ id: string; slug: string }>;

// Generic API client function
const apiCall = async <T>(
  endpoint: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return {
        error: `HTTP ${response.status}: ${response.statusText}`,
        errorCode: `HTTP_${response.status}`
      };
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      errorCode: 'NETWORK_ERROR'
    };
  }
};
```

### Using discriminated unions for complex objects

```ts
type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };
```

Example Usage:
```ts
const apiCall = async <T>(
  endpoint: string
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      return {
        success: false,
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
```