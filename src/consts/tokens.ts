import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  {
    type: 'native',
    chainId: 3888,
    name: 'KalyCoin',
    symbol: 'KLC',
    decimals: 18,
    hypNativeAddress: '0x9a012F6632B248e8CeB152b2091329710793fB74',
    logoURI: '/kalycoin-logo.svg',
  },
  {
    type: 'native',
    chainId: 56,
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    hypNativeAddress: '0x92fAAf45327682bba965D0Ea933AfB1E0575a0f2',
    logoURI: '/bnb.png',
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    hypCollateralAddress: '0x78CBd542F303E3e44390eC90233343654E6BaEaa',
    name: 'BTCB Token',
    symbol: 'BTCB',
    decimals: 18,
    logoURI: '/logos/btc.png'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x0a70dDf7cDBa3E8b6277C9DDcAf2185e8B6f539f',
    hypCollateralAddress: '0x53E2f15BD8843a13c080F8AeD1F13C95Bee0ea96',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    logoURI: '/logos/usdt.png'
  },
];
