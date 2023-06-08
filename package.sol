{
  "dependencies": {
    "ethers": "^6.4.2",
    "solc": "^0.8.20"
  },
  "scripts": {
    "compile": "solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol"
  }
}
