import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth } from "./utils";

const customDexAddress = "API Contract Deploy";

export async function swapEthToToken(tokenName, amount) {
  try {
    let tx = {
      value: toWei(amount),
    };
    const contractObj = await contract();

    const data = await contractObj.swapEthToToken(tokenName, tx);
    const receipt = await data.wait();

    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract();
    const tokenAddress = await contractObj.getTokenAddress(tokenName);
    const tokenContractObj = await tokenContract(tokenAddress);

    const data = await tokenContractObj.allowance(owner, customDexAddress);

    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount))
    );

    return result;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToEth(tokenName, amount) {
  try {
    const customObj = await contract();
    const data = await customObj.swapTokenToEth(tokenName, toWei(amount));
    const receipt = await data.wait();

    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const customObj = await contract();
    const data = await customObj.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount)
    );
    const receipt = await data.wait();

    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getTokenBalance(tokenName, address) {
  const customObj = await contract();
  const balance = await customObj.getBalance(tokenName, address);
  return balance;
}

export async function getTokenAddress(tokenName) {
  try {
    const customObj = await contract();
    const address = await customObj.getTokenAddress(tokenName);
    return address;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const customObj = await contract();
    const tokenAddress = await customObj.getTokenAddress(tokenName);
    const tokenContractObj = await tokenContract(tokenAddress);

    const data = await tokenContractObj.approve(
      customDexAddress,
      toWei(amount)
    );
    const receipt = await data.wait();

    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getAllHistory() {
  try {
    const customObj = await contract();
    const historyList = await customObj.getAllHistory();

    const formattedHistory = historyList.map((history, i) => ({
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outputValue: toEth(history?.outputValue),
      userAddress: history.userAddress,
    }));

    return formattedHistory;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString());
  return toWei.toString();
}

function parseErrorMsg(e) {
  const errorJson = JSON.parse(JSON.stringify(e));
  return errorJson?.reason || errorJson?.error?.message;
}
