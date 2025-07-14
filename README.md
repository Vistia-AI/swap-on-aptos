# Dexonic Swap Frontend

A modern, user-friendly token swap interface built with Next.js for the Aptos blockchain, integrated with Pontem wallet for real transactions.

## Features

- 🔗 **Pontem Wallet Integration**: Connect your Pontem wallet to start swapping
- 🪙 **Token Selection**: Choose from popular tokens like APT, USDC, USDT, and WETH
- 💱 **Real-time Quotes**: Get live swap quotes with automatic rate calculation
- ⚡ **Fast & Responsive**: Built with Next.js 15 and Tailwind CSS for optimal performance
- 🔒 **Secure**: Real Aptos wallet integration with transaction signing
- 📊 **Swap Details**: View exchange rates, slippage, and minimum received amounts
- ⚠️ **Error Handling**: Comprehensive error handling for failed transactions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Pontem wallet browser extension

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd swap-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

Create a `.env.local` file in the root directory with:

```env
# Aptos Node URL (Mainnet)
NEXT_PUBLIC_APTOS_NODE_URL=https://fullnode.mainnet.aptoslabs.com/v1

# For testnet (optional)
# NEXT_PUBLIC_APTOS_NODE_URL=https://fullnode.testnet.aptoslabs.com/v1
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Connect Wallet**: Click "Connect Wallet" and select Pontem wallet
2. **Select Tokens**: Choose the tokens you want to swap from and to
3. **Enter Amount**: Input the amount you want to swap (quote will be fetched automatically)
4. **Review Details**: Check the exchange rate, slippage, and minimum received amount
5. **Confirm Swap**: Click "Swap" to execute the transaction through your wallet

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with wallet provider
│   ├── page.tsx           # Main swap interface page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Main header with wallet connection
│   ├── SwapInterface.tsx  # Main swap interface with real functionality
│   ├── TokenSelector.tsx  # Token selection dropdown
│   ├── WalletConnect.tsx  # Wallet connection component
│   └── WalletModal.tsx    # Wallet selection modal
├── lib/                   # Utility functions
│   ├── utils.ts           # Class name utilities
│   ├── wallet-utils.ts    # Wallet integration utilities
│   └── sign-txn.ts        # Transaction signing utilities
└── providers/             # Context providers
    └── index.tsx          # Aptos wallet adapter provider
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **@aptos-labs/wallet-adapter-react**: Official Aptos wallet adapter
- **@aptos-labs/ts-sdk**: Aptos TypeScript SDK for blockchain interaction
- **clsx & tailwind-merge**: Class name utilities

## Wallet Integration

This project uses the official Aptos Labs wallet adapter which supports:

- **Pontem Wallet**: Primary wallet integration
- **Petra Wallet**: Alternative wallet option
- **Martian Wallet**: Additional wallet option
- **Auto-connect**: Automatic wallet reconnection
- **Transaction Signing**: Real transaction signing and submission

## Swap Functionality

The swap interface includes:

- **Real-time Quotes**: Automatic quote fetching when tokens or amounts change
- **Balance Checking**: Verifies sufficient balance before swap
- **Token Registration**: Automatically registers tokens if needed
- **Slippage Protection**: Configurable slippage tolerance
- **Transaction Tracking**: Real transaction hashes and status
- **Error Handling**: Comprehensive error messages for failed operations

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Configuration

The application requires the following environment variables:

- `NEXT_PUBLIC_APTOS_NODE_URL`: Aptos node URL for blockchain interaction

### Adding New Tokens

To add new tokens, update the `popularTokens` array in `TokenSelector.tsx`:

```typescript
const popularTokens: Token[] = [
  {
    symbol: "NEW",
    name: "New Token",
    address: "0x1::coin::NewToken",
    decimals: 8,
  },
  // ... existing tokens
];
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository.
