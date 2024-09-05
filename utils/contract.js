import { ethers } from "ethers";
import CustomDexABI from "../deploy/artifacts/contracts/CustomEx.sol/CustomDex.json";
import CustomTokenABI from "../deploy/artifacts/contracts/CustomEx.sol/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      "0x01369CcF5efF17EEEABFe5E9A36d8f51eebeaD31",
      CustomDexABI.abi,
      signer
    );

    return contractReader;
  }
};
