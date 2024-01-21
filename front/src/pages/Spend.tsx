import React, { Provider } from 'react'
import { Pool, InterestRate, EthereumTransactionTypeExtended, PoolBundle, ActionBundle } from "@aave/contract-helpers";
import { useEthersSigner } from "../lib/ethers"
import { BigNumber, providers } from 'ethers';
import { sign } from 'viem/accounts';
import { useAccount } from 'wagmi';




const Spend = () => {
    const signer = useEthersSigner();
      /*
- @param `user` The ethereum address that will receive the borrowed amount 
- @param `reserve` The ethereum address of the reserve asset 
- @param `amount` The amount to be borrowed, in human readable units (e.g. 2.5 ETH)
- @param `interestRateMode`//Whether the borrow will incur a stable (InterestRate.Stable) or variable (InterestRate.Variable) interest rate
- @param @optional `debtTokenAddress` The ethereum address of the debt token of the asset you want to borrow. Only needed if the reserve is ETH mock address 
- @param @optional `onBehalfOf` The ethereum address for which user is borrowing. It will default to the user address 
*/
    const sumbit_supply = async()=>{
        if(signer){
            const account = signer.signer;
            const address = account._address;
            console.log("address: ", address);
            const pool = new Pool(signer.provider, {
                POOL: "0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52", // Goerli GHO market
                WETH_GATEWAY: "0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31", // Goerli GHO market
              });
            // const poolBundle = new PoolBundle(signer.provider, {
            //     POOL: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951", // Sepolia pool address 
            //     WETH_GATEWAY: "0x387d311e47e80b498169e6fb51d3193167d89F7D", // Sepolia WETH address
            //   });
            // poolBundle.
            const x = await pool.supply({
                user: address,
                reserve:"0xC558DBdd856501FCd9aaF1E62eae57A9F0629a3c",
                amount:"0.01"
            })
            // const supplyBundle: ActionBundle = await poolBundle.supplyBundle({
            // address,
            // reserve:"0x387d311e47e80b498169e6fb51d3193167d89F7D",
            // amount:"0.01"
            // });
            // const txs: EthereumTransactionTypeExtended[] = await poolbundle.supply({
            //     account.getAddress(),
            //     reserve: "0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211", // Goerli GHO market
            //     amount,
            //     interestRateMode,
            //     debtTokenAddress: "0x80aa933EfF12213022Fd3d17c2c59C066cBb91c7", // Goerli GHO market
            //     onBehalfOf,
            //     referralCode,
            // });
            // const extendedTxData = await supplyBundle.
            console.log("tx counts: ", x.length)
            console.log("x: ",x)
            for(let i=0;i++;i<x.length){
                const { ...txData } = await x[i].tx();
                console.log("tx Data", txData);
                const txResponse = await account.sendTransaction({
                    ...txData,
                    value: txData.value ? BigNumber.from(txData.value) : undefined,
                });
            }
            // const b = await pool.borrow({

            // })
        }
    }

    const borrow = async()=>{
        const txs: EthereumTransactionTypeExtended[] = await Pool.borrow({
            user,
            reserve: "0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211", // Goerli GHO market
            amount,
            interestRateMode,
            debtTokenAddress: "0x80aa933EfF12213022Fd3d17c2c59C066cBb91c7", // Goerli GHO market
            onBehalfOf,
            referralCode,
        });
    }

  return (
    <div>Spend

        <button onClick={sumbit_supply}> Supply</button>
    </div>
  )
}

export default Spend