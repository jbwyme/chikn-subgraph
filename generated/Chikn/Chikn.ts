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

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class GBERC20Checked extends ethereum.Event {
  get params(): GBERC20Checked__Params {
    return new GBERC20Checked__Params(this);
  }
}

export class GBERC20Checked__Params {
  _event: GBERC20Checked;

  constructor(event: GBERC20Checked) {
    this._event = event;
  }

  get _holder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _bal(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _result(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class PurchaseEvent extends ethereum.Event {
  get params(): PurchaseEvent__Params {
    return new PurchaseEvent__Params(this);
  }
}

export class PurchaseEvent__Params {
  _event: PurchaseEvent;

  constructor(event: PurchaseEvent) {
    this._event = event;
  }

  get chiknNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SaleToggle extends ethereum.Event {
  get params(): SaleToggle__Params {
    return new SaleToggle__Params(this);
  }
}

export class SaleToggle__Params {
  _event: SaleToggle;

  constructor(event: SaleToggle) {
    this._event = event;
  }

  get chiknNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get isForSale(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Chikn__allChickenRunResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: boolean,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class Chikn extends ethereum.SmartContract {
  static bind(address: Address): Chikn {
    return new Chikn("Chikn", address);
  }

  GB_erc20_contract(): Address {
    let result = super.call(
      "GB_erc20_contract",
      "GB_erc20_contract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_GB_erc20_contract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "GB_erc20_contract",
      "GB_erc20_contract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allChickenRun(chiknId: BigInt): Chikn__allChickenRunResult {
    let result = super.call(
      "allChickenRun",
      "allChickenRun(uint256):(uint256,address,address,uint256,uint256,uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(chiknId)]
    );

    return new Chikn__allChickenRunResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toBigInt()
    );
  }

  try_allChickenRun(
    chiknId: BigInt
  ): ethereum.CallResult<Chikn__allChickenRunResult> {
    let result = super.tryCall(
      "allChickenRun",
      "allChickenRun(uint256):(uint256,address,address,uint256,uint256,uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(chiknId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Chikn__allChickenRunResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toBigInt()
      )
    );
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

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURL(): string {
    let result = super.call("baseURL", "baseURL():(string)", []);

    return result[0].toString();
  }

  try_baseURL(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURL", "baseURL():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  excludedList(param0: Address): boolean {
    let result = super.call("excludedList", "excludedList(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_excludedList(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("excludedList", "excludedList(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  gbHoldersMaxMint(): BigInt {
    let result = super.call(
      "gbHoldersMaxMint",
      "gbHoldersMaxMint():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_gbHoldersMaxMint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "gbHoldersMaxMint",
      "gbHoldersMaxMint():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gbTotalSupply(): BigInt {
    let result = super.call("gbTotalSupply", "gbTotalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_gbTotalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "gbTotalSupply",
      "gbTotalSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gbholders(param0: Address): boolean {
    let result = super.call("gbholders", "gbholders(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_gbholders(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("gbholders", "gbholders(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAllSaleTokens(): Array<BigInt> {
    let result = super.call(
      "getAllSaleTokens",
      "getAllSaleTokens():(uint256[])",
      []
    );

    return result[0].toBigIntArray();
  }

  try_getAllSaleTokens(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getAllSaleTokens",
      "getAllSaleTokens():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mintFeeAmount(): BigInt {
    let result = super.call("mintFeeAmount", "mintFeeAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_mintFeeAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintFeeAmount",
      "mintFeeAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  openForGB(): boolean {
    let result = super.call("openForGB", "openForGB():(bool)", []);

    return result[0].toBoolean();
  }

  try_openForGB(): ethereum.CallResult<boolean> {
    let result = super.tryCall("openForGB", "openForGB():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  openForPublic(): boolean {
    let result = super.call("openForPublic", "openForPublic():(bool)", []);

    return result[0].toBoolean();
  }

  try_openForPublic(): ethereum.CallResult<boolean> {
    let result = super.tryCall("openForPublic", "openForPublic():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  royaltyPercentage(): BigInt {
    let result = super.call(
      "royaltyPercentage",
      "royaltyPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_royaltyPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "royaltyPercentage",
      "royaltyPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BuyTokenCall extends ethereum.Call {
  get inputs(): BuyTokenCall__Inputs {
    return new BuyTokenCall__Inputs(this);
  }

  get outputs(): BuyTokenCall__Outputs {
    return new BuyTokenCall__Outputs(this);
  }
}

export class BuyTokenCall__Inputs {
  _call: BuyTokenCall;

  constructor(call: BuyTokenCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyTokenCall__Outputs {
  _call: BuyTokenCall;

  constructor(call: BuyTokenCall) {
    this._call = call;
  }
}

export class ChangeUrlCall extends ethereum.Call {
  get inputs(): ChangeUrlCall__Inputs {
    return new ChangeUrlCall__Inputs(this);
  }

  get outputs(): ChangeUrlCall__Outputs {
    return new ChangeUrlCall__Outputs(this);
  }
}

export class ChangeUrlCall__Inputs {
  _call: ChangeUrlCall;

  constructor(call: ChangeUrlCall) {
    this._call = call;
  }

  get url(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ChangeUrlCall__Outputs {
  _call: ChangeUrlCall;

  constructor(call: ChangeUrlCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _contractOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _royaltyReceiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _royaltyPercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _mintFeeAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _baseURL(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _gbContractAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _openForGB(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }

  get _openForPublic(): boolean {
    return this._call.inputValues[7].value.toBoolean();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get numberOfToken(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetKgCall extends ethereum.Call {
  get inputs(): SetKgCall__Inputs {
    return new SetKgCall__Inputs(this);
  }

  get outputs(): SetKgCall__Outputs {
    return new SetKgCall__Outputs(this);
  }
}

export class SetKgCall__Inputs {
  _call: SetKgCall;

  constructor(call: SetKgCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newKg(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetKgCall__Outputs {
  _call: SetKgCall;

  constructor(call: SetKgCall) {
    this._call = call;
  }
}

export class SetPriceForSaleCall extends ethereum.Call {
  get inputs(): SetPriceForSaleCall__Inputs {
    return new SetPriceForSaleCall__Inputs(this);
  }

  get outputs(): SetPriceForSaleCall__Outputs {
    return new SetPriceForSaleCall__Outputs(this);
  }
}

export class SetPriceForSaleCall__Inputs {
  _call: SetPriceForSaleCall;

  constructor(call: SetPriceForSaleCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newPrice(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get isForSale(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetPriceForSaleCall__Outputs {
  _call: SetPriceForSaleCall;

  constructor(call: SetPriceForSaleCall) {
    this._call = call;
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

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}
