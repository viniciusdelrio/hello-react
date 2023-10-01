import ProductForm from "./ProductForm";

function CreateProduct(props) {

    function onCreateProduct(product) {
        props.createProduct(product);
    }

    return (
        <div style={{backgroundColor: 'white', padding: '10px 20px', borderRadius: 2}}>
            <ProductForm createProduct={onCreateProduct}></ProductForm>
        </div>
    );
}

export default CreateProduct;