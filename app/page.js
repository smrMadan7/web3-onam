'use client'
import ConnectWallet from "@/components/core/connectWallet";


export default function Home() {

  return (
    <main className="overflow-y-auto h-screen w-full" style={{background: "linear-gradient(180deg, rgba(255, 255, 255, 0.87) 0%, #3EC25B 100%)"}}>
      {/* Web */}
      <div className="w-full hidden lg:block pb-[60px]">
        <div className="relative">
         {/* App name  */}
            <div>
                <img src="/app_logo.svg" className=" px-[25px] py-[33px] w-[300px]"/>
            </div>

            {/* Team name */}

            <div className="absolute top-0 right-0">
                <img src="/team_logo.svg" className=" px-[25px] py-[33px]"/>
            </div>
        </div>
            {/* Content */}
        <div className=" flex flex-col justify-center items-center">

              <div className="relative w-[40%] flex flex-col justify-center items-center">
                <div className="flex justify-between w-full">
                  <img src="/tech_onam_text.svg">
                  </img>
                  {/* Header */}
                  <div className="p-[8px] border rounded-[4px] font-[600px] text-[15px] border-[#FF5C00] text-[#FF5C00] flex gap-[4px]">
                    <img src="/diamond.svg"></img>
                    <p>LIMITED</p>
                  </div>
                </div>
      
                  {/* Video */}
                  <div className="relative border z-[1] rounded-[18px] p-[21px] border-white mt-[28px] w-[100%] ">
                    <video src="/onam_video.mp4" type="video/mp4" class="rounded-[18px]" muted autoPlay={"autoplay"} preLoad="auto" loop>
                    </video>
                    <div className="absolute bottom-5 left-[-300px] z-[-1]">
                      <img src="/left_leaves.svg"></img>
                    </div>
                    <div className="absolute bottom-5 right-[-300px] z-[-1]">
                      <img src="/right_leaves.svg"></img>
                    </div>

                    </div>
              </div>
              <div className="mt-[20px]">
            <ConnectWallet/>
            </div>
              
        </div>
      </div>



      {/* Mobile */}
      <div className="w-full block lg:hidden pb-[60px]">
        <div className="relative flex items-center justify-between">
         {/* App name  */}
            <div>
                <img src="/app_logo.svg" className=" p-[10px] w-[200px]"/>
            </div>

            {/* Team name */}

            <div className="">
                <img src="/team_logo.svg" className="h-[90px] p-[10px]"/>
            </div>
        </div>
                    {/* Content */}
                    <div className=" flex flex-col justify-center items-center mt-[20px]">

<div className="relative w-[80%] flex flex-col justify-center items-center">
  <div className="flex justify-between w-full">
    <img src="/tech_onam_text.svg" className="w-[150px]">
    </img>
    {/* Header */}
    <div className="p-[4px] border rounded-[4px] font-[600] text-[15px] border-[#FF5C00] text-[#FF5C00] flex gap-[4px]">
      <img src="/diamond.svg"></img>
      <p>LIMITED</p>
    </div>
  </div>

    {/* Video */}
    <div className="relative border z-[1] rounded-[18px] border-white p-[21px] mt-[28px] w-[100%] ">
      <video src="/onam_video.mp4" type="video/mp4" class="rounded-[18px]" muted autoPlay={"autoplay"} preLoad="auto" loop>
      </video>
      {/* <div className="absolute bottom-4 w-[200px] left-[-100px] z-[-1]">
        <img src="/left_leaves.svg"></img>
      </div>
      <div className="absolute bottom-4 w-[200px] right-[-100px] z-[-1]">
        <img src="/right_leaves.svg"></img>
      </div> */}

      </div>
</div>
<div className="mt-[20px]">
<ConnectWallet/>
</div>

</div>
      </div>


    </main>
  )
}
