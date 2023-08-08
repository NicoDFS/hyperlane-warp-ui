import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  {
    type: 'native',
    chainId: 3888,
    name: 'KalyCoin',
    symbol: 'KLC',
    decimals: 18,
    hypNativeAddress: '0x9175EA108aDBeEA03a32Ba37547c17425D1d7a1d',
    logoURI: '/kalycoin-logo.svg',
  },
  {
    type: 'native',
    chainId: 56,
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    hypNativeAddress: '0x0E529be03ee0090A82D9d669EDB9f897E54503ec',
    logoURI: '/bnb.svg',
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    hypCollateralAddress: '0x686911F278E64c31E476169D1ac06E877B211323',
    name: 'BTCB Token',
    symbol: 'BTCB',
    decimals: 18,
    logoURI: '/logos/btc.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x55d398326f99059fF775485246999027B3197955',
    hypCollateralAddress: '0x6BADb4a1cB00dE3069555191f1E3391B2c58d459',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 18,
    logoURI: '/logos/usdt.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    hypCollateralAddress: '0xd422E2ED11fd97Bc12cB5affF64a8710a4FF77D8',
    name: 'Ethereum Token',
    symbol: 'ETH',
    decimals: 18,
    logoURI: '/logos/eth.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    hypCollateralAddress: '0x8172FA587bE7822c2353420611C666DcDc6423Cf',
    name: 'Matic Token',
    symbol: 'MATIC',
    decimals: 18,
    logoURI: '/logos/matic.svg'
  },
];
