// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Subscription {

  struct Type {
    string name;
    uint price;
  }

  function subscribe() public pure returns (uint) {
    return tmp();
  }

  uint startTime;

  function tmp() public view returns (uint) {
    require(startTime != 0);
    return (now - startTime) / 1 minutes;
  }

  function start() {
    startTime = now;
  }

  function stop() {
    startTime = 0;
  }
}
