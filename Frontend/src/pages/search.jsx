import ProductItem from "@/components/ProductItem";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useContext } from "react";

import { products } from "@/constants/products";
import Link from "next/link";

const PAGE_SIZE = 2;

// const prices = [
//     {
//         name: '$1 to 50',
//         value: '1-50',
//     },
//     {
//         name: '$50$ to $200',
//         value: '51-200',
//     },
// ];

export default function Search(props) {
    const router = useRouter();

    const {
        query = 'all',
        category = 'all',
        price = 'all',
        page = 1, 
    } = router.query;

    // const { products, countProducts, categories, pages } = props;

    const filterSearch = ({
        page,
        category,
        searchQuery,
        price,
    }) => {
        const { query } = router;
        if (page) query.page = page;
        if(searchQuery) query.searchQuery = searchQuery;
        if (category) query.category = category;
        if (price) query.price = price;

        router.push ({
            pathname: router.pathname,
            query: query,
        })
    };
    const categoryHandler = (e) => {
        filterSearch({ category: e.target.value});
    };
    const priceHandler = (e) => {
        filterSearch({ price: e.target.value});
    };
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
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/image.png"
                        alt="ImageIcon" />
                        <p className="px-3 text-black text-sm">Image generation AI Services</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/music.png"
                        alt="MusicIcon" />
                        <p className="px-3 text-black text-sm">Music AI Services</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/text.png"
                        alt="TextIcon" />
                        <p className="px-3 text-black text-sm">Text generation</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/video.png"
                        alt="VideoIcon" />
                        <p className="px-3 text-black text-sm">Video AI generation</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/email.png"
                        alt="EmailIcon" />
                        <p className="px-3 text-black text-sm">Email Writing</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/voice.png"
                        alt="VoiceIcon" />
                        <p className="px-3 text-black text-sm">Voice Recognition</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/coding.png"
                        alt="CodingIcon" />
                        <p className="px-3 text-black text-sm">Coding Generation</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/prompt.png"
                        alt="PromptIcon" />
                        <p className="px-3 text-black text-sm">Prompt</p>
                        </div>
                    </Link>
                    <Link href={``}>
                        <div className="flex pb-4">
                        <img 
                        src="/Images/Icons/slidepresentation.png"
                        alt="SlideIcon" />
                        <p className="px-3 text-black text-sm">Slide Presentation</p>
                        </div>
                    </Link>

                </div>
            </div>
            <div className="md:col-span-3">
                {/* <div className="mb-2 flex items-center justify-between border-b-2 pb-2">
                    <div className="flex items-center">
                        {products.length === 0 ? 'No' : countProducts} Results
                            {query !== 'all' && query !== '' && ' : ' + query}
                            {category !== 'all' && ' : ' + category}
                            {price !== 'all' && ' : ' + price}
                            &nbsp;
                            {(query !== 'all' && query !== '') ||
                            category !== 'all' ||
                            price !== 'all' ? (
                                <button onClick={() => router.push('/search')}>
                                    <XClircleIcon className="h-5 w-5" />
                                </button>
                            ) : null}
                    </div>
                </div> */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 ">
                    {products.map(({ id, name, category, fund, percent, image, website }) => (
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

// export async function getServerSideProps({ query }) {
//     const pageSize = query.pageSize || PAGE_SIZE;
//     const page = query.page || 1; 
//     const category = query.category || '';
//     const price = query.price || '';
//     const searchQuery = query.query || '';

//     const queryFilter = 
//         searchQuery && searchQuery !== 'all'
//         ? {
//             name: {
//                 $regex: searchQuery,
//                 $options: 'i',
//             }
//         }
//         : {};
//     const categoryFilter = category && category !== 'all' ? { category } : {};

// }

