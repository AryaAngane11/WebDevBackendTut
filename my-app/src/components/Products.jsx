import React  from "react";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const Products = () => {
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.in/api/products');
            const data = await response.json();
            if (data.status === 'SUCCESS') {
              setProductDetails(data.products); // Store fetched products in 
              console.log(data);
            }
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts(); // Call the function to fetch data
      }, []);



    
  return (
    <div className="d-flex flex-wrap" style={{height:"150px"}}>
      {/* Step 3: Render products dynamically using map */}
      {productDetails.map((product) => (
        <div key={product.id} className="card m-3 sizecard" style={{ width: '18rem' }}>
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
