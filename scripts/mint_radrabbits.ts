import {ethers} from "hardhat";
import {
    RadRabbits
} from "../typechain";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";

async function main() {
    let creator: SignerWithAddress;
    let radrabbits: RadRabbits;
    [creator] = await ethers.getSigners();

    const radRabbitsProxyAddr = "";

    radrabbits = await ethers.getContractAt("RadRabbits", radRabbitsProxyAddr, creator);
    const price = await radrabbits.getPrice();
    const quantity = 10;
    const val = price.mul(quantity)
    const tx = await radrabbits.mint(quantity, {value: val});
    await tx.wait();
    console.log(`Minted 10 RadRabbits`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
