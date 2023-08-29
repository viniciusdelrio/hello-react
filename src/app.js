import React, { useState } from 'react';
import './app.css';
import CreateProduct from './components/create-product/CreateProduct';
import ProductList from './components/product-list/ProductList';

function App() {

    let [newProduct, updateProduct] = useState(null);

    function createProduct(product) {
        updateProduct(product);
    }

    return (
        <div>
            <CreateProduct createProduct={createProduct}></CreateProduct>
            <ProductList newProduct={newProduct}></ProductList>
        </div>
    );
}

export default App;