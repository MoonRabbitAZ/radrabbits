import {ethers, upgrades} from "hardhat";
import {
    RadRabbits
} from "../typechain";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";

async function main() {
    let creator: SignerWithAddress;
    const startPrice = ethers.utils.parseEther("50000");
    const maxSupply = 8888;
    const nReserved = 100;
    const maxTokensPerMint = 10;
    const uri = "https://radrabbit-metadata.vercel.app/api/token/radrabbit/";
    const name = "Rad Rabbits";
    const symbol = "RRB";

    [creator] = await ethers.getSigners();
    const RadRabbitsFactory = await ethers.getContractFactory("RadRabbits", creator);
    const radrabbits = await upgrades.deployProxy(RadRabbitsFactory, [
        startPrice,
        maxSupply,
        nReserved,
        maxTokensPerMint,
        uri,
        name,
        symbol
    ]);
    await radrabbits.deployed();
    console.log(`RadRabbits is deployed at: ${radrabbits.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
