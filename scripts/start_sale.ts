import {ethers} from "hardhat";
import {
    RadRabbits
} from "../typechain";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";

async function main() {
    let creator: SignerWithAddress;
    [creator] = await ethers.getSigners();

    const radRabbitsAddr = "";
    const radrabbits = await ethers.getContractAt("RadRabbits", radRabbitsAddr, creator);

    console.log("Initializing RadRabbits sale start...");
    let tx = await radrabbits.setBeneficiary(creator.address);
    await tx.wait();
    let tr = await radrabbits.flipSaleStarted();
    await tr.wait();
    console.log("Successfully initialized");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
