const Subscription = artifacts.require('../contracts/Deal.sol');

contract('Subscription', (accounts) => {
  var address = accounts[0]

  it('should always return 1', async function () {
    var instance = await Subscription.deployed()

    let result = await instance.subscribe()

    assert.equal(result, 1)
  })
})
