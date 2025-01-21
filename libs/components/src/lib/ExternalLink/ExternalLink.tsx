import React, { forwardRef } from 'react';

export type ExternalLinkProperties =
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default forwardRef(function ExternalLink(
  props: ExternalLinkProperties,
  forwardedRef: React.Ref<HTMLAnchorElement>,
) {
  return (
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
