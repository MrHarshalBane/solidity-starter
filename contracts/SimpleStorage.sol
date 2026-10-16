// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SimpleStorage
 * @dev Store & retrieve a favorite number and track person-to-favorite-number mappings.
 */
contract SimpleStorage {
    uint256 private favoriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person[] public listOfPeople;
    mapping(string => uint256) public nameToFavoriteNumber;

    event NumberUpdated(uint256 indexed oldNumber, uint256 indexed newNumber, address indexed sender);
    event PersonAdded(string name, uint256 favoriteNumber);

    /**
     * @dev Store a new favorite number
     * @param _favoriteNumber Number to store
     */
    function store(uint256 _favoriteNumber) public {
        uint256 old = favoriteNumber;
        favoriteNumber = _favoriteNumber;
        emit NumberUpdated(old, _favoriteNumber, msg.sender);
    }

    /**
     * @dev Retrieve the current favorite number
     * @return Current favorite number
     */
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    /**
     * @dev Add a person and their favorite number
     * @param _name Name of the person
     * @param _favoriteNumber Favorite number
     */
    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
        emit PersonAdded(_name, _favoriteNumber);
    }

    /**
     * @dev Get total people count
     */
    function getPeopleCount() public view returns (uint256) {
        return listOfPeople.length;
    }
}
