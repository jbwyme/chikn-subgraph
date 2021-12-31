import { BigInt, ethereum, log } from "@graphprotocol/graph-ts";
import {
  Egg as EggContract,
  Minted,
  Burned,
  Staked,
  UnStaked,
  LevelUpChiknCall,
} from "../generated/Egg/Egg";
import { Chikn, User } from "../generated/schema";

export function handleClaimEggs(event: Minted): void {
  const ownerAddress = event.params.owner;
  if (!ownerAddress) {
    throw new Error("Owner address was null when claiming eggs");
  }
  let owner = User.load(ownerAddress.toHexString());
  if (!owner) {
    // this is an edge case when devs did original egg mint
    log.warning("No Owner object found for address {} when claiming egg", [ownerAddress.toHexString()]);
    owner = new User(ownerAddress.toHexString());
    owner.save();
  }

  log.info("Owner {} claimed {} egg", [ownerAddress.toHexString(), event.params.eggsAmt.toString()]);

  for (let i = 0; i < owner.chikns.length; i++) {
    const chiknId = owner.chikns[i];
    const chikn = Chikn.load(chiknId);
    if (!chikn) {
      throw new Error("No Chikn object found for chiknId " + chiknId + "when claiming eggs")
    }
    chikn.lastClaimedEgg = event.block.timestamp;
    chikn.save();
  };
}

export function handleBurned(event: Burned): void {}

export function handleRoost(event: Staked): void {}

export function handleUnRoost(event: UnStaked): void {}

export function handleBlock(block: ethereum.Block): void {
  // let id = block.hash.toHex()
}
