const nomSC = artifacts.require("../contracts/Deal.sol");
module.exports = function(deployer) {
  deployer.deploy(nomSC);
};
