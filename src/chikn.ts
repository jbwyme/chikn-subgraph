import { Bytes, ipfs, json, JSONValue, JSONValueKind, log, TypedMap } from '@graphprotocol/graph-ts'

import {
  Transfer as TransferEvent,
  Chikn as ChiknContract,
  SaleToggle,
} from "../generated/Chikn/Chikn"

import {
  Chikn, User, Transaction
} from '../generated/schema'

export function handleTransfer(event: TransferEvent): void {
  const chiknId = event.params.tokenId;
  let transaction = Transaction.load(event.transaction.hash.toHexString());
  if (!transaction) {
    transaction = new Transaction(event.transaction.hash.toHexString());
  }
  transaction.chikn = chiknId.toString();
  transaction.to = event.params.to.toHexString();
  transaction.from = event.params.from.toHexString();
  transaction.price = event.transaction.value;
  transaction.createdAtTimestamp = event.block.timestamp;

  transaction.save();

  let coq = Chikn.load(chiknId.toString());
  if (!coq) {
    coq = new Chikn(chiknId.toString());
    coq.creator = event.params.to.toHexString();
    coq.createdAtTimestamp = event.block.timestamp;

    let chiknContract = ChiknContract.bind(event.address);
    coq.name = chiknContract.name();

    const results = chiknContract.allChickenRun(chiknId);
    // const tokenId = results.value0;
    // const mintedBy = results.value1;
    // const currentOwner = results.value2;
    // const previousPrice = results.value3;
    // const price = results.value4;
    // const numberOfTransfers = results.value5;
    // const forSale = results.value6;
    coq.kg = results.value7;

    const attrs = getAttrsFromIPFS(coq);
    addAttributes(coq, attrs);
  }

  coq.forSale = false;
  coq.owner = event.params.to.toHexString();
  coq.lastSalePrice = event.transaction.value;

  coq.save();

  let prevOwner = User.load(event.params.from.toHexString());
  if (!prevOwner) {
    prevOwner = new User(event.params.from.toHexString());
    prevOwner.chikns = []
  }
  const remainingChikns = prevOwner.chikns.concat([]);
  remainingChikns.splice(prevOwner.chikns.indexOf(chiknId.toString()), 1);
  prevOwner.chikns = remainingChikns;
  prevOwner.save();

  let newOwner = User.load(event.params.to.toHexString());
  if (!newOwner) {
    newOwner = new User(event.params.to.toHexString());
    newOwner.chikns = [];
  }
  newOwner.chikns = newOwner.chikns.concat([chiknId.toString()])
  newOwner.save();
}

const hashBytes = ipfs.cat("QmXdup1XiMW5cyNtHf395oMu7ZKWxQaguZt2AZMLjLuV8C");
let hashes: JSONValue[] = []
if (hashBytes) {
  hashes = json.fromBytes(hashBytes as Bytes).toArray();
} else {
  log.info("Couldn't get hash registry", []);
}

function setStringAttribute(coq: Chikn, obj: TypedMap<string, JSONValue>, attribute: string, alias: string | null = null): void {
  log.info("attempting to set {} on coq {}", [attribute, coq.id])
  const val = obj.get(attribute);
  if (val) {
    log.info("Setting {} to {} on {}", [attribute, val.toString(), coq.id])
    coq.setString(alias ? alias : attribute, val.toString());
  }
}

function setIntAttribute(coq: Chikn, obj: TypedMap<string, JSONValue>, attribute: string, alias: string | null = null): void {
  log.info("attempting to set {} on coq {}", [attribute, coq.id])
  const val = obj.get(attribute);
  if (val) {
    let intVal: i32;
    if (val.kind == JSONValueKind.STRING) {
      // special case for unique coqs
      if (val.toString() == "?") {
        intVal = 0;
      } else {
        throw new Error("Got a string ('" + val.toString() + "') for '" + attribute + "' but expected an int");
      }
    } else {
      assert(val.kind == JSONValueKind.NUMBER, 'setNumTraitsIntAttribute on coq ' + coq.id +  ' + JSON value is not a number, it is ' + val.kind.toString())
      intVal = val.toI64() as i32;
    }
    log.info("Setting {} to {} on {}", [attribute, intVal.toString(), coq.id])
    coq.setI32(alias ? alias : attribute, intVal);
  }
}

function getAttrsFromIPFS(coq: Chikn): TypedMap<string, JSONValue> {
  const chiknId = parseInt(coq.id) as i32;
  const hash = hashes[chiknId - 1].toString();
  log.debug("loading chikn {} attrs from IPFS file: {}", [coq.id, hash]);
  const data = ipfs.cat(hash);
  if (data) {
    const val = json.fromBytes(data);
    assert(val.kind == JSONValueKind.OBJECT, "Chikn Attributes from IPFS was not type " + JSONValueKind.OBJECT.toString() + " (JSONValueKind.OBJECT), it was type " + val.kind.toString());
    return val.toObject();
  } else {
    throw new Error("Chikn attributes content was null from IPFS file " + hash);
  }
}

export function addAttributes(coq: Chikn, attrsObj: TypedMap<string, JSONValue>): void {
    setStringAttribute(coq, attrsObj, "background");
    setStringAttribute(coq, attrsObj, "body");
    setStringAttribute(coq, attrsObj, "feet");
    setStringAttribute(coq, attrsObj, "head");
    setStringAttribute(coq, attrsObj, "neck");
    setStringAttribute(coq, attrsObj, "tail");
    setStringAttribute(coq, attrsObj, "torso");
    setStringAttribute(coq, attrsObj, "trim");
    setStringAttribute(coq, attrsObj, "filename", "imageURI");
    setIntAttribute(coq, attrsObj, "numberOfTraits");
    setIntAttribute(coq, attrsObj, "rank");
    setStringAttribute(coq, attrsObj, "rarity");
}

export function handleSaleToggle(event: SaleToggle): void {
  const chiknId = event.params.chiknNumber;
  let coq = Chikn.load(chiknId.toString());
  if (!coq) {
    throw new Error("SaleToggle event received before Chikn was initialized");
  }
  coq.forSale = event.params.isForSale;
  coq.price = event.params.price;
  coq.save();
}
