import Layout from "@/components/Layout";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/constants/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detailpage () {
    const router = useRouter();
    const [items, setItems] = useState(products.filter(product => product.id === Number(router.query.id)));

    useEffect(() => {      
        const testProduct = products.filter(product => product.id === Number(router.query.id));
        setItems(testProduct[0])
    }, [])
    
    return (
        <Layout title="Detail">  
            <div className="flex flex-col">       
                    <ProductDetail
                    key={items.id}
                    name={items.name}
                    category={items.category}
                    fund={items.fund}
                    percent={items.percent}
                    image={items.image}
                    website={items.website}
                    overview={items.overview}
                    youtubeID={items.youtubeID} />
                </div>
        </Layout>
    )
}