import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { clearStore, test, assert } from "matchstick-as/assembly/index";
import { Transfer } from "../generated/Chikn/Chikn";
import { Chikn } from "../generated/schema";
import { handleTransfer } from "../src/chikn";
import {
  chikn1Id,
  defaultAddress,
  defaultBigInt,
  defaultBlock,
  defaultOwnerAddress,
  defaultTransaction,
  setBaseGraphState,
} from "./fixtures";


test("handleTransfer", () => {

  // // setup initial graph state
  // setBaseGraphState();s

  // // setup a new owner
  // const newOwnerAddress = Address.fromString(
  //   "0x282f57d0f1b26cbba00753271d168562b751a0ba"
  // );

  // // mark for sale
  // let chikn1 = Chikn.load(chikn1Id);
  // chikn1!.forSale = true;
  // chikn1!.save();

  // // call the handler
  // const pFrom = new ethereum.EventParam(
  //   "from",
  //   ethereum.Value.fromAddress(defaultOwnerAddress)
  // );
  // const pTo = new ethereum.EventParam(
  //   "to",
  //   ethereum.Value.fromAddress(newOwnerAddress)
  // );
  // const pTokenId = new ethereum.EventParam(
  //   "tokenId",
  //   ethereum.Value.fromUnsignedBigInt(BigInt.fromString(chikn1Id))
  // );

  // const transaction = defaultTransaction;
  // transaction.value = BigInt.fromI32(12345);

  // handleTransfer(
  //   new Transfer(
  //     defaultAddress,
  //     defaultBigInt,
  //     defaultBigInt,
  //     null,
  //     defaultBlock,
  //     defaultTransaction,
  //     [pFrom, pTo, pTokenId]
  //   )
  // );

  // // assert fields properly updated
  // chikn1 = Chikn.load(chikn1Id);
  // assert.booleanEquals(chikn1!.forSale, false);
  // assert.stringEquals(chikn1!.owner, newOwnerAddress.toHexString());
  // assert.bigIntEquals(chikn1!.lastSalePrice!, BigInt.fromI32(12345));

  // // reset store to empty state
  // clearStore();
});
