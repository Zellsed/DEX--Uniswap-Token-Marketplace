require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// const { ARBITRUM_SEPOLIA, ETHEREUM_HOLESKY, PRIVATE_KEY } = process.env;
const ETHEREUM_HOLESKY =
  "https://holesky.infura.io/v3/9c481e1168e54cd39869bd50daa755bd";

const PRIVATE_KEY =
  "bab5a6356dd7d87959287261acca67993661aa0256db48a6dfa6d11d37d5e5cb";

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ethereum_holesky",
  networks: {
    hardhat: {},

    // polygon_mumbai: {
    //   url: "https://rpc.ankr.com/polygon_mumbai",
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },

    // arbitrum_sepolia: {
    //   url: ARBITRUM_SEPOLIA,
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },

    ethereum_holesky: {
      url: ETHEREUM_HOLESKY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
