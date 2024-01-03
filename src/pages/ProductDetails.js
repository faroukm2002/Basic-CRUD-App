import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

    let { productId } = useParams();
    const [product,setproduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:9000/products/${productId}`)
        .then((res)=>res.json())
        .then((data)=> setproduct(data))

    },[])

    return (
    <>
    
    {product?<h1>{product.title}</h1>  :null}  
    </>
  );
}

export default ProductDetails;
