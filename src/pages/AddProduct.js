import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

  let navigate=useNavigate();
    // stop refreshing add product page
    const formSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:9000/products", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                price: price,
                description:description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
        navigate('/products')
    };

    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="producttitle" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="producttitle"
                        placeholder="product title"
                        aria-describedby="product title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productprice" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="productprice"
                        placeholder="product price"
                        aria-describedby="product price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productdescription" className="form-label">
                    Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productdescription"
                        placeholder="product description"
                        aria-describedby="product description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Product
                </button>
            </form>
        </>
    );
}

export default AddProduct;
