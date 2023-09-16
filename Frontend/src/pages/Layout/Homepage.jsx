import Layout from "@/components/Layout";
import Searchpage from "./Searchpage";
import Link from "next/link";

export default function Homepage () {
    return (
        <Layout>
            <div className="flex flex-col pb-10">
                <div className="flex flex-col items-center px-20">
                    <img 
                    src="/Images/logo.png"
                    alt="logo.png"
                    className="w-[30%] py-10 pl-11" />
                    <div className="flex flex-col items-center px-20 pt-20 pb-16 bg-white">
                        <p className="pb-10 text-lg leading-7 text-center text-black"><span className="font-bold text-primary">IDEAI</span> is a forward-thinking investment firm dedicated to fueling the growth and innovation of artificial intelligence technologies. 
                        We identify and fund cutting-edge AI startups and research projects that have the potential to revolutionize industries and shape the future. 
                        Our mission is to bridge the gap between visionary AI pioneers and the resources they need to make breakthroughs in machine learning, deep learning, and AI ethics.
                        Join us in shaping the AI landscape for a brighter, more intelligent tomorrow.</p>
                        <Link href={"/Layout/Searchpage"}>
                            <button className="flex items-center w-full rounded-lg shadow-md px-20 py-3 text-sm font-bold text-white bg-primary">Get Explore <img src="/Images/Icons/arrow.png" className="flex mt-1 ml-2 h-2 w-4 "/> </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col px-[15%] pt-20 text-gray-500 text-lg">
                    <div className="">
                        <span className="flex justify-start text-4xl text-primary font-semibold" >- Vision</span>
                        <p className="flex justify-start pt-5"><span className="text-2xl text-primary font-semibold font-serif pr-1">“ </span>Giving everyone with everything <br />they want to build their future <span className="text-2xl text-primary font-semibold font-serif pt-6 mr-1">”</span></p>
                    </div>
                    <div className="pb-20">
                        <span className="flex justify-end text-4xl text-primary font-semibold" >Mission -</span>
                        <p className="flex justify-end pt-5"><span className="text-2xl text-primary font-semibold font-serif pr-1">“ </span>Create a platform where project <br />initiators come to raise fund for their projects<span className="text-2xl text-primary font-semibold font-serif pt-6"> ”</span></p>
                    </div>
                    <div className="mx-[45%] h-1 w-28 bg-primary"></div>
                </div>

                {/* <div className="flex flex-col pt-5">
                    <p className="flex justify-center text-4xl font-bold text-primary">Our Team members</p>
                </div> */}
                    
            </div>
            
        </Layout>
    )
}