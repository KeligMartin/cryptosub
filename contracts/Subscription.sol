// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Subscription {

  struct Type {
    string name;
    uint price;
  }

  function subscribe() public pure returns (uint) {
    return 1;
  }
}
