import { Space_Grotesk } from 'next/font/google';

import { Color } from '../styles/Color';

export const MAIN_FONT = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'KalyBridge';
export const APP_DESCRIPTION = 'A DApp for cross chain token transfers';
export const APP_URL = 'hyperlane-warp-template.vercel.app';
export const BRAND_COLOR = Color.primary;
export const BACKGROUND_COLOR = Color.primary;
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
export const PROXY_DEPLOYED_URL = 'https://proxy.hyperlane.xyz';
