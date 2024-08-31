'use client';

import { useEffect, useState } from 'react';

type ReactChildren =
  | JSX.Element[]
  | JSX.Element
  | React.ReactElement[]
  | React.ReactElement
  | string[]
  | string
  | number[]
  | number;

export function ClientOnly({
  children,
  fallback,
}: {
  children?: ReactChildren;
  fallback?: ReactChildren;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return children;
}
