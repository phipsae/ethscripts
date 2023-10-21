import { ethers } from "ethers";
import "dotenv/config";
import { getProvider, getSigner } from "./utils.js";
import DAIABI from "./abi/DAIABI.js";
import priceFeedABI from "./abi/priceFeedABI.js";

const provider = getProvider(true);
const DAIaddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

// https://developer.makerdao.com/feeds/
const priceFeedContractAddress = "0x729D19f657BD0614b4985Cf1D82531c67569197B";

const DAIcontract = new ethers.Contract(DAIaddress, DAIABI, provider);
const priceFeedContract = new ethers.Contract(
  priceFeedContractAddress,
  priceFeedABI,
  provider
);

const priceOfETH = ethers.utils.formatEther(await priceFeedContract.read());
console.log(
  "The Ether price in dollars is: ",
  ethers.utils.formatEther(await priceFeedContract.read())
);

const phipsaeBalance = ethers.utils.formatEther(
  await provider.getBalance("phipsae.eth")
);

console.log("phipsae.eth Ether balance is: ", phipsaeBalance);

const dollars = phipsaeBalance * priceOfETH;
console.log("phipsae has ", Math.round(dollars), "in $");
