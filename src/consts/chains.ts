import { ChainMap } from '@hyperlane-xyz/sdk';

import { CustomChainMetadata } from '../features/chains/types';

// A map of chain names to ChainMetadata
export const chains: ChainMap<CustomChainMetadata> = {
  // ----------- Add your chains here -----------------
  // Chains already in the SDK need not be included here. Example custom chain:
   kalytestnet: {
     chainId: 3889,
     name: 'kalytestnet',
     displayName: 'Kaly Chain',
     nativeToken: { name: 'KalyCoin', symbol: 'tKLC', decimals: 18 },
     publicRpcUrls: [{ http: 'https://testnetrpc.kalychain.io/rpc' }],
     blocks: {
       confirmations: 1,
       reorgPeriod: 1,
       estimateBlockTime: 2,
     },
     logoURI: '/kalycoin-logo.svg',
   },
};
