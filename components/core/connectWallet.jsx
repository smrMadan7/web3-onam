"use client";

import { checkNetwork } from "@/service/metamask.service";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import UserInputForm from "../form/userinputform";


const ConnectWallet = () => {

  const {address} = useAccount();
  const [isNetworkConnected, setIsNetworkConnected] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    checkCurrentNetwork();
  }, [])

  const checkCurrentNetwork = async () => {
    setIsNetworkConnected(await checkNetwork());
  };

  return (
    <>
    { isOpen && (
      <UserInputForm isOpen={isOpen} setIsOpen={setIsOpen}/>
    )
      
    }
      {isNetworkConnected ? (
        <>
        {
          address ? (
            <button className="font-[600] text-[18px] lg:text-[20px] px-[29px] lg:px-[39px] py-[10px] lg:py-[16px] rounded-full text-white" style={{background: "linear-gradient(93.12deg, #AC58FF 2.77%, #1915D0 98.85%)"}}
            onClick={() => setIsOpen(true)}>
              Claim Tech Onam NFT
            </button>
          )  : (
            <Web3Button />
          )
        }
        </>
      ) : (
          <Web3NetworkSwitch />
      )}
    </>
  );
};

export default ConnectWallet;