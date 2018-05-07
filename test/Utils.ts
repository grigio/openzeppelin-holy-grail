import { W3 } from 'soltsice';
import { BigNumber } from 'bignumber.js'

W3.default = new W3();

export class Utils {
    static increaseTime(deltaTime: number | BigNumber, acc: W3.address) {
        let rpcParams = {
            jsonrpc: '2.0',
            method: 'evm_increaseTime',
            params: [deltaTime],
            id: new Date().getTime()
        };

        return new Promise((resolve, reject) => {
            if (deltaTime > 0) {
                console.log("TIME INCREASED +" + deltaTime)
                W3.default.currentProvider.sendAsync(rpcParams, (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res)
                    }
                })
            } else {
                resolve()
            }
        })
        // .then(() => W3.default.eth.sendTransaction({from: acc, to: acc, value: 0}))
    };

    static txParams(from: W3.address, value: number | BigNumber = 0, to?: W3.address ) {
        let objParams: W3.TX.TxParams = {
            from: from,
            value: value,
            gas: 6000 * 1000,
            gasPrice: 50 * 10 ** 9,
        }
        if (to) {
            objParams['to'] = to;
        }
        return objParams;
    };

    static async getLastBlockTime() {
        return W3.default.latestTime;
    }
}