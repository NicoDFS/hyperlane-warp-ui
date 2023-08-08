import { ChainMap, ChainMetadataWithArtifacts, ExplorerFamily, ProtocolType } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadataWithArtifacts> = {
  // ----------- Add your chains here -----------------
  // Chains already in the SDK need not be included here. Example custom chain:
   kaly: {
     protocol: ProtocolType.Ethereum,
     chainId: 3888,
     domainId: 3888,
     name: 'kaly',
     displayName: 'KalyChain',
     nativeToken: { name: 'KalyCoin', symbol: 'KLC', decimals: 18 },
     rpcUrls: [{ http: 'https://rpc.kalychain.io/rpc' }],
     blockExplorers: [
       {
         name: 'KalyScan',
         url: 'https://kalyscan.io',
         apiUrl: 'https://kalyscan.io/api',
         family: ExplorerFamily.Blockscout,
       },
     ],
     blocks: {
       confirmations: 1,
       reorgPeriod: 3,
       estimateBlockTime: 2,
     },
     logoURI: 'logos/kalycoin-logo.svg',
     interchainGasPaymaster: '0xD0a1d1b8E10625eE7Ed4Be4Aa7afA7f169411FBd',
     mailbox: '0xBA1C86c09dE48226E8D24353DFd8A7cacdfAba6E',
     validatorAnnounce: '0x80b8E3F8b0Ce1542b523066A7c5C590Bf691d49e'
   },
};
