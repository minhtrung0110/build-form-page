// Libraries
import React, { useState } from 'react';

// Hooks
import { useDeepCompareEffect } from './useDeepCompareEffect';

interface useDebounceProps {
  value: number;
  delay: number;
}

export const useDebounce: React.FC<useDebounceProps> = ({ value, delay }) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useDeepCompareEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
