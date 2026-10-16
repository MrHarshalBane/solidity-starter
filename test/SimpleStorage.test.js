const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let simpleStorage;

  beforeEach(async function () {
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.waitForDeployment();
  });

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    expect(currentValue).to.equal(0);
  });

  it("Should update when store() is called", async function () {
    const transactionResponse = await simpleStorage.store(42);
    await transactionResponse.wait(1);

    const updatedValue = await simpleStorage.retrieve();
    expect(updatedValue).to.equal(42);
  });

  it("Should add person and map correctly", async function () {
    const tx = await simpleStorage.addPerson("Alice", 777);
    await tx.wait(1);

    const person = await simpleStorage.listOfPeople(0);
    expect(person.name).to.equal("Alice");
    expect(person.favoriteNumber).to.equal(777);

    const mappedNumber = await simpleStorage.nameToFavoriteNumber("Alice");
    expect(mappedNumber).to.equal(777);
  });
});
