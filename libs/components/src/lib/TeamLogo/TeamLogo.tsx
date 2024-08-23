import teams from './teams';

interface TeamLogoProps {
  className?: string;
  fallback: string;
  height?: number;
  name: string;
  teamId: number;
  width?: number;
}

export function TeamLogo({
  className,
  fallback,
  height = 24,
  name,
  teamId,
  width = 24,
  ...rest
}: TeamLogoProps): JSX.Element {
  const altText = name + ' Logo';

  if (!teams.has(teamId)) {
    console.log(`Logo for ${teamId}:${name} not found`);

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
      {teams.get(teamId) || null}
    </svg>
  );
}
