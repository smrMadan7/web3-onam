import { CHAIN_ID } from "@/utils/constants";
import web3 from "web3";

export const checkNetwork = async () => {
  const chainId = await window?.ethereum?.request({ method: "eth_chainId" });
  if (chainId !== web3?.utils?.toHex(CHAIN_ID)) {
    return false;
  } else {
    return true;
  }
};