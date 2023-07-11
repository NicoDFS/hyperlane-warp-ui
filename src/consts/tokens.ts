import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  {
    type: 'native',
    chainId: 3889,
    name: 'KalyCoin',
    symbol: 'tKLC',
    decimals: 18,
    hypNativeAddress: '0x505BaAE056396F28C8e757803a7f924B1A04EB70',
    logoURI: '/kalycoin-logo.svg',
  },

  // Example native token for a Sealevel (Solana) chain
  // {
  //   type: 'native',
  //   protocol: 'sealevel',
  //   chainId: 1399811151,
  //   hypNativeAddress: '3s6afZYk3EmjsZQ33N9yPTdSk4cY5CKeQ5wtoBcWjFUn',
  //   name: 'Sol',
  //   symbol: 'SOL',
  //   decimals: 9,
  //   logoURI: '/logos/solana.svg',
  // },

  // Example collateral token for a Sealevel (Solana) chain
  // {
  //   type: 'collateral',
  //   protocol: 'sealevel',
  //   chainId: 1399811151,
  //   address: 'Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr',
  //   hypCollateralAddress: 'Hsb2PdnUvd7VvZJ1svS8TrVLfsRDdDTWoHK5r2RwGZBS',
  //   name: 'dUSDC',
  //   symbol: 'dUSDC',
  //   decimals: 6,
  //   isSpl2022: false,
  // },
];
