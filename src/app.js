import './app.css';
import CreateProduct from './components/create-product/CreateProduct';
import ProductList from './components/product-list/ProductList';




function App() {
    return (
        <div>
            <CreateProduct></CreateProduct>
            <ProductList></ProductList>
        </div>
    );
}

export default App;