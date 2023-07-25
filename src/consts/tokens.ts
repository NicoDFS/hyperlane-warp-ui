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
    logoURI: '/bnb.svg',
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    hypCollateralAddress: '0x78CBd542F303E3e44390eC90233343654E6BaEaa',
    name: 'BTCB Token',
    symbol: 'BTCB',
    decimals: 18,
    logoURI: '/logos/btc.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x55d398326f99059fF775485246999027B3197955',
    hypCollateralAddress: '0x0083635BE6d6e4eFEEeCA5Cbc00faBB8DE13f49d',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 18,
    logoURI: '/logos/usdt.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    hypCollateralAddress: '0x6F386FB67851d321a1C3589eb2e37464C1a25435',
    name: 'Ethereum Token',
    symbol: 'ETH',
    decimals: 18,
    logoURI: '/logos/eth.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    hypCollateralAddress: '0x89aE5C335372bF4d06ece4cEE1e92D04c3fdf1e0',
    name: 'Matic Token',
    symbol: 'MATIC',
    decimals: 18,
    logoURI: '/logos/matic.svg'
  },
];
