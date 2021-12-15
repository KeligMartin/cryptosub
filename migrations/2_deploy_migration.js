const nomSC = artifacts.require("../contracts/Subscription.sol");
module.exports = function(deployer) {
  deployer.deploy(nomSC);
};
