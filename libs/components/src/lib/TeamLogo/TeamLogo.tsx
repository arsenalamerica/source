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
}

export function TeamLogo({
  fallback,
  height = 24,
  name,
  teamId,
  width = 24,
  ...rest
}: TeamLogoProps) {
  const altText = name + ' Logo';

  if (!teams.has(teamId)) {
    console.log(`Logo for ${teamId}:${name} not found`);

    return <img {...rest} src={fallback} alt={altText} />;
  }

  return (
    <svg
      {...rest}
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
