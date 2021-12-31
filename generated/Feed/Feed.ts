// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Burned extends ethereum.Event {
  get params(): Burned__Params {
    return new Burned__Params(this);
  }
}

export class Burned__Params {
  _event: Burned;

  constructor(event: Burned) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfFeed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BurnedEgg extends ethereum.Event {
  get params(): BurnedEgg__Params {
    return new BurnedEgg__Params(this);
  }
}

export class BurnedEgg__Params {
  _event: BurnedEgg;

  constructor(event: BurnedEgg) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfEggs(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EggStaked extends ethereum.Event {
  get params(): EggStaked__Params {
    return new EggStaked__Params(this);
  }
}

export class EggStaked__Params {
  _event: EggStaked;

  constructor(event: EggStaked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EggSwap extends ethereum.Event {
  get params(): EggSwap__Params {
    return new EggSwap__Params(this);
  }
}

export class EggSwap__Params {
  _event: EggSwap;

  constructor(event: EggSwap) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfFeed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EggUnStaked extends ethereum.Event {
  get params(): EggUnStaked__Params {
    return new EggUnStaked__Params(this);
  }
}

export class EggUnStaked__Params {
  _event: EggUnStaked;

  constructor(event: EggUnStaked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Minted extends ethereum.Event {
  get params(): Minted__Params {
    return new Minted__Params(this);
  }
}

export class Minted__Params {
  _event: Minted;

  constructor(event: Minted) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfFeed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintedEgg extends ethereum.Event {
  get params(): MintedEgg__Params {
    return new MintedEgg__Params(this);
  }
}

export class MintedEgg__Params {
  _event: MintedEgg;

  constructor(event: MintedEgg) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfFeed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class StakedEgg extends ethereum.Event {
  get params(): StakedEgg__Params {
    return new StakedEgg__Params(this);
  }
}

export class StakedEgg__Params {
  _event: StakedEgg;

  constructor(event: StakedEgg) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfEggs(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UnstakedEgg extends ethereum.Event {
  get params(): UnstakedEgg__Params {
    return new UnstakedEgg__Params(this);
  }
}

export class UnstakedEgg__Params {
  _event: UnstakedEgg;

  constructor(event: UnstakedEgg) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get numberOfEggs(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Feed__eggStakeHoldersResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Feed extends ethereum.SmartContract {
  static bind(address: Address): Feed {
    return new Feed("Feed", address);
  }

  BOOSTER_MULTIPLIER(): BigInt {
    let result = super.call(
      "BOOSTER_MULTIPLIER",
      "BOOSTER_MULTIPLIER():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_BOOSTER_MULTIPLIER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BOOSTER_MULTIPLIER",
      "BOOSTER_MULTIPLIER():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  CHIKN_CONTRACT(): Address {
    let result = super.call("CHIKN_CONTRACT", "CHIKN_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_CHIKN_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "CHIKN_CONTRACT",
      "CHIKN_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  EGG_CONTRACT(): Address {
    let result = super.call("EGG_CONTRACT", "EGG_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_EGG_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall("EGG_CONTRACT", "EGG_CONTRACT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  FEED_FARMING_FACTOR(): BigInt {
    let result = super.call(
      "FEED_FARMING_FACTOR",
      "FEED_FARMING_FACTOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_FEED_FARMING_FACTOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FEED_FARMING_FACTOR",
      "FEED_FARMING_FACTOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  FEED_SWAP_FACTOR(): BigInt {
    let result = super.call(
      "FEED_SWAP_FACTOR",
      "FEED_SWAP_FACTOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_FEED_SWAP_FACTOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "FEED_SWAP_FACTOR",
      "FEED_SWAP_FACTOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_FEED_SUPPLY(): BigInt {
    let result = super.call(
      "MAX_FEED_SUPPLY",
      "MAX_FEED_SUPPLY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_FEED_SUPPLY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_FEED_SUPPLY",
      "MAX_FEED_SUPPLY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _allEggsStakeHolders(param0: BigInt): Address {
    let result = super.call(
      "_allEggsStakeHolders",
      "_allEggsStakeHolders(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try__allEggsStakeHolders(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_allEggsStakeHolders",
      "_allEggsStakeHolders(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  authorized(param0: Address): boolean {
    let result = super.call("authorized", "authorized(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_authorized(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("authorized", "authorized(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimableView(user: Address): BigInt {
    let result = super.call(
      "claimableView",
      "claimableView(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_claimableView(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimableView",
      "claimableView(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  eggStakeHolders(param0: Address): Feed__eggStakeHoldersResult {
    let result = super.call(
      "eggStakeHolders",
      "eggStakeHolders(address):(address,uint32,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Feed__eggStakeHoldersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_eggStakeHolders(
    param0: Address
  ): ethereum.CallResult<Feed__eggStakeHoldersResult> {
    let result = super.tryCall(
      "eggStakeHolders",
      "eggStakeHolders(address):(address,uint32,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Feed__eggStakeHoldersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalEggHolder(): BigInt {
    let result = super.call("totalEggHolder", "totalEggHolder():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalEggHolder(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEggHolder",
      "totalEggHolder():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalEggStaked(): BigInt {
    let result = super.call("totalEggStaked", "totalEggStaked():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalEggStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalEggStaked",
      "totalEggStaked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _chiknContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _eggContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAuthorizedCall extends ethereum.Call {
  get inputs(): AddAuthorizedCall__Inputs {
    return new AddAuthorizedCall__Inputs(this);
  }

  get outputs(): AddAuthorizedCall__Outputs {
    return new AddAuthorizedCall__Outputs(this);
  }
}

export class AddAuthorizedCall__Inputs {
  _call: AddAuthorizedCall;

  constructor(call: AddAuthorizedCall) {
    this._call = call;
  }

  get _toAdd(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAuthorizedCall__Outputs {
  _call: AddAuthorizedCall;

  constructor(call: AddAuthorizedCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ClaimFeedCall extends ethereum.Call {
  get inputs(): ClaimFeedCall__Inputs {
    return new ClaimFeedCall__Inputs(this);
  }

  get outputs(): ClaimFeedCall__Outputs {
    return new ClaimFeedCall__Outputs(this);
  }
}

export class ClaimFeedCall__Inputs {
  _call: ClaimFeedCall;

  constructor(call: ClaimFeedCall) {
    this._call = call;
  }
}

export class ClaimFeedCall__Outputs {
  _call: ClaimFeedCall;

  constructor(call: ClaimFeedCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class FeedChiknCall extends ethereum.Call {
  get inputs(): FeedChiknCall__Inputs {
    return new FeedChiknCall__Inputs(this);
  }

  get outputs(): FeedChiknCall__Outputs {
    return new FeedChiknCall__Outputs(this);
  }
}

export class FeedChiknCall__Inputs {
  _call: FeedChiknCall;

  constructor(call: FeedChiknCall) {
    this._call = call;
  }

  get chiknId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FeedChiknCall__Outputs {
  _call: FeedChiknCall;

  constructor(call: FeedChiknCall) {
    this._call = call;
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class MintFeedCall extends ethereum.Call {
  get inputs(): MintFeedCall__Inputs {
    return new MintFeedCall__Inputs(this);
  }

  get outputs(): MintFeedCall__Outputs {
    return new MintFeedCall__Outputs(this);
  }
}

export class MintFeedCall__Inputs {
  _call: MintFeedCall;

  constructor(call: MintFeedCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintFeedCall__Outputs {
  _call: MintFeedCall;

  constructor(call: MintFeedCall) {
    this._call = call;
  }
}

export class RebalanceStakingPoolCall extends ethereum.Call {
  get inputs(): RebalanceStakingPoolCall__Inputs {
    return new RebalanceStakingPoolCall__Inputs(this);
  }

  get outputs(): RebalanceStakingPoolCall__Outputs {
    return new RebalanceStakingPoolCall__Outputs(this);
  }
}

export class RebalanceStakingPoolCall__Inputs {
  _call: RebalanceStakingPoolCall;

  constructor(call: RebalanceStakingPoolCall) {
    this._call = call;
  }

  get from(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get to(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RebalanceStakingPoolCall__Outputs {
  _call: RebalanceStakingPoolCall;

  constructor(call: RebalanceStakingPoolCall) {
    this._call = call;
  }
}

export class RemoveAuthorizedCall extends ethereum.Call {
  get inputs(): RemoveAuthorizedCall__Inputs {
    return new RemoveAuthorizedCall__Inputs(this);
  }

  get outputs(): RemoveAuthorizedCall__Outputs {
    return new RemoveAuthorizedCall__Outputs(this);
  }
}

export class RemoveAuthorizedCall__Inputs {
  _call: RemoveAuthorizedCall;

  constructor(call: RemoveAuthorizedCall) {
    this._call = call;
  }

  get _toRemove(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAuthorizedCall__Outputs {
  _call: RemoveAuthorizedCall;

  constructor(call: RemoveAuthorizedCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class StakingCall extends ethereum.Call {
  get inputs(): StakingCall__Inputs {
    return new StakingCall__Inputs(this);
  }

  get outputs(): StakingCall__Outputs {
    return new StakingCall__Outputs(this);
  }
}

export class StakingCall__Inputs {
  _call: StakingCall;

  constructor(call: StakingCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakingCall__Outputs {
  _call: StakingCall;

  constructor(call: StakingCall) {
    this._call = call;
  }
}

export class SwapEggForFeedCall extends ethereum.Call {
  get inputs(): SwapEggForFeedCall__Inputs {
    return new SwapEggForFeedCall__Inputs(this);
  }

  get outputs(): SwapEggForFeedCall__Outputs {
    return new SwapEggForFeedCall__Outputs(this);
  }
}

export class SwapEggForFeedCall__Inputs {
  _call: SwapEggForFeedCall;

  constructor(call: SwapEggForFeedCall) {
    this._call = call;
  }

  get eggAmt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SwapEggForFeedCall__Outputs {
  _call: SwapEggForFeedCall;

  constructor(call: SwapEggForFeedCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBoosterMultiplierCall extends ethereum.Call {
  get inputs(): UpdateBoosterMultiplierCall__Inputs {
    return new UpdateBoosterMultiplierCall__Inputs(this);
  }

  get outputs(): UpdateBoosterMultiplierCall__Outputs {
    return new UpdateBoosterMultiplierCall__Outputs(this);
  }
}

export class UpdateBoosterMultiplierCall__Inputs {
  _call: UpdateBoosterMultiplierCall;

  constructor(call: UpdateBoosterMultiplierCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateBoosterMultiplierCall__Outputs {
  _call: UpdateBoosterMultiplierCall;

  constructor(call: UpdateBoosterMultiplierCall) {
    this._call = call;
  }
}

export class UpdateFarmingFactorCall extends ethereum.Call {
  get inputs(): UpdateFarmingFactorCall__Inputs {
    return new UpdateFarmingFactorCall__Inputs(this);
  }

  get outputs(): UpdateFarmingFactorCall__Outputs {
    return new UpdateFarmingFactorCall__Outputs(this);
  }
}

export class UpdateFarmingFactorCall__Inputs {
  _call: UpdateFarmingFactorCall;

  constructor(call: UpdateFarmingFactorCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateFarmingFactorCall__Outputs {
  _call: UpdateFarmingFactorCall;

  constructor(call: UpdateFarmingFactorCall) {
    this._call = call;
  }
}

export class UpdateFeedSwapFactorCall extends ethereum.Call {
  get inputs(): UpdateFeedSwapFactorCall__Inputs {
    return new UpdateFeedSwapFactorCall__Inputs(this);
  }

  get outputs(): UpdateFeedSwapFactorCall__Outputs {
    return new UpdateFeedSwapFactorCall__Outputs(this);
  }
}

export class UpdateFeedSwapFactorCall__Inputs {
  _call: UpdateFeedSwapFactorCall;

  constructor(call: UpdateFeedSwapFactorCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateFeedSwapFactorCall__Outputs {
  _call: UpdateFeedSwapFactorCall;

  constructor(call: UpdateFeedSwapFactorCall) {
    this._call = call;
  }
}

export class UpdateMaxFeedSupplyCall extends ethereum.Call {
  get inputs(): UpdateMaxFeedSupplyCall__Inputs {
    return new UpdateMaxFeedSupplyCall__Inputs(this);
  }

  get outputs(): UpdateMaxFeedSupplyCall__Outputs {
    return new UpdateMaxFeedSupplyCall__Outputs(this);
  }
}

export class UpdateMaxFeedSupplyCall__Inputs {
  _call: UpdateMaxFeedSupplyCall;

  constructor(call: UpdateMaxFeedSupplyCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMaxFeedSupplyCall__Outputs {
  _call: UpdateMaxFeedSupplyCall;

  constructor(call: UpdateMaxFeedSupplyCall) {
    this._call = call;
  }
}

export class WithdrawAllEggAndClaimFeedCall extends ethereum.Call {
  get inputs(): WithdrawAllEggAndClaimFeedCall__Inputs {
    return new WithdrawAllEggAndClaimFeedCall__Inputs(this);
  }

  get outputs(): WithdrawAllEggAndClaimFeedCall__Outputs {
    return new WithdrawAllEggAndClaimFeedCall__Outputs(this);
  }
}

export class WithdrawAllEggAndClaimFeedCall__Inputs {
  _call: WithdrawAllEggAndClaimFeedCall;

  constructor(call: WithdrawAllEggAndClaimFeedCall) {
    this._call = call;
  }
}

export class WithdrawAllEggAndClaimFeedCall__Outputs {
  _call: WithdrawAllEggAndClaimFeedCall;

  constructor(call: WithdrawAllEggAndClaimFeedCall) {
    this._call = call;
  }
}

export class WithdrawEggCall extends ethereum.Call {
  get inputs(): WithdrawEggCall__Inputs {
    return new WithdrawEggCall__Inputs(this);
  }

  get outputs(): WithdrawEggCall__Outputs {
    return new WithdrawEggCall__Outputs(this);
  }
}

export class WithdrawEggCall__Inputs {
  _call: WithdrawEggCall;

  constructor(call: WithdrawEggCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawEggCall__Outputs {
  _call: WithdrawEggCall;

  constructor(call: WithdrawEggCall) {
    this._call = call;
  }
}