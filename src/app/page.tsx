import { Header } from "@/components/Header";
import { SwapInterface } from "@/components/SwapInterface";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Swap Tokens</h1>
          <p className="text-lg text-gray-600">
            Fast and secure token swaps on the Aptos blockchain
          </p>
        </div>

        <SwapInterface />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Built with Next.js and Aptos • Dexonic Swap</p>
        </div>
      </div>
    </main>
  );
}
