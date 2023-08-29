import React, { useState } from 'react';

function ProductForm(props) {
    
    // Used by Approach 1
    let [pName, updateName] = useState('');
    let [pPrice, updatePrice] = useState('');
    let [pDescription, updateDescription] = useState('');
    let [pAvailable, updateAvailability] = useState(false);
    let [pImageUrl, updateImageUrl] = useState('');

    // // Used by Approach 2 & 3
    // let[userInput, updateUserInput] = useState({
    //     pName: '',
    //     pPrice: '',
    //     pDescription: '',
    //     pAvailable: '',
    //     pImage: ''
    // });

    function nameInputHandler(event) {
        // Approach 1:
        updateName(event.target.value);

        // // Approach 2: Could have a bug because 'userInput' could not be in the latest state. But it works in major cases.
        // updateUserInput({
        //     ...userInput,
        //     pPrice: event.target.value,
        // });
        
        // // Apporach 3: This is the best when use an object state, because it guarantee that you have the latest state of an object
        // updateUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         pName: event.target.value
        //     };
        // });
    }

    function priceInputHandler(event) {
        updatePrice(event.target.value);
    }

    function descriptionInputHandler(event) {
        updateDescription(event.target.value);
    }

    function availabilityInputHandler(event) {
        updateAvailability(event.target.checked);
    }

    function imageInputHandler(event) {
        updateImageUrl(event.target.value);
    }

    function createProductEventHandler(event) {
        event.preventDefault();
        
        let product = {
            pName: pName,
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice)
        };

        updateName('');
        updatePrice('');
        updateDescription('');
        updateAvailability(false);
        updateImageUrl('');

        props.createProduct(product);
    }

    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Product Name"
                        value={pName}
                        onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        placeholder="Product Price"
                        value={pPrice}
                        onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        placeholder="Product Description"
                        value={pDescription}
                        onChange={descriptionInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={pAvailable} onChange={availabilityInputHandler} />
                <label className="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image" value={pImageUrl} onChange={imageInputHandler} />
            </div>
            

            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    );
}

export default ProductForm;