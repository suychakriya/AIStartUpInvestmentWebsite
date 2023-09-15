import Layout from "@/components/Layout";
import Searchpage from "./Searchpage";
import Link from "next/link";

export default function Homepage () {
    return (
        <Layout>
            <div className="flex flex-col pb-5">
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
            </div>
            
        </Layout>
    )
}