// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Deal {
  Car[] private cars;

  struct Car {
    string name;
    string price;
    bool sold;
    address payable owner;
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
    address(cars[index].owner).transfer(msg.value);
    cars[index].sold = true;
  }

  function storeCar(string memory name, string memory price, address payable owner) payable public {
    cars.push(Car(name, price, false, owner));
  }
}
