const hre = require("hardhat");

async function main() {
  console.log("Deploying SimpleStorage contract...");

  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.waitForDeployment();

  const targetAddress = await simpleStorage.getAddress();
  console.log(`SimpleStorage deployed successfully to: ${targetAddress}`);

  const initialVal = await simpleStorage.retrieve();
  console.log(`Initial value: ${initialVal.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
