import {ethers, upgrades} from "hardhat";
import {
    RadRabbits
} from "../typechain";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";

async function main() {
    let creator: SignerWithAddress;
    let radrabbits;
    [creator] = await ethers.getSigners();
    const radRabbitsProxyAddr = "";

    const RadRabbitsFactory = await ethers.getContractFactory("RadRabbits", creator);
    console.log("Preparing upgrade...");
    radrabbits = await upgrades.upgradeProxy(radRabbitsProxyAddr, RadRabbitsFactory);
    console.log("RadRabbits at:", radrabbits.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
