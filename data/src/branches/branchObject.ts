export interface BranchObject {
  data: {
    'fathom-id': string;
    domain: string;
    name: string;
    pub: {
      name: string;
      address: string;
      website: string;
    };
    social: {
      name: string;
      url: string;
    }[];
  };
  Logo: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}
