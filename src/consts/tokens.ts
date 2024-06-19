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
    type: 'native',
    chainId: 137,
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
    hypNativeAddress: '0xaDCbfCEC7eA9472D9ae98CC76011E43352064A4b',
    logoURI: '/logos/matic.svg',
  },
  {
    type: 'native',
    chainId: 42161,
    name: 'Ethereum Token',
    symbol: 'ETH',
    decimals: 18,
    hypNativeAddress: '0xb97e20066D78eC43F8D379B063e49Fd6F0F47102',
    logoURI: '/logos/eth.svg',
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
    chainId: 137,
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    hypCollateralAddress: '0xF030A6d842766Cd4b576F384d9a8258f113f96e5',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    decimals: 8,
    logoURI: '/logos/btc.svg'
  },
  {
    type: 'collateral',
    chainId: 42161,
    address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    hypCollateralAddress: '0x752227CD33d79e2895e2d3723620C4B2077fC4bF',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    decimals: 8,
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
    chainId: 137,
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    hypCollateralAddress: '0x927955abf014b14936bc94E2bF6F7e037A3a9885',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
    logoURI: '/logos/usdt.svg'
  },
  {
    type: 'collateral',
    chainId: 42161,
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    hypCollateralAddress: '0x6F386FB67851d321a1C3589eb2e37464C1a25435',
    name: 'Tether USD',
    symbol: 'USDT',
    decimals: 6,
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
    chainId: 137,
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    hypCollateralAddress: '0x0166694072DFCe254dd32B4F1756eaA3acedB28a',
    name: 'Ethereum Token',
    symbol: 'WETH',
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
  {
    type: 'collateral',
    chainId: 56,
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    hypCollateralAddress: '0x8d14109F70012b85616836E14846bf7350B27faF',
    name: 'DAI Token',
    symbol: 'DAI',
    decimals: 18,
    logoURI: '/logos/dai.svg'
  },
  {
    type: 'collateral',
    chainId: 137,
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    hypCollateralAddress: '0x6d9AcB33eE326EfD2E0EDCC91c18F822d647f905',
    name: 'DAI Token',
    symbol: 'DAI',
    decimals: 18,
    logoURI: '/logos/dai.svg'
  },
  {
    type: 'collateral',
    chainId: 42161,
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    hypCollateralAddress: '0xDF8CFefEa7DaA5E5B23c262A461aCcA6356BCA90',
    name: 'DAI Token',
    symbol: 'DAI',
    decimals: 18,
    logoURI: '/logos/dai.svg'
  },
  {
    type: 'collateral',
    chainId: 56,
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    hypCollateralAddress: '0x7cF0529fd2b229d247D1B23bF7c5ebbf363F09F8',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 18,
    logoURI: '/logos/usdc.svg'
  },
  {
    type: 'collateral',
    chainId: 137,
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    hypCollateralAddress: '0xB2be6B954c4b141cF3EB6de7D4f2b093A068E2Df',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: '/logos/usdc.svg'
  },
  {
    type: 'collateral',
    chainId: 42161,
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    hypCollateralAddress: '0x89aE5C335372bF4d06ece4cEE1e92D04c3fdf1e0',
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    logoURI: '/logos/usdc.svg'
  },
  {
    type: 'collateral',
    chainId: 3888,
    address: '0xd6f35d5f60B7d1755599a5500b6640E0aa7344cE',
    hypCollateralAddress: '0xc0e8693fbE4B848171225D11582526160A530C7a',
    name: 'KalyExchange Token',
    symbol: 'KET',
    decimals: 18,
    logoURI: '/logos/ket.png'
  },
];
