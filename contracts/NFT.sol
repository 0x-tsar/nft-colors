// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721("Random Colors", "RNC") {
        admin = msg.sender;
    }

    function mint(address to) external payable {
        require(msg.sender == admin, "only admin");
        require(
            msg.value >= 0.000001 ether,
            "value must be EQUAL OR GREATER THAN 0.000000001 Ether"
        );
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://nft-colors.herokuapp.com/api/";
        // return "https://sleepy-fortress-10819.herokuapp.com/api/";
    }
}
