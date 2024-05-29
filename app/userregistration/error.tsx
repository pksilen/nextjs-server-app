'use client';

import classes from './error.module.scss';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={classes.errorMessage}>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
