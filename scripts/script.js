const NFT = artifacts.require("NFT.sol");

module.exports = async () => {
  const [admin, _] = await web3.eth.getAccounts();
  const nft = await NFT.deployed();

  // const minting = await nft.mint(admin, {
  //   from: admin,
  //   value: "1000000000000000",
  // });

  // console.log(minting);

  const amountTokens = await nft.nextTokenId();

  for (let i = 0; i < parseInt(amountTokens); i++) {
    const token = await nft.tokenURI(i);
    console.log(token);
  }

  // console.log(nft);
  // const value = web3.utils.fromWei("10000000000");
  // const value = web3.utils.fromWei("10000000000", "Wei");
  // const value = web3.utils.toWei("0.000001");
  // const value = web3.utils.fromWei("1000000000000");
  // const value = web3.utils.fromWei("10000000000000000");
  // console.log(value);
  // console.log(typeof value);
  // try {

  // const balance = await nft.balanceOf(admin);
  // console.log(parseInt(balance));
  // console.log(balance.toString());
};
