# Solidity & Ethereum Starter Project

A complete Ethereum smart contract project built with [Hardhat](https://hardhat.org/).

## Project Structure

```
solidity-starter/
├── contracts/
│   └── SimpleStorage.sol      # Solidity smart contract
├── scripts/
│   └── deploy.js             # Deployment script
├── test/
│   └── SimpleStorage.test.js  # Automated tests (Mocha/Chai)
├── hardhat.config.js          # Hardhat configuration
└── package.json
```

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Compile Contracts**:
   ```bash
   npx hardhat compile
   ```

3. **Run Unit Tests**:
   ```bash
   npx hardhat test
   ```

4. **Deploy to In-Memory Local Hardhat Network**:
   ```bash
   npx hardhat run scripts/deploy.js
   ```

5. **Deploy to a Testnet (e.g. Sepolia)**:
   Add your RPC URL and private key to `hardhat.config.js` or via `.env`, then run:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```
