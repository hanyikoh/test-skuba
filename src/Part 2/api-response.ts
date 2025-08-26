type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };


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
    const data = await response.json() as T;
    return { success: true, data, error: '' };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};