import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, ms: number) {
    const throttleRef = useRef(true);

    return useCallback((...args: any[]) => {
        if (throttleRef.current) {
            callback(...args);
            throttleRef.current = false;

            setTimeout(() => {
                throttleRef.current = true;
            }, ms);
        }
    }, [callback, ms]);
}
