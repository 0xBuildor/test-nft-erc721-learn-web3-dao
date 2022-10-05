const {ethers} = require("hardhat");

async function main() {
    // 1. Tell the script we want to deploy the 'NFTee.sol' contract
    const nftContract = await ethers.getContractFactory("NFTee");

    // 2. Deploy it
    const deployedNFTContract = await nftContract.deploy();

    // 2.1 Wait for deployment to finish
    await deployedNFTContract.deployed();

    // 3. Print the address of deployed contract
    console.log("NFT Contract Address:", deployedNFTContract.address);


}


//Call the main function to catch if there's any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

