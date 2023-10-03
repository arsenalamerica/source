'use client';

import { Suspense, useEffect } from 'react';
import { load, trackPageview } from 'fathom-client';
import { usePathname, useSearchParams } from 'next/navigation';

export interface FathomNextProps {
  fathomId: string;
  includedDomains?: string[];
}

function TrackPageView({ fathomId, includedDomains }: FathomNextProps) {
  const pathname = usePathname();
  const searchParameters = useSearchParams();

  // Load the Fathom script on mount
  useEffect(() => {
    load(fathomId, {
      includedDomains: includedDomains,
      auto: false,
    });
  }, [fathomId, includedDomains]);

  // Record a pageview when route changes
  useEffect(() => {
    if (!pathname) return;

    trackPageview({
      url: pathname + searchParameters.toString(),
      referrer: document.referrer,
    });
  }, [pathname, searchParameters]);

  return null;
}

export function FathomNext(props: FathomNextProps) {
  return (
    <Suspense fallback={null}>
      <TrackPageView {...props} />
    </Suspense>
  );
}
