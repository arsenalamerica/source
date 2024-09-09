import socials from './socials';

type ImageProps = React.ComponentPropsWithoutRef<'svg'> &
  React.ComponentPropsWithoutRef<'img'>;

interface SocialLogoProps extends Omit<ImageProps, 'name'> {
  className?: string;
  fallback: string;
  height?: number;
  name: string;
  leagueId: number;
  width?: number;
}

export function SocialLogo({
  fallback,
  height = 24,
  name,
  leagueId,
  width = 24,
  ...rest
}: SocialLogoProps) {
  const altText = `${name} Logo`;

  if (!socials.has(leagueId)) {
    console.warn(`Logo for ${leagueId}:${name} not found`);

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
      <path d={socials.get(leagueId)} />
    </svg>
  );
}
