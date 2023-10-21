import { ethers } from "ethers";
import "dotenv/config";
import { getProvider, getSigner } from "./utils.js";
import contractABI from "./abi/contractABI.js";

const factoryAddress = "0x64E672EaaD69eEDE01a25b38c8B7021A9Ca9672F";
const newContractAddress = "0x61016b08095217C3ee88E0Cb82c8A015BfA6a78b";

const contract = new ethers.Contract(
  newContractAddress,
  contractABI,
  getSigner()
);

const counter = await contract.counter();
console.log("Counter Number Before Incrementing:", Number(counter));

//you can only write when you swith to Signer, because you have to pay for it
const tx = await contract.incrementCounter();
console.log("Wait for the tx to go through");

await tx.wait();

console.log(
  "Counter Number AFTER Incrementing:",
  Number(await contract.counter())
);
