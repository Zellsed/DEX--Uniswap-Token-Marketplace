require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// const { ARBITRUM_SEPOLIA, ETHEREUM_HOLESKY, PRIVATE_KEY } = process.env;
const ETHEREUM_HOLESKY =
  "";

const PRIVATE_KEY =
  "";

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
