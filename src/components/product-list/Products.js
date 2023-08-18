import React from 'react';
import ProductDetails from "./ProductDetails";

function Products(props) {
    return (
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.description}</p>
                    <ProductDetails price={props.price}
                                    isAvailable={props.isAvailable}>
                    </ProductDetails>
                </div>
                <img src={props.imageUrl} width="200" className="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>
    );
}

export default Products;