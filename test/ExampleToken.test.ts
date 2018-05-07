
import { BigNumber } from 'bignumber.js'
import * as chai from 'chai'
import { ExampleToken } from '../types'
import { W3 } from 'soltsice';
import { Utils } from './Utils'

chai.should();

contract('ExampleToken', ([OWNER, BENEFICIARY1, BENEFICIARY2, ...others]) => {

  let token: ExampleToken;

  before(async () => {
    token = await ExampleToken.new(W3.TX.txParamsDefaultDeploy(OWNER));
  })

  it("should work", async () => {
    return true;
  })

  it("should have the correct supply", async () => {
    const result = await token.totalSupply();
    const expected = 10000000000000000000000;
    result.toNumber().should.equal(expected);
  })

  it("should be transferable to another account", async () => {
    const someTokens = 100;
    await token.transfer(BENEFICIARY1, someTokens, Utils.txParams(OWNER))
    
    await token.transfer(BENEFICIARY2, 10, Utils.txParams(BENEFICIARY1))
    
    const beneficiary1Balance = await token.balanceOf(BENEFICIARY1);
    beneficiary1Balance.toNumber().should.be.equal(90);

    const beneficiary2Balance = await token.balanceOf(BENEFICIARY2);
    beneficiary2Balance.toNumber().should.be.equal(10);
    
  })


});