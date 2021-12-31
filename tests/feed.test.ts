import {
  BigInt,
  ethereum,
} from "@graphprotocol/graph-ts";
import { clearStore, test, assert } from "matchstick-as/assembly/index";
import { Minted } from "../generated/Feed/Feed";
import { Chikn, User } from "../generated/schema";
import { handleClaimFeed } from "../src/feed";
import {
  defaultAddress,
  defaultBigInt,
  defaultBlock,
  defaultOwnerAddress,
  defaultTransaction,
  NOW,
  setBaseGraphState,
} from "./fixtures";

test("handleClaimFeed", () => {
  // setup initial graph state
  setBaseGraphState();

  // call the handler
  const pOwner = new ethereum.EventParam(
    "owner",
    ethereum.Value.fromAddress(defaultOwnerAddress)
  );
  const pNumberOfFeed = new ethereum.EventParam(
    "numberOfFeed",
    ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(225))
  );
  handleClaimFeed(
    new Minted(
      defaultAddress,
      defaultBigInt,
      defaultBigInt,
      null,
      defaultBlock,
      defaultTransaction,
      [pOwner, pNumberOfFeed]
    )
  );

  // assert lastClaimedFeed was properly set
  const owner = User.load(defaultOwnerAddress.toHexString());
  assert.i32Equals(owner!.chikns.length, 2);
  for (let i = 0; i < owner!.chikns.length; i++) {
    const chiknId = owner!.chikns[i];
    const chikn = Chikn.load(chiknId);
    assert.bigIntEquals(chikn!.lastClaimedFeed!, NOW);
  }

  // reset store to empty state
  clearStore();
});
