import { useCallback, useEffect, useRef } from "react";

/** Returns a stable function identity that always calls the latest callback. */
export function useCallbackRef<A extends unknown[], R>(
  fn: (...args: A) => R
): (...args: A) => R {
  const ref = useRef(fn);
  useEffect(() => {
    ref.current = fn;
  });
  return useCallback((...args: A) => ref.current(...args), []);
}
