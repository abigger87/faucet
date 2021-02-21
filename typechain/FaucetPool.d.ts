/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FaucetPoolContract
  extends Truffle.Contract<FaucetPoolInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<FaucetPoolInstance>;
}

export interface ApprovalForAll {
  name: "ApprovalForAll";
  args: {
    account: string;
    operator: string;
    approved: boolean;
    0: string;
    1: string;
    2: boolean;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface Paused {
  name: "Paused";
  args: {
    account: string;
    0: string;
  };
}

export interface RugPull {
  name: "RugPull";
  args: {
    _from: string;
    0: string;
  };
}

export interface SetUserTrancheEvent {
  name: "SetUserTrancheEvent";
  args: {
    from: string;
    level: BN;
    user: string;
    0: string;
    1: BN;
    2: string;
  };
}

export interface TokenRedemption {
  name: "TokenRedemption";
  args: {
    ids: BN[];
    data: string;
    0: BN[];
    1: string;
  };
}

export interface TrancheCreated {
  name: "TrancheCreated";
  args: {
    from: string;
    level: BN;
    ids: BN[];
    uri: string;
    enabled: boolean;
    0: string;
    1: BN;
    2: BN[];
    3: string;
    4: boolean;
  };
}

export interface TrancheDeleted {
  name: "TrancheDeleted";
  args: {
    from: string;
    level: BN;
    0: string;
    1: BN;
  };
}

export interface TrancheIdAmountUpdate {
  name: "TrancheIdAmountUpdate";
  args: {
    from: string;
    level: BN;
    id: BN;
    amount: BN;
    0: string;
    1: BN;
    2: BN;
    3: BN;
  };
}

export interface TrancheUpdate {
  name: "TrancheUpdate";
  args: {
    from: string;
    level: BN;
    uri: string;
    enabled: boolean;
    0: string;
    1: BN;
    2: string;
    3: boolean;
  };
}

export interface TransferBatch {
  name: "TransferBatch";
  args: {
    operator: string;
    from: string;
    to: string;
    ids: BN[];
    values: BN[];
    0: string;
    1: string;
    2: string;
    3: BN[];
    4: BN[];
  };
}

export interface TransferSingle {
  name: "TransferSingle";
  args: {
    operator: string;
    from: string;
    to: string;
    id: BN;
    value: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: BN;
  };
}

export interface URI {
  name: "URI";
  args: {
    value: string;
    id: BN;
    0: string;
    1: BN;
  };
}

export interface Unpaused {
  name: "Unpaused";
  args: {
    account: string;
    0: string;
  };
}

type AllEvents =
  | ApprovalForAll
  | OwnershipTransferred
  | Paused
  | RugPull
  | SetUserTrancheEvent
  | TokenRedemption
  | TrancheCreated
  | TrancheDeleted
  | TrancheIdAmountUpdate
  | TrancheUpdate
  | TransferBatch
  | TransferSingle
  | URI
  | Unpaused;

export interface FaucetPoolInstance extends Truffle.ContractInstance {
  _claw: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  balanceOf(
    account: string,
    id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  balanceOfBatch(
    accounts: string[],
    ids: (number | BN | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  c_0x6569d814(
    c__0x6569d814: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<void>;

  c_0x7084c011(
    c__0x7084c011: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<void>;

  c_0x958ca5aa(
    c__0x958ca5aa: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<void>;

  create_tranche: {
    (
      _level: number | BN | string,
      _ids: (number | BN | string)[],
      _tranche_uri: string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _level: number | BN | string,
      _ids: (number | BN | string)[],
      _tranche_uri: string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _level: number | BN | string,
      _ids: (number | BN | string)[],
      _tranche_uri: string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _level: number | BN | string,
      _ids: (number | BN | string)[],
      _tranche_uri: string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  delete_tranche: {
    (
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  get_adapter_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

  get_pool_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

  get_pool_share: {
    (
      _from: string,
      _max_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _from: string,
      _max_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _from: string,
      _max_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _from: string,
      _max_amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  get_tranche_enabled(
    _level: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  get_tranche_exists(
    _level: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  get_tranche_id_amounts(
    _level: number | BN | string,
    _id: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  get_tranche_uri(
    _level: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  get_user_tranche_level(
    _user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  initialize: {
    (
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  isApprovedForAll(
    account: string,
    operator: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  mint_item: {
    (
      _id: number | BN | string,
      _amount: number | BN | string,
      _uri_data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _id: number | BN | string,
      _amount: number | BN | string,
      _uri_data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _id: number | BN | string,
      _amount: number | BN | string,
      _uri_data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _id: number | BN | string,
      _amount: number | BN | string,
      _uri_data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pause: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  redeem: {
    (
      _ids: (number | BN | string)[],
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _ids: (number | BN | string)[],
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _ids: (number | BN | string)[],
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _ids: (number | BN | string)[],
      _data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  rugPull: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  safeBatchTransferFrom: {
    (
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      ids: (number | BN | string)[],
      amounts: (number | BN | string)[],
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  safeTransferFrom: {
    (
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      from: string,
      to: string,
      id: number | BN | string,
      amount: number | BN | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setApprovalForAll: {
    (
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      operator: string,
      approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_adapter_address: {
    (_adapter_address: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_approval: {
    (
      _user: string,
      _approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _user: string,
      _approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _user: string,
      _approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _user: string,
      _approved: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_pool_address: {
    (_pool_address: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _pool_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      _pool_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _pool_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_tranche_enabled: {
    (
      _level: number | BN | string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _level: number | BN | string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _level: number | BN | string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _level: number | BN | string,
      _enabled: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_tranche_id_amounts: {
    (
      _level: number | BN | string,
      _id: number | BN | string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _level: number | BN | string,
      _id: number | BN | string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _level: number | BN | string,
      _id: number | BN | string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _level: number | BN | string,
      _id: number | BN | string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_tranche_uri: {
    (
      _level: number | BN | string,
      _uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _level: number | BN | string,
      _uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _level: number | BN | string,
      _uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _level: number | BN | string,
      _uri: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  set_user_tranche_level: {
    (
      _level: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _level: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;
    sendTransaction(
      _level: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _level: number | BN | string,
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  supportsInterface(
    interfaceId: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  unpause: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  uri(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    _claw: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    balanceOf(
      account: string,
      id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    balanceOfBatch(
      accounts: string[],
      ids: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    c_0x6569d814(
      c__0x6569d814: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;

    c_0x7084c011(
      c__0x7084c011: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;

    c_0x958ca5aa(
      c__0x958ca5aa: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;

    create_tranche: {
      (
        _level: number | BN | string,
        _ids: (number | BN | string)[],
        _tranche_uri: string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _level: number | BN | string,
        _ids: (number | BN | string)[],
        _tranche_uri: string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _level: number | BN | string,
        _ids: (number | BN | string)[],
        _tranche_uri: string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _level: number | BN | string,
        _ids: (number | BN | string)[],
        _tranche_uri: string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    delete_tranche: {
      (
        _level: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _level: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _level: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _level: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    get_adapter_address(
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    get_pool_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

    get_pool_share: {
      (
        _from: string,
        _max_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _from: string,
        _max_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _from: string,
        _max_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _from: string,
        _max_amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    get_tranche_enabled(
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    get_tranche_exists(
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    get_tranche_id_amounts(
      _level: number | BN | string,
      _id: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    get_tranche_uri(
      _level: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    get_user_tranche_level(
      _user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    initialize: {
      (
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    isApprovedForAll(
      account: string,
      operator: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    mint_item: {
      (
        _id: number | BN | string,
        _amount: number | BN | string,
        _uri_data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _id: number | BN | string,
        _amount: number | BN | string,
        _uri_data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _id: number | BN | string,
        _amount: number | BN | string,
        _uri_data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _id: number | BN | string,
        _amount: number | BN | string,
        _uri_data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pause: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    redeem: {
      (
        _ids: (number | BN | string)[],
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _ids: (number | BN | string)[],
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        _ids: (number | BN | string)[],
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _ids: (number | BN | string)[],
        _data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    rugPull: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    safeBatchTransferFrom: {
      (
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        ids: (number | BN | string)[],
        amounts: (number | BN | string)[],
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    safeTransferFrom: {
      (
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        from: string,
        to: string,
        id: number | BN | string,
        amount: number | BN | string,
        data: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setApprovalForAll: {
      (
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        operator: string,
        approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_adapter_address: {
      (
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_approval: {
      (
        _user: string,
        _approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _user: string,
        _approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _user: string,
        _approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _user: string,
        _approved: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_pool_address: {
      (_pool_address: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _pool_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        _pool_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _pool_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_tranche_enabled: {
      (
        _level: number | BN | string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _level: number | BN | string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _level: number | BN | string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _level: number | BN | string,
        _enabled: boolean,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_tranche_id_amounts: {
      (
        _level: number | BN | string,
        _id: number | BN | string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _level: number | BN | string,
        _id: number | BN | string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _level: number | BN | string,
        _id: number | BN | string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _level: number | BN | string,
        _id: number | BN | string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_tranche_uri: {
      (
        _level: number | BN | string,
        _uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _level: number | BN | string,
        _uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _level: number | BN | string,
        _uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _level: number | BN | string,
        _uri: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    set_user_tranche_level: {
      (
        _level: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _level: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<BN>;
      sendTransaction(
        _level: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _level: number | BN | string,
        _user: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    supportsInterface(
      interfaceId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    unpause: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    uri(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
