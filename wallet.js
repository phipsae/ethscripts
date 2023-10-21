import { ethers } from "ethers";
import "dotenv/config";

//Ethers version 5.7.2 --> with 6.X problem with HDWallet.fromMnemonic
// creates a random wallet with a mnemonic
const wallet = ethers.Wallet.createRandom();

console.log("Address:", wallet.address);
console.log("Private key:", wallet.privateKey);
console.log("Mnemoni:", wallet.mnemonic);
// console.log("A wallet params:", wallet);

// shows the first 10 accounts in the wallet
// a specific account can be brought in into metamask with the private key
for (let i = 0; i < 10; i++) {
  const path = `${wallet.mnemonic.path.slice(0, -1)}${i}`;
  const myWallet = ethers.Wallet.fromMnemonic(wallet.mnemonic.phrase, path);
  console.log(`----${i}----`);
  console.log("Address is: ", myWallet.address);
  console.log("Private Key is: ", myWallet.privateKey);
}

// create an ethers.js wallet with a private key, randomly generated with createrandomwallet
const walletWithPrivateKey = new ethers.Wallet(process.env.PRIVATE_KEY);
console.log("---------");
console.log("My wallet address is:", walletWithPrivateKey.address);
