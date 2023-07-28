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
     interchainGasPaymaster: '0x8fbff791fCcF596DEf2e788549d0275557F95A21',
     mailbox: '0x9FA163eF242870501Ca29CD7A082CBa2Ce24f5a2',
     validatorAnnounce: '0x102Db287A75529c38943aCDA6A5Ff852F2647816'
   },
};
