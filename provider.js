import { ethers } from "ethers";
import "dotenv/config";

const alchemyUrlMainnet = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;

const provider = new ethers.providers.JsonRpcProvider(alchemyUrlMainnet);

// or specify it
// new AlchemyProvider(network?: Networkish, apiKey?: null | string)

// BlockNumber
console.log("blocknumber", await provider.getBlockNumber());

// ENS name
console.log(
  "ens Name phipsae.eth has the following address:",
  await provider.resolveName("phipsae.eth")
);

console.log(
  "Give me the ENS name of following address: 0x8Cc9eBA14ee4dD839987C64750B4117117A7AbFC",
  await provider.lookupAddress("0x8Cc9eBA14ee4dD839987C64750B4117117A7AbFC")
);

// Get balance & convert into ether
let balance = await provider.getBalance(
  "0x8Cc9eBA14ee4dD839987C64750B4117117A7AbFC"
);
console.log(
  "The eth balance of 0x8Cc9eBA14ee4dD839987C64750B4117117A7AbFC is:",
  ethers.utils.formatEther(balance)
);

// from ether to wei to paste to solidity
console.log("1.5 ether are in wei:", ethers.utils.parseEther("1.5"));

// add ether to my balance (only here in the terminal)
balance += ethers.utils.parseEther("5");
console.log(
  "balance of ochopocho + 5 ether",
  ethers.utils.formatEther(balance)
);
