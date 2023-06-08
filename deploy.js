const ethers = require("ethers");
const fs = require("fs");

const main = async () => {
   try{
  const provider = new ethers.JsonRpcProvider("http://172.20.10.4:7545");
  const wallet = new ethers.Wallet("0xabf4ebc59a1b06dca065bc87853f909558ef8de718caf4a055b902ae995b884d", provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
  const deploymentOptions = {
    gasLimit: 2000000, // Set your desired gas limit
  };
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet); 
  console.log("Contract is being deployed... Please wait");
  const contract = await contractFactory.deploy(deploymentOptions);
  const transactionReceipt = await contract.waitForDeployment(1); //pause the execution of your code (for one block confirmation) until the contract deployment is confirmed on the network
  console.log(`This is the transaction used to deploy a contract: ${contract.deploymentTransaction}`)
  console.log(`This is the reciept of a transaction: ${transactionReceipt}`) //this is the reciept of a transaction, gotten by waiting for a block.
  // process.exit(0)
  }
  catch(err){
    console.log(err.message)
    // process.exit(1)
  }

};

main();
