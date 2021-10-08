require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain minor hockey clinic forget slight'; 
let testAccounts = [
"0x5a0611f6fa2be16f2569aee968a241d9f2b097718b42375adc19a4bc7549c881",
"0xa7c57a2d20a2517916760dcb6946f45d776d17ffcbe79f9a1697de767ed2f878",
"0xe6a776c9b102c466c017f23cd81572abb2291d78a5aafd5c510d781120014690",
"0x76673107c862c3f2a379c152a4ab12113f02f0c94702880ef2e1b40e33f9ad9e",
"0x7be3eb53cb4286c3687eac6b4fc1d64689ccc67e51210f33635cbe052cfefb83",
"0xa03c55c56a65a8284b85ab95ce491846481941334758eb8eb432ecec7ccd7fe4",
"0x501d6c7749d04681aa509ab85c0630922afd2314d47b3198756c7b830bb2de10",
"0xcd879f33bbb65ada327df52862c6ac6ffee2b6ed0ae0de60064c8380e5825309",
"0xf53cdc456c536c4c6f80de54c481e707af316e25489f0d5f15de49bed748567d",
"0x898af98a11c5103e382a65c418054a585d562830d191c602d41ff575893d2fe8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

