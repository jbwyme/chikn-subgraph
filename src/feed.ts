import { BigInt, ethereum, log } from "@graphprotocol/graph-ts";

import {
  Chikn as ChiknContract,
} from "../generated/Chikn/Chikn"

import {
  Feed as FeedContract,
  Minted,
  MintedEgg,
  Burned,
  BurnedEgg,
  StakedEgg,
  UnstakedEgg,
  EggSwap,
  EggStaked,
  EggUnStaked,
} from '../generated/Feed/Feed'

import {Chikn, User} from "../generated/schema";

export function handleClaimFeed(event: Minted): void {
    const ownerAddress = event.params.owner;
    if (!ownerAddress) {
      throw new Error("Owner address was null when claiming feed");
    }
    let owner = User.load(ownerAddress.toHexString());
    if (!owner) {
      // this is an edge case when devs did original feed mint
      log.warning("No Owner object found for address {} when claiming feed", [ownerAddress.toHexString()]);
      owner = new User(ownerAddress.toHexString());
      owner.save();
    }

    log.info("Owner {} claimed {} feed", [ownerAddress.toHexString(), event.params.numberOfFeed.toString()]);

    // const chiknContract = ChiknContract.bind(event.address);

    for (let i = 0; i < owner.chikns.length; i++) {
      const chiknId = owner.chikns[i];
      log.info("Updating info for Chikn {}", [chiknId]);
      // const results = chiknContract.allChickenRun(BigInt.fromString(chiknId));
      // const kg = results.value7

      const chikn = Chikn.load(chiknId);
      if (!chikn) {
        throw new Error("No Chikn object found for chiknId " + chiknId + "when claiming feed")
      }
      // chikn.kg = kg;
      chikn.lastClaimedFeed = event.block.timestamp;
      chikn.save();
    };
}

// export function handleMintedEgg(event: MintedEgg): void {

// }

// export function handleBurned(event: Burned): void {

// }

// export function handleBurnedEgg(event: BurnedEgg): void {

// }

// export function handleStakedEgg(event: StakedEgg): void {

// }

// export function handleUnStakedEgg(event: UnstakedEgg): void {

// }

// export function handleEggStaked(event: EggStaked): void {

// }

// export function handleEggUnStaked(event: EggUnStaked): void {

// }

// export function handleEggSwap(event: EggSwap): void {

// }
