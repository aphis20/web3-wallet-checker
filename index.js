import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

// Define the Infura URL with your API key
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
const walletAddress = process.env.WALLET_ADDRESS;

async function getWalletInfo() {
  try {
    // Fetch the balance of the wallet
    const balance = await provider.getBalance(walletAddress);
    
    // Fetch the current gas price
    const gasPrice = await provider.getGasPrice();  // Ensure this line is correct

    // Format the balance in Ether and log it
    console.log(`💰 Balance: ${ethers.formatEther(balance)} ETH`);
    
    // Format the gas price in Gwei and log it
    console.log(`⛽ Gas Price: ${ethers.formatUnits(gasPrice, 'gwei')} GWEI`);
  } catch (err) {
    console.error("⚠️ Error fetching wallet info:", err);
  }
}

// Call the function to get wallet info
getWalletInfo();
