import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

function Products() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getallproducts();
    }, []);

    const getallproducts = () => {
        fetch("http://localhost:9000/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            });
    };

    const deleteProduct = (productId) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this product?");
        
        if (shouldDelete) {
            fetch(`http://localhost:9000/products/${productId}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    getallproducts();
                });
        }
    };

    return (
        <>
            <h1>Products Page</h1>

            <Link to={"/products/add"} className="btn btn-success mt-2">
                Add New Product{" "}
            </Link>
            <table className="table table-striped mt-5 products-table">
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
                    {products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        Delete{" "}
                                    </button>
                                    <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">
                                        View{" "}
                                    </Link>
                                    <button className="btn btn-primary btn-sm">Edit </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Products;
