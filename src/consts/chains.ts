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
     interchainGasPaymaster: '0xF25e1BF3a5231CdEb7cDa51EDa5997e1B9E13Ea3',
     mailbox: '0xcfafc739e514729df4a81438045BB367691369aa',
     validatorAnnounce: '0x5850B207c470C1F2F4c1ca6B1f624d4C28B729a1'
   },
};
