"use client";

import { WalletConnect } from "./WalletConnect";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="/dexonic.png"
                alt="Dexonic Swap"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Dexonic Swap</h1>
              <p className="text-sm text-gray-500">Fast & Secure Token Swaps</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Swap
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pool
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Analytics
            </a>
          </nav>

          {/* Wallet Connection Button - Ready for your implementation */}
          <div className="flex items-center gap-4">
            <WalletConnect />
          </div>
        </div>
      </div>
    </header>
  );
}
