import { useRef, useState } from "react";
import Modal from "../core/modal";
import { useAccount, useNetwork } from "wagmi";
import { registerUser } from "@/service/api.service";

const UserInputForm = (props) => {
    const { isOpen, setIsOpen, setIsRegistered } = props;

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState();
    const { address } = useAccount();

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const formRef = useRef();

    const handleModalClose = () => {
        setName();
        setEmail();
        setStatus()
        setIsOpen(false);
        setNameError(false);
        setEmailError(false);
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        validateFields(emailRE);
        if (name && email && email?.match(emailRE)) {
            try {
                const data =
                {
                    "email": email,
                    "walletAddress": address.toLowerCase(),
                    "name": name
                }

                const result = await registerUser(data);
                if (result.status === true) {
                    setIsRegistered(true);
                    setStatus("success")
                } else {
                    setStatus("dublicate");
                }
            } catch (error) {
                console.log("Error occured while registering user: ", error);
                setStatus("failed");
            }
        }

    }


    const validateFields = (emailRE) => {
        if(!email || !email?.match(emailRE)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if(!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }



    return (
        <div ref={formRef}>
            <Modal
                isOpen={isOpen}
                onClose={handleModalClose}
                enableFooter={false}
                enableHeader={false}
                modalClassName={
                    "lg:max-w-[650px] max-w-[90%] !rounded-[30px]"
                }
            >
                <>
                    {status === "success" || status === "failed" || status === "dublicate" ? (
                        <>
                            {status === "success" && (
                                <>
                                    <button className="absolute focus:outline-none -top-1  -right-1" onClick={handleModalClose}>
                                        <img src="/close.svg" alt="close" />
                                    </button>

                                    <div className="rounded-t-[30px] flex h-20 bg-[url('/popup_banner.svg')]"></div>
                                    <div className="flex justify-center items-center text-center m-[24px]">
                                        <h1 className="text-[24px] font-[700] w-[80%]">{`Thank you for submitting.`}</h1>
                                    </div>
                                </>
                            )}

                            {status === "dublicate" && (
                                <>
                                    <button className="absolute focus:outline-none -top-1  -right-1" onClick={handleModalClose}>
                                        <img src="/close.svg" alt="close" />
                                    </button>

                                    <div className="rounded-t-[30px] flex h-20 bg-[url('/popup_banner.svg')]"></div>
                                    <div className="flex justify-center items-center text-center m-[24px]">
                                        <h1 className="text-[24px] font-[700] w-[80%]">{`Already submitted.`}</h1>
                                    </div>
                                </>
                            )}

                            {status === "failed" && (

                                <>
                                    <button className="absolute focus:outline-none -top-1  -right-1" onClick={handleModalClose}>
                                        <img src="/close.svg" alt="close" />
                                    </button>

                                    <div className="rounded-t-[30px] flex h-20 bg-[url('/popup_banner.svg')]"></div>
                                    <div className="flex justify-center items-center text-center m-[24px]">
                                        <h1 className="text-[24px] font-[700] w-[80%]">{`Something went wrong please try again!`}</h1>
                                    </div>
                                </>
                            )}

                        </>
                    ) : (
                        <>
                            <div className="bg-[#40C35D] rounded-t-[29px] py-3 relative">
                                <span className="text-[32px] lg:text-[40px] text-white pl-6">Claim your NFT</span>
                                <button className="absolute focus:outline-none top-4 -right-2 pr-6" onClick={handleModalClose}>
                                    <img src="/close.svg" alt="close" />
                                </button>
                            </div>
                            <div className="flex h-20 bg-[url('/popup_banner.svg')]"></div>
                            <div className="mx-8">
                                <div className="pt-[20px]">
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-[#9fa2aa] font-[600] text-[14px]">Enter your details below to claim NFT during the event</label>
                                </div>
                                <form>
                                    {/* team name */}
                                    <div className="flex flex-col mt-[16px]">
                                        <label className="font-[700] text-[14px]">Your Name*</label>
                                        <input onChange={(e) => setName(e.target.value)} required placeholder="Enter your name here" className="w-full border border-[#CBD5E1] px-[8px] py-[12px] rounded-[8px] mt-[12px] focus:outline-none text-[14px] font-[600]"></input>
                                    {nameError && <div className="text-xs pt-2 text-red-500">Enter your name</div>}

                                    </div>

                                    {/* Requester email id */}
                                    <div className="flex flex-col mt-[16px]">
                                        <label className="font-[700] text-[14px]">Employee email*</label>
                                        <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your employee email ID here" className="w-full border border-[#CBD5E1] px-[8px] py-[12px] rounded-[8px] mt-[12px] focus:outline-none text-[14px] font-[600]"></input>
                                    {emailError && <div className="text-xs pt-2 text-red-500">Enter valid email</div>}
                                    </div>

                                    <div className="mt-[22px] flex px-5 bg-[#40C35D] py-[12px] rounded-[15px] justify-end">
                                        <div className="pr-2">
                                            <button
                                                className="on-focus leading-3.5 text-[0.938rem] leading-[24px] rounded-full border border-white px-[24px] py-2 text-left text-white font-semibold last:mr-0 focus-within:rounded-full"
                                                onClick={handleModalClose}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                        <div className="">
                                            <button type="submit"
                                                className="on-focus leading-3.5 bg-black text-white text-[0.938rem] leading-[24px] rounded-full px-[24px] py-2 text-left font-semibold last:mr-0 focus-within:rounded-full"
                                                onClick={handleFormSubmit}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}

                </>
            </Modal>
        </div>
    )
}

export default UserInputForm;