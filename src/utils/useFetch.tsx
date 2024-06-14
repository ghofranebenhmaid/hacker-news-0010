import { useState, useEffect } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FetchResult<T> {
    data: T | null;
    error: Error | null;
    status: Status;
}

function useFetch<T>(url: string): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState<Status>('idle');

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setStatus('loading');
            setData(null);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setStatus('success');
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                    setStatus('error');
                }
            }
        };

        fetchData();
    }, [url]);

    return { data, error, status };
}

export default useFetch;
