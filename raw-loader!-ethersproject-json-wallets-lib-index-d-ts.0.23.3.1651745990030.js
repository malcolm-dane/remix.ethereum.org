(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [15], {
        2872: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_exports__["default"] = ("import { Bytes } from \"@ethersproject/bytes\";\nimport { ExternallyOwnedAccount } from \"@ethersproject/abstract-signer\";\nimport { decrypt as decryptCrowdsale } from \"./crowdsale\";\nimport { getJsonWalletAddress, isCrowdsaleWallet, isKeystoreWallet } from \"./inspect\";\nimport { decrypt as decryptKeystore, decryptSync as decryptKeystoreSync, encrypt as encryptKeystore, EncryptOptions, ProgressCallback } from \"./keystore\";\ndeclare function decryptJsonWallet(json: string, password: Bytes | string, progressCallback?: ProgressCallback): Promise<ExternallyOwnedAccount>;\ndeclare function decryptJsonWalletSync(json: string, password: Bytes | string): ExternallyOwnedAccount;\nexport { decryptCrowdsale, decryptKeystore, decryptKeystoreSync, encryptKeystore, isCrowdsaleWallet, isKeystoreWallet, getJsonWalletAddress, decryptJsonWallet, decryptJsonWalletSync, ProgressCallback, EncryptOptions, };\n//# sourceMappingURL=index.d.ts.map");
        })
    }
]);