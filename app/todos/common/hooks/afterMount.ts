import { useEffect } from 'react';

export function afterMount(execute: () => void) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    execute();
  }, [execute]);
}
