const { default: ConnectWallet } = require("@/components/core/connectWallet")

const WebView = () => {

    return (
        <>
            <div className="relative">
                {/* App name  */}
                <div>
                    <img src="/app_logo.svg" className=" px-[25px] py-[33px] w-[300px]" />
                </div>

                {/* Team name */}

                <div className="absolute top-0 right-0">
                    <img src="/team_logo.svg" className=" px-[25px] py-[33px]" />
                </div>
            </div>
            {/* Content */}
            <div className=" flex flex-col justify-center items-center">
                <div className="relative w-[40%] flex flex-col justify-center items-center">
                    <div className="flex justify-between w-full item-center">
                        <img src="/tech_onam_text.svg"></img>
                        {/* Header */}
                        <div className="p-[8px] border rounded-[4px] font-[600px] text-[15px] border-[#FF5C00] text-[#FF5C00] flex gap-[4px]">
                            <img src="/diamond.svg"></img>
                            <p>LIMITED</p>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="relative border z-[1] rounded-[18px] p-[21px] border-white mt-[28px] w-[100%] ">
                        <video src="/onam_video.mp4" type="video/mp4" className="rounded-[18px] w-full" muted autoPlay={"autoplay"} preload="auto" loop></video>
                        <div className="absolute bottom-5 left-[-300px] z-[-1]">
                            <img src="/left_leaves.svg"></img>
                        </div>
                        <div className="absolute bottom-5 right-[-300px] z-[-1]">
                            <img src="/right_leaves.svg"></img>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <ConnectWallet />
                </div>
            </div></>
    )
}

export default WebView;