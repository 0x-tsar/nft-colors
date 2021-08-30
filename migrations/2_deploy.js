const { networks } = require("../truffle-config");

const NFT = artifacts.require("NFT");

module.exports = async (deployer, network, accounts) => {
  const nft = await deployer.deploy(NFT);
};
