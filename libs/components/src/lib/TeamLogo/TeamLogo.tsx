import teams from './teams';

type ImageProps = React.ComponentPropsWithoutRef<'svg'> &
  React.ComponentPropsWithoutRef<'img'>;

interface TeamLogoProps extends ImageProps {
  className?: string;
  fallback: string;
  height?: number;
  name: string;
  teamId: number;
  width?: number;
  isLoading?: boolean;
}

export function TeamLogo({
  fallback,
  height = 24,
  name,
  teamId,
  width = 24,
  isLoading,
  className,
  ...rest
}: TeamLogoProps) {
  const altText = name + ' Logo';

  if (isLoading) {
    return (
      <img
        {...rest}
        className={[className, 'loading'].join(' ')}
        src={fallback}
        alt="Loading..."
      />
    );
  }

  if (!teams.has(teamId)) {
    console.warn(`Logo for ${teamId}:${name} not found`);

    return <img {...rest} className={className} src={fallback} alt={altText} />;
  }

  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      role="img"
      aria-label={altText}
      fill="currentColor"
      width={width}
      height={height}
    >
      <path d={teams.get(teamId)} />
    </svg>
  );
}
