import BlogList from "./blogList"

export default function AllPost(){
    return(
        <div className="flex flex-col items-center gap-20">
            
            <div className="lightgray bg-cover bg-no-repeat flex-shrink-0  w-[1216px] h-[600px] rounded-xl bg-[url(src/images/cnn-remporte-top-food-nourriture-saine-typique-indonesienne-souvent-appelee-gado-gado-lotek-se-compose-divers-legumes-oeufs-tempeh-lontong-sauce-aux-arachides-cuisine-rue_954783-671.jpg)]" />

            <div className="content-5 flex flex-col items-start gap-6 p-10 w-[598px] rounded-xl border border-[#242535] bg-[#181a2a]">
                <div className="flex flex-col items-start gap-4 self-stretch">
                    <div className="flex justify-center items-center gap-1 py-1 px-2 rounded-md bg-[#4b6bfb] Sans'] text-white font-['Work text-sm font-medium leading-5">
                        Technology
                    </div>
                    <div className="Sans'] self-stretch text-white font-['Work text-4xl font-semibold leading-10">The Impact of Technology on the Workplace: How Technology is Changing</div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <div className="lightgray 50% / cover no-repeat] w-9 h-9 rounded-full bg-[url(<path-to-image>)," />
                        <div className="Sans'] text-[#97989f] font-['font-medium leading-6">Jason Francisco</div>
                    </div>
                    <div className="Sans'] text-[#97989f] font-['Work leading-6">August 20, 2022</div>
                </div>
            </div>




            <div className="flex flex-col items-center gap-20">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center gap-8 self-stretch title-1 Sans'] text-black font-['Work text-2xl font-bold leading-7">
                        Latest Post
                    </div>

                 <BlogList />


                    <div className="flex justify-center items-center gap-3 py-3 px-5 rounded-md border border-[#696a75]/[.30] Sans'] text-[#696a75] font-['Work font-medium leading-6">
                        View All Post
                    </div>
                </div>


                
                <div className="flex flex-col justify-center items-center gap-2.5 w-[750px] h-[6.25rem] rounded-xl bg-[#242535]">
                    <div className="flex flex-col items-center">
                        <div className="Sans'] text-[#696a75] text-center font-['Work text-xl font-semibold leading-6">You can place ads</div>
                        <div className="Sans'] text-[#696a75] text-center font-['Work text-sm leading-5">Advertisement</div>
                        <div className="Sans'] text-[#696a75] text-center font-['Work text-lg leading-[1.625rem]">750x100</div>
                    </div>
                </div>
            </div>


            
            <div className="flex flex-col justify-center items-center gap-2.5 w-[750px] h-[6.25rem] rounded-xl bg-[#242535]">
                <div className="flex flex-col items-center">
                    <div className="Sans'] text-[#696a75] text-center font-['Work text-xl font-semibold leading-6">You can place ads</div>
                    <div className="Sans'] text-[#696a75] text-center font-['Work text-sm leading-5">Advertisement</div>
                    <div className="Sans'] text-[#696a75] text-center font-['Work text-lg leading-[1.625rem]">750x100</div>
                </div>
            </div>
        </div>
    )
}