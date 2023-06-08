const ethers = require("ethers");
const fs = require("fs");

const main = async () => {
  try {
    const provider = new ethers.JsonRpcProvider("http://172.20.10.4:7545");
    const wallet = new ethers.Wallet(
      "0x9d9bba38a0987d344ea25aad11773b2118c922b508d27a39a86d4d9229cb165d",
      provider
    );
    const abi = fs.readFileSync(
      "./SimpleStorage_sol_SimpleStorage.abi",
      "utf8"
    );
    const binary = fs.readFileSync(
      "./SimpleStorage_sol_SimpleStorage.bin",
      "utf8"
    );
    const deploymentOptions = {
      gasLimit: 2000000, // Set your desired gas limit
    };
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Contract is being deployed... Please wait");
    const contract = await contractFactory.deploy(deploymentOptions);
    // const transactionReceipt = await contract.waitForDeployment(1); //pause the execution of your code (for one block confirmation) until the contract deployment is confirmed on the network
    console.log(contract.deploymentTransaction()); // output contract transaction response
    // console.log(`This is the receipt of a transaction: ${transactionReceipt}`); //this is the receipt of a transaction, obtained by waiting for a block.
    console.log(contract);

    // const nonce = await wallet.getNonce() // we are getting the nonce automatically;
    // const tx = { // we're creating a transaction
    //   nonce: nonce,
    //   gasPrice: "20000000000",
    //   gasLimit: 2000000,
    //   to: null,
    //   value: 0,
    //    data: "0x608060405234801561000f575f80fd5b506109d48061001d5f395ff3fe608060405234801561000f575f80fd5b506004361061007b575f3560e01c80632e64cec1116100595780632e64cec1146100ea5780634f2be91f146101085780636f760f4114610126578063b2ac62ef146101425761007b565b806306eb243a1461007f578063092a18201461009b578063262a9dff146100cc575b5f80fd5b6100996004803603810190610094919061034d565b610172565b005b6100b560048036038101906100b0919061034d565b61018e565b6040516100c3929190610411565b60405180910390f35b6100d4610243565b6040516100e1919061043f565b60405180910390f35b6100f2610248565b6040516100ff919061043f565b60405180910390f35b610110610250565b60405161011d919061043f565b60405180910390f35b610140600480360381019061013b9190610584565b610258565b005b61015c600480360381019061015791906105de565b6102dc565b604051610169919061043f565b60405180910390f35b805f8190555060025f546101869190610652565b5f8190555050565b6001818154811061019d575f80fd5b905f5260205f2090600202015f91509050805f0180546101bc906106b2565b80601f01602080910402602001604051908101604052809291908181526020018280546101e8906106b2565b80156102335780601f1061020a57610100808354040283529160200191610233565b820191905f5260205f20905b81548152906001019060200180831161021657829003601f168201915b5050505050908060010154905082565b5f5481565b5f8054905090565b5f6002905090565b6001604051806040016040528084815260200183815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f0190816102a8919061087f565b50602082015181600101555050806002836040516102c69190610988565b9081526020016040518091039020819055505050565b6002818051602081018201805184825260208301602085012081835280955050505050505f915090505481565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b61032c8161031a565b8114610336575f80fd5b50565b5f8135905061034781610323565b92915050565b5f6020828403121561036257610361610312565b5b5f61036f84828501610339565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f5b838110156103af578082015181840152602081019050610394565b5f8484015250505050565b5f601f19601f8301169050919050565b5f6103d482610378565b6103de8185610382565b93506103ee818560208601610392565b6103f7816103ba565b840191505092915050565b61040b8161031a565b82525050565b5f6040820190508181035f83015261042981856103ca565b90506104386020830184610402565b9392505050565b5f6020820190506104525f830184610402565b92915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610496826103ba565b810181811067ffffffffffffffff821117156104b5576104b4610460565b5b80604052505050565b5f6104c7610309565b90506104d3828261048d565b919050565b5f67ffffffffffffffff8211156104f2576104f1610460565b5b6104fb826103ba565b9050602081019050919050565b828183375f83830152505050565b5f610528610523846104d8565b6104be565b9050828152602081018484840111156105445761054361045c565b5b61054f848285610508565b509392505050565b5f82601f83011261056b5761056a610458565b5b813561057b848260208601610516565b91505092915050565b5f806040838503121561059a57610599610312565b5b5f83013567ffffffffffffffff8111156105b7576105b6610316565b5b6105c385828601610557565b92505060206105d485828601610339565b9150509250929050565b5f602082840312156105f3576105f2610312565b5b5f82013567ffffffffffffffff8111156106105761060f610316565b5b61061c84828501610557565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61065c8261031a565b91506106678361031a565b925082820190508082111561067f5761067e610625565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806106c957607f821691505b6020821081036106dc576106db610685565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261073e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610703565b6107488683610703565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61078361077e6107798461031a565b610760565b61031a565b9050919050565b5f819050919050565b61079c83610769565b6107b06107a88261078a565b84845461070f565b825550505050565b5f90565b6107c46107b8565b6107cf818484610793565b505050565b5b818110156107f2576107e75f826107bc565b6001810190506107d5565b5050565b601f82111561083757610808816106e2565b610811846106f4565b81016020851015610820578190505b61083461082c856106f4565b8301826107d4565b50505b505050565b5f82821c905092915050565b5f6108575f198460080261083c565b1980831691505092915050565b5f61086f8383610848565b9150826002028217905092915050565b61088882610378565b67ffffffffffffffff8111156108a1576108a0610460565b5b6108ab82546106b2565b6108b68282856107f6565b5f60209050601f8311600181146108e7575f84156108d5578287015190505b6108df8582610864565b865550610946565b601f1984166108f5866106e2565b5f5b8281101561091c578489015182556001820191506020850194506020810190506108f7565b868310156109395784890151610935601f891682610848565b8355505b6001600288020188555050505b505050505050565b5f81905092915050565b5f61096282610378565b61096c818561094e565b935061097c818560208601610392565b80840191505092915050565b5f6109938284610958565b91508190509291505056fea26469706673582212201c26570d8a6a57ee833985f7fc06f95e750b5c30ed6a66edee270443fa858e8164736f6c63430008140033",
    //   chainId: 1337
    //  }
    //const signedTxResponse = await wallet.signTransaction(tx); // to sign a transaction
    //console.log(signedTxResponse);
    // const sentTxResponse = await wallet.sendTransaction(tx); // to send a transaction (we dont need to sign again when sending a transaciton, it automatically gets signed)
    // await sentTxResponse.wait(1) // we wait for one block confirmation to ensure the transaction went through.
    // console.log(sentTxResponse);
    process.exit(0);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

main();
