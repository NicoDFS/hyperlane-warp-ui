import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  {
    type: 'native',
    chainId: 3888,
    name: 'KalyCoin',
    symbol: 'KLC',
    decimals: 18,
    hypNativeAddress: '0x922dE8eC741B698107BA485c3762112aB9b1B8A2',
    logoURI: '/kalycoin-logo.svg',
  },
  {
    type: 'native',
    chainId: 56,
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
    hypNativeAddress: '0x3dfa6B8a45703De4D9f0a1eB3F13F81fDFce9357',
    logoURI: '/bnb.svg',
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    hypCollateralAddress: '0x533E1037336C2299ce790b56d7d4F2366b83dA84',
    name: 'BTCB Token',
    symbol: 'BTCB',
    decimals: 18,
    logoURI: '/logos/btc.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x55d398326f99059fF775485246999027B3197955',
    hypCollateralAddress: '0x48D0872a255f049c8b916b30C3A3cf3053dCA495',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 18,
    logoURI: '/logos/usdt.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    hypCollateralAddress: '0xf06086C74c0B5AA7A894eC5544Cfe7F1722a124f',
    name: 'Ethereum Token',
    symbol: 'ETH',
    decimals: 18,
    logoURI: '/logos/eth.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    hypCollateralAddress: '0x9a20Dc88bFD99414E947CD39b873D427D69FDB0C',
    name: 'Matic Token',
    symbol: 'MATIC',
    decimals: 18,
    logoURI: '/logos/matic.svg'
  },
];
