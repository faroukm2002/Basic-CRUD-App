import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./products.css"
function Products ()
{
const[products,setproduct] =useState([])

    useEffect(()=>{
        fetch("http://localhost:9000/products")
        .then((res)=>res.json())
         .then((data)=>{
            console.log(data)
         setproduct(data)       
        })               
        },[])
        
return (

    <>
    <h1>Products Page</h1>

       <Link to={'/products/add'}  className="btn btn-success mt-2">Add New Product </Link> 
    <table class="table table-striped mt-5 products-tabel">
    <thead>

        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>

            <th>Price</th>
            <th>Operations</th>

        </tr>
    </thead>
    <tbody>
        {products.map((product) =>{
            return (
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0,20)}...</td>
                <td>{product.price}</td>
                <td>
                <button className="btn btn-danger btn-sm">Delete </button>
                <Link to={`/products/${product.id}`} className="btn btn-info btn-sm" >View </Link>
                <button className="btn btn-primary btn-sm">Edit </button>
    
                </td>
    
            </tr>
            )
        })}
      
    </tbody>
</table>
    </>
)

}

export default Products