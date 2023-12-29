import Blog from "./blog"

export default function Blogs(){
    return(
        <>

            <div className="flex items-start gap-5">
                
               <Blog />

                <div className="flex flex-col justify-center items-center gap-4 p-4 w-[392px] rounded-xl border border-[#242535] bg-[#181a2a]">
                    <div className="lightgray 50% / cover no-repeat] w-[22.5rem] h-60 rounded-md bg-[url(<path-to-image>)," />
                    <div className="flex flex-col items-start gap-5 self-stretch p-2">
                        <div className="flex flex-col items-start gap-4 self-stretch">
                            <div className="flex justify-center items-center gap-1 py-1 px-2 rounded-md bg-[#4b6bfb]/[.5] Sans'] text-[#4b6bfb] font-['Work text-sm font-medium leading-5">
                                Technology
                            </div>
                            <div className="Sans'] self-stretch text-white font-['Work text-2xl font-semibold leading-7">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <div className="lightgray 50% / cover no-repeat] w-9 h-9 rounded-full bg-[url(<path-to-image>)," />
                                <div className="Sans'] text-[#97989f] font-['Work font-medium leading-6">Jason Francisco</div>
                            </div>
                            <div className="Sans'] text-[#97989f] font-['Work leading-6">August 20, 2022</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4 w-[392px] rounded-xl border border-[#242535] bg-[#181a2a]">
                    <div className="lightgray 50% / cover no-repeat] w-[22.5rem] h-60 rounded-md bg-[url(<path-to-image>)," />
                    <div className="flex flex-col items-start gap-5 self-stretch p-2">
                        <div className="flex flex-col items-start gap-4 self-stretch">
                            <div className="flex justify-center items-center gap-1 py-1 px-2 rounded-md bg-[#4b6bfb]/[.5] Sans'] text-[#4b6bfb] font-['Work text-sm font-medium leading-5">
                                Technology
                            </div>
                            <div className="Sans'] self-stretch text-white font-['Work text-2xl font-semibold leading-7">The Impact of Technology on the Workplace: How Technology is Changing</div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-3">
                                <div className="lightgray 50% / cover no-repeat] w-9 h-9 rounded-full bg-[url(<path-to-image>)," />
                                <div className="Sans'] text-[#97989f] font-['Work font-medium leading-6">Elizabeth Slavin</div>
                            </div>
                            <div className="Sans'] text-[#97989f] font-['Work leading-6">August 20, 2022</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}