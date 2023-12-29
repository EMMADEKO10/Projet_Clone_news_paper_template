export default function Footer() {
    return (
        <>
            <div className="flex flex-col items-start gap-16 pl-[5rem] pr-[5rem] pt-16 pb-0 border-t border-t-[#242535] bg-[#141624]">
                <div className="flex items-start gap-5">
                    <div className="flex flex-col items-start gap-6 w-[18.0625rem]">
                        <div className="flex flex-col items-start gap-3">
                            <div className="Jakarta Sans'] text-white font-['Plus text-lg font-semibold leading-7">About</div>
                            <div className="Jakarta Sans'] w-[17.5rem] text-[#97989f] font-['Plus leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <div className="Jakarta Sans'] text-[#97989f] font-['Plus leading-6">Email : info@jstemplate.net</div>
                            <div className="Jakarta Sans'] text-[#97989f] font-['Plus leading-6">Phone : 880 123 456 789</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start gap-20 w-[495px]">
                        <div className="flex flex-col items-start gap-6">
                            <div className="Jakarta Sans'] text-white font-['Plus text-lg font-semibold leading-7">Quick Link</div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Home</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">About</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Blog</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Archived</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Author</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Contact</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-6">
                            <div className="Jakarta Sans'] text-white font-['Plus text-lg font-semibold leading-7">Category</div>
                            <div className="flex flex-col items-start gap-2">
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Lifestyle</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Technology</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Travel</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Business</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Economy</div>
                                <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Sports</div>
                            </div>
                        </div>
                    </div>
                    <div className="m-newsletter flex flex-col items-center p-8 w-[392px] rounded-xl bg-[#242535]">
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex flex-col items-start gap-1 w-80">
                                <div className="flex items-center gap-2.5 self-stretch py-3 px-4 rounded-md border border-[#3b3c4a] bg-[#181a2a]">
                                    <div className="placeholder-1 Sans'] text-[#97989f] font-['Work leading-6">Your Email</div>
                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z" fill="#696A75" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z" fill="#696A75" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-3 self-stretch py-3 px-5 rounded-md bg-[#4b6bfb] Sans'] text-white font-['Work font-medium leading-6">
                                Subscribe
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="Sans'] text-[#97989f] text-center font-['Work leading-6">Get blog articles and offers via email</div>
                            <div className="Sans'] text-white text-center font-['Work text-xl font-semibold leading-6">Weekly Newsletter</div>
                        </div>
                    </div>
                </div>



                <div className="flex items-center gap-16 py-8 px-0 w-[1216px] border-t border-t-[#242535]">
                    <div className="flex items-center gap-2.5">
                        <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 29.536 1.87437 34.6342 5.0231 38.6946L10.314 18.7066C12.5156 10.0312 18.2343 5.543 27.4155 5.543H30.5814C37.038 5.543 41.78 11.6041 40.2264 17.871C39.9478 18.995 39.427 20.0446 38.7004 20.9463L36.006 24.2898C35.3146 25.1478 35.0625 26.279 35.3239 27.3494L36.1453 30.7118C36.5704 32.4521 36.4927 34.2773 35.9213 35.9752C33.9775 41.751 28.5636 45.6413 22.4695 45.6413H13.6115C16.755 47.153 20.2786 48 24 48Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.6 29.0123H18.9242C17.4329 29.0123 16.1291 30.018 15.7505 31.4604L13.9165 38.4472H21.1614C23.8415 38.4472 26.1845 36.6398 26.865 34.0476L27.0222 33.4487C27.611 31.2057 25.919 29.0123 23.6 29.0123ZM22.2195 31.1351H19.6787C18.8274 31.1351 18.083 31.7086 17.8658 32.5317L16.8649 36.3243H20.871C22.353 36.3243 23.6486 35.3303 24.0248 33.9045L24.1118 33.5752C24.4373 32.3415 23.5017 31.1351 22.2195 31.1351Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.9962 15.657C20.3748 14.2145 21.6786 13.2088 23.1699 13.2088H27.8457C30.1647 13.2088 31.8566 15.4023 31.2679 17.6452L31.1107 18.2441C30.4302 20.8364 28.0872 22.6437 25.4071 22.6437H18.1622L19.9962 15.657ZM22.1115 16.7282C22.3287 15.9052 23.0731 15.3317 23.9244 15.3317H26.4652C27.7474 15.3317 28.683 16.5381 28.3575 17.7717L28.2705 18.1011C27.8943 19.5268 26.5987 20.5209 25.1167 20.5209H21.1106L22.1115 16.7282Z" fill="white" />
                        </svg>
                        <div className="flex flex-col items-start gap-0.5">
                            <div className="Jakarta Sans'] text-white font-['Plus text-xl font-extrabold leading-7">MetaBlog</div>
                            <div className="Jakarta Sans'] text-white font-['Plus leading-6">© JS Template 2023. All Rights Reserved.</div>
                        </div>
                    </div>
                    <div className="link-1 flex justify-end items-center gap-4">
                        <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Terms of Use</div>
                        <div className="w-px h-6 bg-[#242535]" />
                        <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Privacy Policy</div>
                        <div className="w-px h-6 bg-[#242535]" />
                        <div className="Jakarta Sans'] text-[#bababf] font-['Plus leading-6">Cookie Policy</div>
                    </div>
                </div>
            </div>
        </>
    )
}












