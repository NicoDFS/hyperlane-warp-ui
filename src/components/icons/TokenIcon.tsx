import Image from 'next/image';
import { memo, useMemo } from 'react';

import { IToken } from '@hyperlane-xyz/sdk';
import { Circle } from '@hyperlane-xyz/widgets';

import { getRegistry } from '../../context/context';
import { isValidHttpsUrl, isValidRelativeUrl } from '../../utils/url';

interface Props {
  token?: IToken | null;
  size?: number;
}

function _TokenIcon({ token, size = 32 }: Props) {
  const title = token?.symbol || '';
  const character = title ? title.charAt(0).toUpperCase() : '';
  const fontSize = Math.floor(size / 2);

  const imageSrc = useMemo(() => getImageSrc(token), [token]);
  const bgColorSeed =
    token && !imageSrc ? (Buffer.from(token.addressOrDenom).at(0) || 0) % 5 : undefined;

  return (
    <Circle size={size} bgColorSeed={bgColorSeed} title={title}>
      {imageSrc ? (
        <Image src={imageSrc} alt={title} width={size} height={size} className="p-0.5" />
      ) : (
        <div className={`text-[${fontSize}px]`}>{character}</div>
      )}
    </Circle>
  );
}

function getImageSrc(token?: IToken | null): string | null {
  if (!token?.logoURI) return null;

  // If it's a valid, direct HTTPS URL, return it
  if (isValidHttpsUrl(token.logoURI)) return token.logoURI;

  // If it's a relative URL, assume it's relative to the public folder
  if (isValidRelativeUrl(token.logoURI)) {
    // Remove leading slash if present
    const path = token.logoURI.startsWith('/') ? token.logoURI.slice(1) : token.logoURI;
    return `/${path}`;
  }

  // If it's not a valid URL, try to get it from the registry
  return getRegistry().getUri(token.logoURI);
}

export const TokenIcon = memo(_TokenIcon);