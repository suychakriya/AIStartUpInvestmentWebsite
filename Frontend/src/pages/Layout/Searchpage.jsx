import ProductItem from "@/components/ProductItem";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "@/constants/products";
import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/outline";

const PAGE_SIZE = 2;

export default function Searchpage(props) {
    const router = useRouter();
  
    const [items, setItems] = useState(products);
    const [count, setCount] = useState();
    const [categoryValue, setCategoryValue] = useState("")

    const filterSearch =  ( categoryValue ) => {    
            const testProduct = products.filter(product => product.category === categoryValue);
            setItems(testProduct)
            setCount(testProduct.length)
            setCategoryValue(categoryValue)
        };
    // };
    // const categoryHandler = (e) => {
    //     filterSearch({ category: e.target.value});
    // };
   
    const pageHandler = (page) => {
        filterSearch({ page });
    };

    return (
       <Layout title="search">
        <div className="px-5 pb-5 grid md:grid-cols-4 md:gap-5">
            <div className="rounded-lg px-8 bg-white">
                <div className="flex flex-cols my-3 border-2 border-gray-00 border-t-0 border-r-0 border-l-0 ">
                    <img 
                    src="/Images/Icons/catergory.png"
                    alt="catergory icon"
                    className="h-5 w-5 mt-1"/>
                    <h1 className=" px-3 pb-3 text-xl font-bold text-primary">Categories</h1>
                </div>
                
                <div className="my-3 pt-5">
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Image generation AI Services")}>
                        <img 
                        src="/Images/Icons/image.png"
                        alt="ImageIcon" />
                        <p className="px-3 text-black text-sm">Image generation AI Services</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Music AI Services")}>
                        <img 
                        src="/Images/Icons/music.png"
                        alt="MusicIcon" />
                        <p className="px-3 text-black text-sm">Music AI Services</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Text generation")}>
                        <img 
                        src="/Images/Icons/text.png"
                        alt="TextIcon" />
                        <p className="px-3 text-black text-sm">Text generation</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Video AI generation")}>
                        <img 
                        src="/Images/Icons/video.png"
                        alt="VideoIcon" />
                        <p className="px-3 text-black text-sm">Video AI generation</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Email Writing")}>
                        <img 
                        src="/Images/Icons/email.png"
                        alt="EmailIcon" />
                        <p className="px-3 text-black text-sm">Email Writing</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Voice Recognition")}>
                        <img 
                        src="/Images/Icons/voice.png"
                        alt="VoiceIcon" />
                        <p className="px-3 text-black text-sm">Voice Recognition</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Coding Generation")}>
                        <img 
                        src="/Images/Icons/coding.png"
                        alt="CodingIcon" />
                        <p className="px-3 text-black text-sm">Coding Generation</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Prompt")}>
                        <img 
                        src="/Images/Icons/prompt.png"
                        alt="PromptIcon" />
                        <p className="px-3 text-black text-sm">Prompt</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4" onClick={() => filterSearch("Slide Presentation")}>
                        <img 
                        src="/Images/Icons/slidepresentation.png"
                        alt="SlideIcon" />
                        <p className="px-3 text-black text-sm">Slide Presentation</p>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="md:col-span-3">
                <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
                    <div className="flex items-center text-black">
                        {count === 0 ? 'No' : count} Results
                            {(categoryValue !== '') ? (
                                <button onClick={() => window.location = "/Layout/Searchpage"}>
                                    <XCircleIcon className=" pt-1 h-5 w-6 " />
                                </button>
                            ) : null}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 ">
                    {items.map(({ id, name, category, fund, percent, image, website }) => (
                        <ProductItem
                        key={name}
                        id={id}
                        name={name}
                        category={category}
                        fund={fund}
                        percent={percent}
                        image={image}
                        website={website} />
                    ))
                    }
                </div>
                {/* <ul className="flex">
                    {products.length > 0 &&
                        [...Array(pages).keys()].map((pageNumber) => (
                            <li key={pageNumber}>
                                <button
                                className={`default-button m-2${
                                    page == pageNumber + 1 ? 'font-bold' : ''
                                }`}
                                onClick={() => pageHandler(pageNumber + 1)}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        ))}
                </ul> */}
            </div>
        </div>
       </Layout>
    );
}

