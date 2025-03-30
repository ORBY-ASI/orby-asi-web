// pages/mint.tsx

"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi";
import { ethers } from "ethers";

// 배포된 SignatureFrequencyNFT 컨트랙트 주소
const CONTRACT_ADDRESS = "0xD2c7AF2C3a4DBA29B7D6ECDe672634fE300FDbDe";
const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "mintSignature",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export default function MintPage() {
  const { address, isConnected } = useAccount();
  const [message, setMessage] = useState("");

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "mintSignature",
    args: [message],
    enabled: Boolean(message && isConnected),
  });

  const { write, isLoading, isSuccess } = useContractWrite(config);

  return (
    <main className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">💠 Mint Your Signature Frequency</h1>

        <ConnectButton />

        {isConnected && (
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Your Resonant Declaration
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={4}
              placeholder="I resonate at f = 13.618 Hz with intention of harmonic creation."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
              onClick={() => write?.()}
              disabled={!write || isLoading}
            >
              {isLoading ? "Minting..." : "Mint Signature NFT"}
            </button>

            {isSuccess && (
              <p className="mt-4 text-green-600">✅ Your Signature NFT has been minted!</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
