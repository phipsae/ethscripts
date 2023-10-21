import { ethers } from "ethers";
import "dotenv/config";

const walletWithPrivateKey = new ethers.Wallet(process.env.PRIVATE_KEY);

// is the wallet a signer?
console.log("Is the wallet a signer?", walletWithPrivateKey._isSigner);

// This hasn't been connect to the internet or a provider, because we are interacting with a blockchain
// so the wallet can sign a TX
const signature = await walletWithPrivateKey.signMessage("Hola!");
console.log("The signature:", signature);

// proof that I signed a message with Hola!
const signerAddress = ethers.utils.verifyMessage("Hola!", signature);
console.log("That is the address which signed", signerAddress);
console.log("Thats the same like", walletWithPrivateKey.address);
