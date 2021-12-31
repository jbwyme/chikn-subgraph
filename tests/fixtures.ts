// import {
//   JSONValue,
//   JSONValueKind,
//   TypedMap,
// } from "@graphprotocol/graph-ts";

import {Address, BigInt, Bytes, ethereum, log} from "@graphprotocol/graph-ts";
import {Chikn, User} from "../generated/schema";

// const metadataJson = [
//   {
//     rarity: "nice",
//     rank: 4992,
//     token: 1,
//     head: "uniquehorn",
//     neck: "black bandana",
//     torso: "",
//     feet: "red vans",
//     tail: "",
//     body: "mutant purple",
//     trim: "",
//     background: "vermillion",
//     filename: "4b44d5cfd8b6bbd5d02c939c9582b15a1acdcbbe.jpeg",
//     numberOfTraits: 5,
//   },
//   {
//     background: "?",
//     body: "?",
//     feet: "?",
//     filename: "Chikn_Unique_TheKernel.jpg",
//     head: "?",
//     neck: "?",
//     numberOfTraits: 8,
//     rank: "?",
//     rarity: "unique",
//     tail: "?",
//     token: 10000,
//     torso: "?",
//     trim: "?",
//   },
// ];

// const metadata = [];
// for(let i = 0; i < metadataJson.length; i++) {
//   const entry = metadataJson[i];
//   const obj = new TypedMap<string, JSONValue>();
//   obj.set("background", createStringValue(entry.background));
//   obj.set("body", createStringValue(entry.body));
//   obj.set("feet", createStringValue(entry.feet));
//   obj.set("filename", createStringValue(entry.filename));
//   obj.set("head", createStringValue(entry.head));
//   obj.set("neck", createStringValue(entry.neck));
//   obj.set(
//     "numberOfTraits",
//     typeof entry.numberOfTraits == "string"
//       ? createStringValue(entry.numberOfTraits)
//       : createIntegerValue(entry.numberOfTraits)
//   );
//   obj.set(
//     "rank",
//     typeof entry.rank == "string"
//       ? createStringValue(entry.rank)
//       : createIntegerValue(entry.rank)
//   );
//   obj.set("rarity", createStringValue(entry.rarity));
//   obj.set("tail", createStringValue(entry.tail));
//   obj.set("token", createIntegerValue(entry.token));
//   obj.set("torso", createStringValue(entry.torso));
//   obj.set("trim", createStringValue(entry.trim));
//   return obj;
// };

// function createStringValue(val: string): JSONValue {
//   const jsonVal = new JSONValue();
//   jsonVal.kind = JSONValueKind.STRING;
//   jsonVal.data = (val as unknown) as u64;
//   return jsonVal;
// }

// function createIntegerValue(val: number): JSONValue {
//   const jsonVal = new JSONValue();
//   jsonVal.kind = JSONValueKind.NUMBER;
//   jsonVal.data = (val as unknown) as u64;
//   return jsonVal;
// }


export const NOW = BigInt.fromI64(1640897965);
export const defaultAddress = Address.fromString("0xb28ae4bae361dbe59e4cd27646e5cae0038210f1")
export const defaultAddressBytes = defaultAddress as Bytes;
export const defaultBigInt = BigInt.fromI32(1);
export const defaultMinterAddress = Address.fromString("0x282f57d0f1b26cbba00753271d168562b751a0ba");
export const defaultOwnerAddress = Address.fromString("0xff8dd1bcdeed1bf3d914ca169e65f8aaf739d827")
export const chikn1Id = "1";
export const chikn2Id = "2";

export const defaultBlock = new ethereum.Block(
  defaultAddressBytes,
  defaultAddressBytes,
  defaultAddressBytes,
  defaultAddress,
  defaultAddressBytes,
  defaultAddressBytes,
  defaultAddressBytes,
  defaultBigInt,
  defaultBigInt,
  defaultBigInt,
  NOW,
  defaultBigInt,
  defaultBigInt,
  defaultBigInt,
  defaultBigInt
);

export const defaultTransaction = new ethereum.Transaction(
  defaultAddressBytes,
  defaultBigInt,
  defaultAddress,
  defaultAddress,
  defaultBigInt,
  defaultBigInt,
  defaultBigInt,
  defaultAddressBytes,
  defaultBigInt
);

export function setBaseGraphState(): void {
  createChikn(chikn1Id);
  createChikn(chikn2Id);
}

function createChikn(id: string): Chikn {
  const chikn = new Chikn(id);
  chikn.owner = defaultOwnerAddress.toHexString();
  chikn.creator = defaultMinterAddress.toHexString();
  chikn.background = "blue";
  chikn.body = "brown";
  chikn.contentURI = "blahblah.json";
  chikn.createdAtTimestamp = BigInt.fromI32(1640895710);
  chikn.feet = "human";
  chikn.forSale = false;
  chikn.head = "daft punk";
  chikn.numberOfTraits = 5;
  chikn.rank = 13;
  chikn.save();

  let owner = User.load(defaultOwnerAddress.toHexString());
  if (!owner) {
    log.info("No Owner record for {}, creating one...", [defaultOwnerAddress.toHexString()])
    owner = new User(defaultOwnerAddress.toHexString());
    owner.chikns = [];
  } else {
    log.info("Owner record found for {}", [defaultOwnerAddress.toHexString()])
  }
  const ownerChikns = owner.chikns.concat([id])
  owner.chikns = ownerChikns; // derived fields not support yet - see https://github.com/LimeChain/matchstick/issues/216
  owner.save();
  log.info("Chikn length is: {}", [owner.chikns.length.toString()])

  let minter = User.load(defaultMinterAddress.toHexString());
  if (!minter) {
    minter = new User(defaultMinterAddress.toHexString());
    minter.chikns = [];
  }
  const minterChikns = minter.chikns.concat([id])
  minter.chikns = minterChikns; // derived fields not support yet - see https://github.com/LimeChain/matchstick/issues/216
  minter.save();

  chikn.save();

  return chikn;
}
