const hre = require("hardhat");

async function main() {
  const CustomDex = await hre.ethers.getContractFactory("CustomDex");

  const customDex = await CustomDex.deploy();

  await customDex.deployed();

  console.log("Contract deployed to:", customDex.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
