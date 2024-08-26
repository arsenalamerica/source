import { Main } from '@arsenalamerica/components';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Main>
      <h1>Premier League Table</h1>
      {children}
    </Main>
  );
}
