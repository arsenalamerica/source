'use client';

import { lazy, Suspense } from 'react';

import { ClientOnly } from '../ClientOnly/ClientOnly';

const PWAPrompt = lazy(() => import('react-ios-pwa-prompt'));

export function PWAInstallPrompt() {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <PWAPrompt promptOnVisit={1} timesToShow={3} />
      </Suspense>
    </ClientOnly>
  );
}
