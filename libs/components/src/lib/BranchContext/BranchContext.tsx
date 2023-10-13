'use client';

import { createContext } from 'react';
import { BranchObject } from '@arsenalamerica/data';

/* eslint-disable-next-line */
export interface BranchProviderProps {
  children?: React.ReactNode;
  branch: BranchObject;
}

export const BranchContext = createContext<BranchObject>({
  data: {
    'fathom-id': '',
    domain: '',
    name: '',
  },
});

export function BranchProvider({ branch, children }: BranchProviderProps) {
  return (
    <BranchContext.Provider value={branch}>{children}</BranchContext.Provider>
  );
}
