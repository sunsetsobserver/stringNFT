pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Composition is ERC721, ERC721URIStorage {
    uint256 private _tokenIdCounter = 1;

    event CompositionCreated(uint256 indexed tokenId, address indexed owner);

    constructor() ERC721("Composition", "CMPT") {} // Give name to your token ex. "Composition" and short version ex. "CMPT"

    function createComposition(string memory _compositionData) public returns (uint256) {
        uint256 newItemId = _tokenIdCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, JSON.stringify(_compositionData));
        _tokenIdCounter = _tokenIdCounter + 1;

        // Emit the CompositionCreated event
        emit CompositionCreated(newItemId, msg.sender);

        return newItemId;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual override(ERC721URIStorage) {
    super._setTokenURI(tokenId, _tokenURI);
    }

    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}