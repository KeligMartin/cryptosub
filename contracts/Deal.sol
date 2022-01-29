// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Deal {

  /// The seller's address
  address public owner;

  /// The buyer's address part on this contract
  address public buyer;

  /// The mapping to store cars
  /// mapping (uint => Car) cars;

  Car[] private cars;

  struct Car {
    string name;
    uint price;
    bool sold;
  }

  function getNumberOfCars() public view returns(uint) {
    return cars.length;
  }

  function getCar(uint index) public view returns(Car memory) {
    return cars[index];
  }

  function getCars() public view returns (Car[] memory){
    return cars;
  }

  function buyCar(uint index) payable public {
    cars[index].sold = true;
  }

  function storeCar(string memory name, uint price) payable public {
    cars.push(Car(name, price, false));
  }

  function subscribe() public pure returns (uint) {
    return 15;
  }
}
