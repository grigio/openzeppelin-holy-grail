import { ExampleToken } from './types/'

declare global {
  function contract(name: string, test: ContractTest): void;
  var artifacts: Artifacts;
  var assert: Chai.AssertStatic;
}

declare type ContractTest = (accounts: string[]) => void;

interface Artifacts {
  // INFO: Add here new entryponts smart contracts
  require(name: "ExampleToken"): ExampleToken;  
}
