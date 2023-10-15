export interface BranchData {
  'fathom-id': string;
  domain: string;
  name: string;
  pub?: {
    name: string;
    address: string;
    website: string;
    replayTime?: string;
  };
  social?: {
    name: string;
    url: string;
  }[];
}

export type BranchLogo = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;
