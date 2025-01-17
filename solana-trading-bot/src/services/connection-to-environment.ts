import { clusterApiUrl, Connection,PublicKey } from "@solana/web3.js";
import dotenv from 'dotenv';
dotenv.config();
(async () => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const publicKey = process.env.SOLANA_TEST_ACCOUNT_PUBLIC_KEY
  if (publicKey){
      const balance = await connection.getBalance(new PublicKey(publicKey))
      console.log(balance)
  }
})();