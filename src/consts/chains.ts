import { ChainMap } from '@hyperlane-xyz/sdk';

import { CustomChainMetadata } from '../features/chains/types';

// A map of chain names to ChainMetadata
export const chains: ChainMap<CustomChainMetadata> = {
  // ----------- Add your chains here -----------------
  // Chains already in the SDK need not be included here. Example custom chain:
   kaly: {
     chainId: 3888,
     name: 'kaly',
     displayName: 'KalyChain',
     nativeToken: { name: 'KalyCoin', symbol: 'KLC', decimals: 18 },
     publicRpcUrls: [{ http: 'https://rpc.kalychain.io/rpc' }],
     blocks: {
       confirmations: 1,
       reorgPeriod: 3,
       estimateBlockTime: 2,
     },
     logoURI: '/kalycoin-logo.svg',
   },
};
