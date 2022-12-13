/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface InventoryContract
  extends Truffle.Contract<InventoryInstance> {
  "new"(
    _token: string,
    meta?: Truffle.TransactionDetails
  ): Promise<InventoryInstance>;
}

type AllEvents = never;

export interface InventoryInstance extends Truffle.ContractInstance {
  createFarm: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  getInventory(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN }>;

  getLand(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ commodity: BN; createdAt: BN }[]>;

  getCurrentFarm(
    _transactions: {
      action: number | BN | string;
      commodity: number | BN | string;
      timestamp: number | BN | string;
      landIndex: number | BN | string;
    }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
    1: BN;
  }>;

  sync: {
    (
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  buyAppleSeed(
    _transactions: {
      action: number | BN | string;
      commodity: number | BN | string;
      timestamp: number | BN | string;
      landIndex: number | BN | string;
    }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
    1: BN;
    2: BN;
    3: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
  }>;

  sellAppleSeed(
    _transactions: {
      action: number | BN | string;
      commodity: number | BN | string;
      timestamp: number | BN | string;
      landIndex: number | BN | string;
    }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
    1: BN;
    2: BN;
    3: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
  }>;

  plantAppleSeed(
    _transactions: {
      action: number | BN | string;
      commodity: number | BN | string;
      timestamp: number | BN | string;
      landIndex: number | BN | string;
    }[],
    landIndex: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
    1: BN;
    2: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
  }>;

  harvestAppleSeed(
    _transactions: {
      action: number | BN | string;
      commodity: number | BN | string;
      timestamp: number | BN | string;
      landIndex: number | BN | string;
    }[],
    landIndex: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{
    0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
    1: BN;
    2: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
  }>;

  getApplePrice(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    createFarm: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    getInventory(txDetails?: Truffle.TransactionDetails): Promise<{
      isInitialized: boolean;
      appleSeeds: BN;
      avocadoSeeds: BN;
    }>;

    getLand(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ commodity: BN; createdAt: BN }[]>;

    getCurrentFarm(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
      1: BN;
    }>;

    sync: {
      (
        _transactions: {
          action: number | BN | string;
          commodity: number | BN | string;
          timestamp: number | BN | string;
          landIndex: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _transactions: {
          action: number | BN | string;
          commodity: number | BN | string;
          timestamp: number | BN | string;
          landIndex: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _transactions: {
          action: number | BN | string;
          commodity: number | BN | string;
          timestamp: number | BN | string;
          landIndex: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _transactions: {
          action: number | BN | string;
          commodity: number | BN | string;
          timestamp: number | BN | string;
          landIndex: number | BN | string;
        }[],
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    buyAppleSeed(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
      1: BN;
      2: BN;
      3: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
    }>;

    sellAppleSeed(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
      1: BN;
      2: BN;
      3: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
    }>;

    plantAppleSeed(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      landIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
      1: BN;
      2: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
    }>;

    harvestAppleSeed(
      _transactions: {
        action: number | BN | string;
        commodity: number | BN | string;
        timestamp: number | BN | string;
        landIndex: number | BN | string;
      }[],
      landIndex: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{
      0: { isInitialized: boolean; appleSeeds: BN; avocadoSeeds: BN };
      1: BN;
      2: { action: BN; commodity: BN; timestamp: BN; landIndex: BN }[];
    }>;

    getApplePrice(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions
  ): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
