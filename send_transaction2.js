import { ethers } from "ethers";
import "dotenv/config";
import { getProvider, getSigner } from "./utils.js";

console.log(
  "Ether balance BEFORE TX ",
  ethers.utils.formatEther(await getProvider().getBalance(getSigner().address))
);

const tx = await getSigner().sendTransaction({
  to: "0xD042799bADfc032db4860b7Ee0fc28371332eBc2",
  value: ethers.utils.parseEther("0.001"),
});

console.log("Wait for TX:", tx.hash);
await tx.wait();

console.log(
  "Ether balance AFTER TX ",
  ethers.utils.formatEther(await getProvider().getBalance(getSigner().address))
);
