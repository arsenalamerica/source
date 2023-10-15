'use client';

import { createContext } from 'react';
import { BranchData } from '@arsenalamerica/data';

/* eslint-disable-next-line */
export interface BranchProviderProps {
  children?: React.ReactNode;
  branch: BranchData;
}

export const BranchContext = createContext<BranchData>({
  'fathom-id': '',
  domain: '',
  name: '',
});

export function BranchProvider({ branch, children }: BranchProviderProps) {
  return (
    <BranchContext.Provider value={branch}>{children}</BranchContext.Provider>
  );
}
