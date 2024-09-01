type Condition = {
  'time-compare': string;
  time: string;
  weekend: boolean;
  weekday: boolean;
};

type Pub = {
  condition: Condition;
  name: string;
  address: string;
  website: string;
};

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
  pubs?: Pub[];
  social?: {
    name: string;
    url: string;
  }[];
  footer?: string;
}

export type BranchLogo = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;
