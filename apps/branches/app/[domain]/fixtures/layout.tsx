export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>Fixtures</h1>
      {children}
    </>
  );
}
