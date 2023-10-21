import { ethers } from "ethers";
import "dotenv/config";

// have a function to determine if mainnet or testnet
const getProvider = (mainnet = false) => {
  const providerURL = mainnet
    ? `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
    : `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_SEPOLIA}`;

  return new ethers.providers.JsonRpcProvider(providerURL);
};

// console.log(await getProvider(false).getBlockNumber());

// connected to MetaMask 3 Account to sign transactions
const getSigner = (mainnet = false) => {
  const provider = getProvider(mainnet);
  return new ethers.Wallet(process.env.PRIVATE_KEY_METAMASK3, provider);
};

// console.log(getSigner());

export { getProvider, getSigner };
