const Adoption = artifacts.require("Adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adoption", function (accounts) {
     describe('First group of tests', () => {
       let instance;

       before(async () => {
         instance = await Adoption.deployed();
       });

       it('user should adopt a pet', async() => {
         await instance.adopt.sendTransaction(8,{from: accounts[0]})
         let adopter =  await instance.adopters.call(8);
         assert.equal(adopter, accounts[0], "incorrect owner address");
       });

       
       it('should get adopter address by pet Id in array', async() => {
        let adopters =  await instance.getAdopters.call();
        assert.equal(adopters[8],accounts[0], "owner of petId should be recorded in the array")
        
      });



      it('should throw if invalid pet id is given', async() => {
        try{
        await instance.adopt.sendTransaction(17,{from: accounts[0]});
        assert.fail(true,false, "this function did not throw")
        }
        catch (error)
        {
          assert.include(String(error), "revert", 'expected "revert" but instead got ${error}');
        }
      });




       
     });
});
