"use client";

import { checkNetwork } from "@/service/metamask.service";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import UserInputForm from "../form/userinputform";
import { validateUser } from "@/service/api.service";


const ConnectWallet = () => {

  const {address} = useAccount();
  const [isNetworkConnected, setIsNetworkConnected] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    checkCurrentNetwork();
  }, [])

  const checkCurrentNetwork = async () => {
    setIsNetworkConnected(await checkNetwork());
  };

  useEffect(() => {
    checkCurrentNetwork();
    if(address) {
      checkUser();
    }
  }, [address])

  const checkUser = async() => {
    try {
      const result = await validateUser(address.toLowerCase());
      if(result?.status) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
      
    } catch(error) {
      console.log("Error occurred while validating user:", error);
    }

  }

  return (
    <>
    { isOpen && (<UserInputForm isOpen={isOpen} setIsOpen={setIsOpen} setIsRegistered={setIsRegistered}/>)  }
    {isNetworkConnected && address && isRegistered && (<button className="font-[600] text-[18px] lg:text-[20px] px-[29px] lg:px-[39px] py-[10px] lg:py-[16px] text-white">Registered</button>)}
    {isNetworkConnected && address && !isRegistered && (<button className="font-[600] text-[18px] lg:text-[20px] px-[29px] lg:px-[39px] py-[10px] lg:py-[16px] rounded-full text-white" style={{background: "linear-gradient(93.12deg, #AC58FF 2.77%, #1915D0 98.85%)"}} onClick={() => setIsOpen(true)}> Claim Tech Onam NFT</button>)}  
    {isNetworkConnected && !address && (<Web3Button />) }
    {!isNetworkConnected && (<Web3NetworkSwitch />)}
    </>
  );
};

export default ConnectWallet;