import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: any[]) => void, ms: number) => {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, ms);
    }, [callback, ms]);
};
