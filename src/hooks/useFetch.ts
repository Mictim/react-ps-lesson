import { useState } from 'react';

export const useFetch = (callback: () => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async (): Promise<any> => {
    
    try {
        setIsLoading(true);
        await callback();
    } catch (e: any ) {
        setError(e); 
    } finally {
        setIsLoading(false); 
    }
  }
  return [fetching, isLoading, error]
}
