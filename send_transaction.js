import { ethers } from "ethers";
import "dotenv/config";

const alchemyUrlSepolia = `https://eth-sepolia.g.alchemy.com/v2/qgOUV7StI-k0mYGvurV3inPTfiVxhGlU`;
// const alchemyUrlSepolia = `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY_SEPOLIA}`;

const provider = new ethers.providers.JsonRpcProvider(alchemyUrlSepolia);
const walletMetaMask = new ethers.Wallet(
  process.env.PRIVATE_KEY_METAMASK3,
  provider
);

// connnect the wallet to the provider
// walletMetaMask.connect(provider);
const myBalance = await provider.getBalance(walletMetaMask.address);

console.log(ethers.utils.formatEther(myBalance));

// send 0.001 eth to MetaMask 1
const tx = await walletMetaMask.sendTransaction({
  to: "0xD042799bADfc032db4860b7Ee0fc28371332eBc2",
  value: ethers.utils.parseEther("0.001"),
});

console.log(
  "Transaction sent! - waiting for confirmation / Sending ETH to 0xD042799bADfc032db4860b7Ee0fc28371332eBc2",
  tx
);
await tx.wait();

console.log("Transaction confirmed!");

console.log(
  "MetaMask1 Address:",
  ethers.utils.formatEther(
    await provider.getBalance("0xd042799badfc032db4860b7ee0fc28371332ebc2")
  )
);
console.log(
  "MetaMask3 Address:",
  ethers.utils.formatEther(await provider.getBalance(walletMetaMask.address))
);
