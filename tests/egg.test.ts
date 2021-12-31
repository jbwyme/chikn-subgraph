import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { clearStore, test, assert } from "matchstick-as/assembly/index";
import { Minted } from "../generated/Egg/Egg";
import { Chikn, User } from "../generated/schema";
import { handleClaimEggs } from "../src/egg";
import {
  defaultAddress,
  defaultBigInt,
  defaultBlock,
  defaultOwnerAddress,
  defaultTransaction,
  NOW,
  setBaseGraphState,
} from "./fixtures";

test("handleClaimEgg", () => {
  // setup initial graph state
  setBaseGraphState();

  // call the handler
  const pOwner = new ethereum.EventParam(
    "owner",
    ethereum.Value.fromAddress(defaultOwnerAddress)
  );
  const pEggsAmount = new ethereum.EventParam(
    "eggsAmt",
    ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(1))
  );
  handleClaimEggs(
    new Minted(
      defaultAddress,
      defaultBigInt,
      defaultBigInt,
      null,
      defaultBlock,
      defaultTransaction,
      [pOwner, pEggsAmount]
    )
  );

  // assert lastClaimedEgg was properly set
  const owner = User.load(defaultOwnerAddress.toHexString());
  assert.i32Equals(owner!.chikns.length, 2);
  for (let i = 0; i < owner!.chikns.length; i++) {
    const chiknId = owner!.chikns[i];
    const chikn = Chikn.load(chiknId);
    assert.bigIntEquals(chikn!.lastClaimedEgg!, NOW);
  }

  // reset store to empty state
  clearStore();
});
