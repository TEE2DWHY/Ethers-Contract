const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

const encrypt = async () => {
  try {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY); // create a new wallet instance with our private key
    const encryptedJson = await wallet.encrypt(
      // encrypt our private key with a password
      process.env.PRIVATE_KEY_PASSWORD
    );
    console.log(encryptedJson);
    fs.writeFileSync("./encryptedJsonKey.json", encryptedJson); // we save the encryptedJson to a file
  } catch (err) {
    console.log(err.message);
  }
};

encrypt();
