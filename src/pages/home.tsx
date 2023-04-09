import { useEffect, useState } from "react"
import Product from "../components/products"
import { IProduct } from "../models"
import { getAll } from "../api/product"

const Home = () => {

    const [products,setProducts] = useState<IProduct[]>([])
    const fetchProducts = async () => {
        try {
            const {data} = await getAll()
            setProducts (data)
        }catch(err){

        }
        
    }
        useEffect(() => {
            fetchProducts()
        },[])

    return <div className="container mx-auto">
        <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3">
            {products.map(product => <Product
            data={product}
            key={product.id}
                />)}
        </div>
    </div>
}

export default Home