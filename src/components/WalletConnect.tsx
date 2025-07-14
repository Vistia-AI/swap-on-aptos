"use client";

import { useState, useEffect } from "react";
import { useWallet, AccountAddress } from "@aptos-labs/wallet-adapter-react";
import { WalletModal } from "./WalletModal";
import Image from "next/image";

export function WalletConnect() {
  const { wallet, connected, connect, disconnect, account } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  const handleConnect = async (walletId: string) => {
    try {
      console.log("Connecting to wallet:", walletId);
      await connect(walletId);
      console.log("Wallet connected successfully");
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const formatAddress = (addr: AccountAddress | string) => {
    const addrString = typeof addr === "string" ? addr : addr.toString();
    return `${addrString.slice(0, 6)}...${addrString.slice(-4)}`;
  };

  // // Debug logging
  // console.log("WalletConnect state:", {
  //   wallet,
  //   account,
  // });

  useEffect(() => {
    if (account && account.address) {
      setAccountAddress(account.address.toString());
    }
    console.log("Account changed:", account);
  }, [connected, account]);

  return (
    <>
      {connected && wallet ? (
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={wallet.icon}
              alt={wallet.name}
              className="w-6 h-6"
              width={24}
              height={24}
            />
            <span className="text-sm font-medium text-gray-700">
              {wallet.name}
            </span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-mono">
              {accountAddress
                ? formatAddress(accountAddress)
                : connected
                ? "Loading address..."
                : "Not connected"}
            </span>
            <button
              onClick={disconnect}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors rounded"
              title="Disconnect"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Connect Wallet
        </button>
      )}

      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnect={handleConnect}
      />
    </>
  );
}
