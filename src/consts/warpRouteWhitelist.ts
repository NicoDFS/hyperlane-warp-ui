// A list of warp route config IDs to be included in the app
// Warp Route IDs use format `SYMBOL/chainname1-chainname2...` where chains are ordered alphabetically
// If left null, all warp routes in the configured registry will be included
// If set to a list (including an empty list), only the specified routes will be included
export const warpRouteWhitelist: Array<string> = [
  'KLC/arbitrum-bsc-kalychain-polygon',
  'BNB/bsc-kalychain',
  'DAI/arbitrum-bsc-kalychain-polygon',
  'ETH/arbitrum-bsc-kalychain-polygon',
  'POL/kalychain-polygon',
  'USDT/arbitrum-bsc-kalychain-polygon',
  'USDC/arbitrum-bsc-kalychain-polygon',
  'WBTC/arbitrum-bsc-kalychain-polygon',
];
