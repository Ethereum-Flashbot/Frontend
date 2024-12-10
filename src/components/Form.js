import React, {useState} from 'react';
import {useAPIs} from "../service/apis";

export const Form = () => {
    const api = useAPIs();
    const [ownerPrivateKey, setOwnerPrivateKey] = useState('');
    const [swapWalletsPrivateKeys, setSwapWalletsPrivateKeys] = useState('');
    const [swapTokenAmounts, setSwapTokenAmounts] = useState('');
    const [ethForLP, setEthForLP] = useState('');
    const [gasLimitForLP, setGasLimitForLP] = useState('');
    const [gasLimitForSwap, setGasLimitForSwap] = useState('');
    const [tokenAddress, setTokenAddress] = useState('');
    const [tokenAmount, setTokenAmount] = useState('');

    const handleSubmit = async () => {

        const swapWalletsArr = swapWalletsPrivateKeys.split('\n');
        const swapTokenAmountsArr = swapTokenAmounts.split('\n');

        swapWalletsArr.forEach((item, index) => {
            if (item.trim().length !== 0) {
                swapWalletsArr[index] = item.trim();
            } else {
                swapWalletsArr.splice(index, 1);
            }
        });
        swapTokenAmountsArr.forEach((item,index) => {
            if (item.trim().length !== 0) {
                swapTokenAmountsArr[index] = item.trim();
            } else {
                swapTokenAmountsArr.splice(index, 1);
            }
        });

        const data = {
            owner_wallet: ownerPrivateKey,
            swap_wallets: swapWalletsArr,
            swap_amounts: swapTokenAmountsArr,
            eth_lp: ethForLP,
            token_address: tokenAddress,
            token_percent: tokenAmount,
            gas_limit_lp: gasLimitForLP,
            gas_limit_swap: gasLimitForSwap,
        }
        const res = await api.updateConfig(data);
    }
    return <>
        <div className={'container mx-auto mt-5'}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-first-name">
                        Owner Private Key
                    </label>
                    <input onChange={(e) => setOwnerPrivateKey(e.target.value)}
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                           id="grid-first-name" type="text" placeholder="863df9925fc855c4d83...fd9acd6c00426764"/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Swap wallets private keys
                    </label>
                    <textarea rows={'5'} onChange={(e) => setSwapWalletsPrivateKeys(e.target.value)}
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password" placeholder="e49f93991aa...267fbc8b711"/>
                    <p className="text-gray-600 text-xs italic">Please split keys by enter!</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        Swap token amounts
                    </label>
                    <textarea rows={'5'} onChange={(e) => setSwapTokenAmounts(e.target.value)}
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password" placeholder="0.001"/>
                    <p className="text-gray-600 text-xs italic">Please split keys by enter!</p>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-city-1">
                        Token Address for LP
                    </label>
                    <input onChange={(e) => setTokenAddress(e.target.value)}
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-city-1" type="text" placeholder="0.1"/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-city-1">
                        ETH FOR LP
                    </label>
                    <input onChange={(e) => setEthForLP(e.target.value)}
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-city-1" type="text" placeholder="0.1"/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-city-2">
                        Token Amount for lp (%)
                    </label>
                    <input onChange={(e) => setTokenAmount(e.target.value)}
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-city-2" type="text" placeholder="95"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-city-2">
                        GAS LIMIT FOR LP
                    </label>
                    <input onChange={(e) => setGasLimitForLP(e.target.value)}
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-city-2" type="text" placeholder="300000"/>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                           htmlFor="grid-zip">
                        GAS LIMIT FOR SWAP
                    </label>
                    <input onChange={(e) => setGasLimitForSwap(e.target.value)}
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                           id="grid-zip" type="text" placeholder="300000"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2 justify-center mt-5">
                <button onClick={() => handleSubmit()} className={'bg-blue-500 px-4 py-2 rounded text-white'}>Change
                    Config
                </button>
            </div>

        </div>
    </>
}