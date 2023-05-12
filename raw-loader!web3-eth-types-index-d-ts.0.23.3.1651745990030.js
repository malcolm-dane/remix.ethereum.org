(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [38], {
        2895: (function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_exports__["default"] = ("/*\n    This file is part of web3.js.\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.d.ts\n * @author Josh Stevens <joshstevens19@hotmail.co.uk>\n * @author Samuel Furter <samuel@ethereum.org>\n * @author Prince Sinha <sinhaprince013@gmail.com>\n * @date 2018\n */\n\nimport * as net from 'net';\nimport {\n    BatchRequest,\n    Extension,\n    Log,\n    PromiEvent,\n    provider,\n    Providers,\n    RLPEncodedTransaction,\n    Transaction,\n    TransactionConfig,\n    TransactionReceipt,\n    Common,\n    hardfork,\n    chain,\n    BlockNumber,\n    LogsOptions,\n    PastLogsOptions\n} from 'web3-core';\nimport {Subscription} from 'web3-core-subscriptions';\nimport {AbiCoder} from 'web3-eth-abi';\nimport {Accounts} from 'web3-eth-accounts';\nimport {Contract, ContractOptions} from 'web3-eth-contract';\nimport {Ens} from 'web3-eth-ens';\nimport {Iban} from 'web3-eth-iban';\nimport {Personal} from 'web3-eth-personal';\nimport {Network} from 'web3-net';\nimport {AbiItem} from 'web3-utils';\nimport {BigNumber} from 'bignumber.js';\nimport BN = require('bn.js');\n\nexport {\n    TransactionConfig,\n    RLPEncodedTransaction,\n    Transaction,\n    TransactionReceipt,\n    hardfork,\n    Common,\n    chain\n} from 'web3-core';\n\nexport class Eth {\n    constructor();\n    constructor(provider: provider);\n    constructor(provider: provider, net: net.Socket);\n\n    Contract: new (\n        jsonInterface: AbiItem[] | AbiItem,\n        address?: string,\n        options?: ContractOptions\n    ) => Contract;\n    Iban: new (iban: string) => Iban;\n    personal: Personal;\n    accounts: Accounts;\n    ens: Ens;\n    abi: AbiCoder;\n    net: Network;\n\n    readonly givenProvider: any;\n    static readonly givenProvider: any;\n    defaultAccount: string | null;\n    defaultBlock: BlockNumber;\n    defaultCommon: Common;\n    defaultHardfork: hardfork;\n    defaultChain: chain;\n    transactionPollingTimeout: number;\n    transactionConfirmationBlocks: number;\n    transactionBlockTimeout: number;\n    handleRevert: boolean;\n    readonly currentProvider: provider;\n\n    setProvider(provider: provider): boolean;\n\n    BatchRequest: new () => BatchRequest;\n    static readonly providers: Providers;\n\n    extend(extension: Extension): any;\n\n    clearSubscriptions(callback: (error: Error, result: boolean) => void): void;\n\n    subscribe(\n        type: 'logs',\n        options: LogsOptions,\n        callback?: (error: Error, log: Log) => void\n    ): Subscription<Log>;\n    subscribe(\n        type: 'syncing',\n        callback?: (error: Error, result: Syncing) => void\n    ): Subscription<Syncing>;\n    subscribe(\n        type: 'newBlockHeaders',\n        callback?: (error: Error, blockHeader: BlockHeader) => void\n    ): Subscription<BlockHeader>;\n    subscribe(\n        type: 'pendingTransactions',\n        callback?: (error: Error, transactionHash: string) => void\n    ): Subscription<string>;\n\n    getProtocolVersion(\n        callback?: (error: Error, protocolVersion: string) => void\n    ): Promise<string>;\n\n    isSyncing(\n        callback?: (error: Error, syncing: Syncing) => void\n    ): Promise<Syncing | boolean>;\n\n    getCoinbase(\n        callback?: (error: Error, coinbaseAddress: string) => void\n    ): Promise<string>;\n\n    isMining(\n        callback?: (error: Error, mining: boolean) => void\n    ): Promise<boolean>;\n\n    getHashrate(\n        callback?: (error: Error, hashes: number) => void\n    ): Promise<number>;\n\n    getNodeInfo(\n        callback?: (error: Error, version: string) => void\n    ): Promise<string>;\n\n    getChainId(\n        callback?: (error: Error, version: number) => void\n    ): Promise<number>;\n\n    getGasPrice(\n        callback?: (error: Error, gasPrice: string) => void\n    ): Promise<string>;\n\n    getFeeHistory(\n        blockCount: number | BigNumber | BN | string,\n        lastBlock: number | BigNumber | BN | string,\n        rewardPercentiles: number[],\n        callback?: (error: Error, feeHistory: FeeHistoryResult) => void\n    ): Promise<FeeHistoryResult>;\n\n    getAccounts(\n        callback?: (error: Error, accounts: string[]) => void\n    ): Promise<string[]>;\n\n    getBlockNumber(\n        callback?: (error: Error, blockNumber: number) => void\n    ): Promise<number>;\n\n    getBalance(\n        address: string\n    ): Promise<string>;\n    getBalance(\n        address: string,\n        defaultBlock: BlockNumber): Promise<string>;\n    getBalance(\n        address: string,\n        callback?: (error: Error, balance: string) => void\n    ): Promise<string>;\n    getBalance(\n        address: string,\n        defaultBlock: BlockNumber,\n        callback?: (error: Error, balance: string) => void\n    ): Promise<string>;\n\n    getStorageAt(address: string, position: number | BigNumber | BN | string): Promise<string>;\n    getStorageAt(\n        address: string,\n        position: number | BigNumber | BN | string,\n        defaultBlock: BlockNumber\n    ): Promise<string>;\n    getStorageAt(\n        address: string,\n        position: number | BigNumber | BN | string,\n        callback?: (error: Error, storageAt: string) => void\n    ): Promise<string>;\n    getStorageAt(\n        address: string,\n        position: number | BigNumber | BN | string,\n        defaultBlock: BlockNumber,\n        callback?: (error: Error, storageAt: string) => void\n    ): Promise<string>;\n\n    getCode(\n        address: string\n    ): Promise<string>;\n    getCode(\n        address: string,\n        defaultBlock: BlockNumber\n    ): Promise<string>;\n    getCode(\n        address: string,\n        callback?: (error: Error, code: string) => void\n    ): Promise<string>;\n    getCode(\n        address: string,\n        defaultBlock: BlockNumber,\n        callback?: (error: Error, code: string) => void\n    ): Promise<string>;\n\n    getBlock(blockHashOrBlockNumber: BlockNumber | string): Promise<BlockTransactionString>;\n    getBlock(\n        blockHashOrBlockNumber: BlockNumber | string,\n        returnTransactionObjects: boolean\n    ): Promise<BlockTransactionObject>;\n    getBlock(\n        blockHashOrBlockNumber: BlockNumber | string,\n        callback?: (error: Error, block: BlockTransactionString) => void\n    ): Promise<BlockTransactionString>;\n    getBlock(\n        blockHashOrBlockNumber: BlockNumber | string,\n        returnTransactionObjects: boolean,\n        callback?: (error: Error, block: BlockTransactionObject) => void\n    ): Promise<BlockTransactionObject>;\n\n    getBlockTransactionCount(\n        blockHashOrBlockNumber: BlockNumber | string,\n        callback?: (error: Error, numberOfTransactions: number) => void\n    ): Promise<number>;\n\n    getBlockUncleCount(\n        blockHashOrBlockNumber: BlockNumber | string,\n        callback?: (error: Error, numberOfTransactions: number) => void\n    ): Promise<number>;\n\n    getUncle(\n        blockHashOrBlockNumber: BlockNumber | string,\n        uncleIndex: number | string | BN\n    ): Promise<BlockTransactionString>;\n    getUncle(\n        blockHashOrBlockNumber: BlockNumber | string,\n        uncleIndex: number | string | BN,\n        returnTransactionObjects: boolean\n    ): Promise<BlockTransactionObject>;\n    getUncle(\n        blockHashOrBlockNumber: BlockNumber | string,\n        uncleIndex: number | string | BN,\n        callback?: (error: Error, uncle: any) => void\n    ): Promise<BlockTransactionString>;\n    getUncle(\n        blockHashOrBlockNumber: BlockNumber | string,\n        uncleIndex: number | string | BN,\n        returnTransactionObjects: boolean,\n        callback?: (error: Error, uncle: any) => void\n    ): Promise<BlockTransactionObject>;\n\n    getTransaction(\n        transactionHash: string,\n        callback?: (error: Error, transaction: Transaction) => void\n    ): Promise<Transaction>;\n\n    getPendingTransactions(\n        callback?: (error: Error, result: Transaction[]) => void\n    ): Promise<Transaction[]>;\n\n    getTransactionFromBlock(\n        blockHashOrBlockNumber: BlockNumber | string,\n        indexNumber: number | string | BN,\n        callback?: (error: Error, transaction: Transaction) => void\n    ): Promise<Transaction>;\n\n    getTransactionReceipt(\n        hash: string,\n        callback?: (\n            error: Error,\n            transactionReceipt: TransactionReceipt\n        ) => void\n    ): Promise<TransactionReceipt>;\n\n    getTransactionCount(address: string): Promise<number>;\n    getTransactionCount(\n        address: string,\n        defaultBlock: BlockNumber\n    ): Promise<number>;\n    getTransactionCount(\n        address: string,\n        callback?: (error: Error, count: number) => void\n    ): Promise<number>;\n    getTransactionCount(\n        address: string,\n        defaultBlock: BlockNumber,\n        callback?: (error: Error, count: number) => void\n    ): Promise<number>;\n\n    sendTransaction(\n        transactionConfig: TransactionConfig,\n        callback?: (error: Error, hash: string) => void\n    ): PromiEvent<TransactionReceipt>;\n\n    sendSignedTransaction(\n        signedTransactionData: string,\n        callback?: (error: Error, hash: string) => void\n    ): PromiEvent<TransactionReceipt>;\n\n    sign(\n        dataToSign: string,\n        address: string | number,\n        callback?: (error: Error, signature: string) => void\n    ): Promise<string>;\n\n    signTransaction(\n        transactionConfig: TransactionConfig,\n        callback?: (\n            error: Error,\n            signedTransaction: RLPEncodedTransaction\n        ) => void\n    ): Promise<RLPEncodedTransaction>;\n    signTransaction(\n        transactionConfig: TransactionConfig,\n        address: string\n    ): Promise<RLPEncodedTransaction>;\n    signTransaction(\n        transactionConfig: TransactionConfig,\n        address: string,\n        callback: (\n            error: Error,\n            signedTransaction: RLPEncodedTransaction\n        ) => void\n    ): Promise<RLPEncodedTransaction>;\n\n    call(transactionConfig: TransactionConfig): Promise<string>;\n    call(\n        transactionConfig: TransactionConfig,\n        defaultBlock?: BlockNumber\n    ): Promise<string>;\n    call(\n        transactionConfig: TransactionConfig,\n        callback?: (error: Error, data: string) => void\n    ): Promise<string>;\n    call(\n        transactionConfig: TransactionConfig,\n        defaultBlock: BlockNumber,\n        callback: (error: Error, data: string) => void\n    ): Promise<string>;\n\n    estimateGas(\n        transactionConfig: TransactionConfig,\n        callback?: (error: Error, gas: number) => void\n    ): Promise<number>;\n\n    getPastLogs(\n        options: PastLogsOptions,\n        callback?: (error: Error, logs: Log[]) => void\n    ): Promise<Log[]>;\n\n    getWork(\n        callback?: (error: Error, result: string[]) => void\n    ): Promise<string[]>;\n\n    submitWork(\n        data: [string, string, string],\n        callback?: (error: Error, result: boolean) => void\n    ): Promise<boolean>;\n\n    getProof(\n        address: string,\n        storageKey: number[] | BigNumber[] | BN[] | string[],\n        blockNumber: BlockNumber,\n        callback?: (error: Error, result: GetProof) => void\n    ): Promise<GetProof>;\n\n    getProof(\n        address: string,\n        storageKey: number[] | BigNumber[] | BN[] | string[],\n        blockNumber: BlockNumber,\n    ): Promise<GetProof>;\n\n    requestAccounts(): Promise<string[]>\n    requestAccounts(callback: (error: Error, result: string[]) => void): Promise<string[]>\n}\n\nexport interface Syncing {\n    StartingBlock: number;\n    CurrentBlock: number;\n    HighestBlock: number;\n    KnownStates: number;\n    PulledStates: number;\n}\n\nexport interface BlockHeader {\n    number: number;\n    hash: string;\n    parentHash: string;\n    nonce: string;\n    sha3Uncles: string;\n    logsBloom: string;\n    transactionRoot: string;\n    stateRoot: string;\n    receiptRoot: string;\n    miner: string;\n    extraData: string;\n    gasLimit: number;\n    gasUsed: number;\n    timestamp: number | string;\n}\n\n// TODO: This interface does exist to provide backwards-compatibility and can get removed on a minor release\nexport interface Block extends BlockTransactionBase {\n    transactions: Transaction[] | string[];\n}\n\nexport interface BlockTransactionBase extends BlockHeader {\n    size: number;\n    difficulty: number;\n    totalDifficulty: number;\n    uncles: string[];\n}\n\nexport interface BlockTransactionObject extends BlockTransactionBase {\n    transactions: Transaction[];\n}\n\nexport interface BlockTransactionString extends BlockTransactionBase {\n    transactions: string[];\n}\n\nexport interface GetProof {\n    address: string;\n    balance: string;\n    codeHash: string;\n    nonce: string;\n    storageHash: string;\n    accountProof: string[];\n    storageProof: StorageProof[];\n}\n\nexport interface StorageProof {\n    key: string;\n    value: string;\n    proof: string[];\n}\n\nexport interface FeeHistoryResult {\n    baseFeePerGas: string[];\n    gasUsedRatio: number[];\n    oldestBlock: number;\n    reward: string[][];\n}\n");
        })
    }
]);