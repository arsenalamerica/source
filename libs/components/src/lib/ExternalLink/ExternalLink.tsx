import React, { forwardRef } from 'react';

export type ExternalLinkProperties =
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default forwardRef(function ExternalLink(
  props: ExternalLinkProperties,
  forwardedRef: React.Ref<HTMLAnchorElement>,
) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      {...props}
      ref={forwardedRef}
      target="_blank"
      rel={['noopener', 'noreferrer', props.rel]
        .filter((e) => e != null)
        .join(' ')}
    />
  );
});
