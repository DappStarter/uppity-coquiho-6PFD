require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name random saddle concert harvest drop slot gasp'; 
let testAccounts = [
"0x1667b6aebc46812c426491a5bc5c1ba44f132e2880482e52101052e62f59625f",
"0xdfd2911c426cbb3562d2bfd54c75bfda28d411fffa24dd7af238399bb11000a0",
"0x4d9dd499540c1a190892b6e134b67e5133e42f9c1b674b7b1bb7dd905c2942aa",
"0x15a80f6c4ae88a28c8c98b7c65a86fc7e3196cc1fb1ef6c07dae8e72a275f57c",
"0x933f5d3bdfea36289f215b07080db0e3a16da1007b5dbaac94463488b5ea7b68",
"0x673d3a4b5d75308850d86bb0c7bddc5d67df4bf9df323753b95a7b0237092378",
"0xa8567cba4e01311b40cc53b085d6329f74ebaaf66814223df94b567742d47bd6",
"0xee7dca64a4d6df3a1d0aee3d0dfb588a98befa702ea94f5fcf68b91e85cb8072",
"0x9d9230480c9b1b76accbd3add457aead4e9d3cdb232b87878b96c4246d3b3562",
"0x402c359aadd6a6e1c8a223e5a08c7668613ce8e1071080b781bffcb8b40a91a9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


