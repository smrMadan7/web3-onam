import ConnectWallet from "@/components/core/connectWallet";


const MobileView = () => {

    return (
        <>
            <div className="relative flex items-center justify-between">
                {/* App name  */}
                <div>
                    <img src="/app_logo.svg" className=" p-[10px] w-[200px]" />
                </div>

                {/* Team name */}

                <div className="">
                    <img src="/team_logo.svg" className="h-[90px] p-[10px]" />
                </div>
            </div>
            {/* Content */}
            <div className=" flex flex-col justify-center items-center mt-[20px]">
                <div className="relative w-[80%] flex flex-col justify-center items-center">
                    <div className="flex justify-between w-full">
                        <img src="/tech_onam_text.svg" className="w-[150px]"></img>
                        {/* Header */}
                        <div className="p-[4px] border rounded-[4px] font-[600] text-[15px] border-[#FF5C00] text-[#FF5C00] flex gap-[4px]">
                            <img src="/diamond.svg"></img>
                            <p>LIMITED</p>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="relative border z-[1] rounded-[18px] border-white p-[21px] mt-[28px] w-[100%] ">
                        <video src="/onam_video.mp4" type="video/mp4" className="rounded-[18px]" muted autoPlay={"autoplay"} preload="auto" loop></video>
                    </div>
                </div>
                <div className="mt-[20px]">
                    {/* <ConnectWallet /> */}
                </div>
            </div>
        </>
    )
}

export default MobileView;