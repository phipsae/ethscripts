import { ethers } from "ethers";
import "dotenv/config";
import { getProvider, getSigner } from "./utils.js";
import factoryABI from "./abi/factoryABI.js";
import contractABI from "./abi/contractABI.js";

const factoryAddress = "0x64E672EaaD69eEDE01a25b38c8B7021A9Ca9672F";
// const newContractAddress = "0x61016b08095217C3ee88E0Cb82c8A015BfA6a78b";

const contract = new ethers.Contract(factoryAddress, factoryABI, getSigner());

const tx = await contract.createContract();
console.log("Create a contract...", tx.hash);

await tx.wait();

console.log("contract created");

const deployedContractAddress = await contract.deployedContract();
console.log(deployedContractAddress);

// access new deployed contract
const newContract = new ethers.Contract(
  deployedContractAddress,
  contractABI,
  getSigner()
);

const callDataIncrement = "0x5b34b966";

console.log(
  "Counter number of newly created contract:",
  Number(await newContract.counter())
);

// call the increment function directly
// const tx2 = await newContract.incrementCounter();
// console.log("Wait for the tx to go through", tx2.hash);

// instead of calling the function on the contract just send a trx to the network, result should be the same

const tx2 = await getSigner().sendTransaction({
  to: deployedContractAddress,
  data: callDataIncrement,
});
console.log("Wait for the tx to go through", tx2.hash);

await tx2.wait();

console.log(
  "Counter Number AFTER Incrementing:",
  Number(await newContract.counter())
);
